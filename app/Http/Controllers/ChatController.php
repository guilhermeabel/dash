<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use App\Models\Message;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChatController extends Controller
{
    public function index()
    {
        return Inertia::render('Chat/Index')->with("chatId", $this->getUserChatId());
    }

    public function create(): int
    {
        $chat = new Chat();
        $chat->user_id = auth()->user()->id;
        $chat->save();

        return $chat->id;
    }

    public function sendRequest(Request $request)
    {
        // check if chatid from request is from the same user
        // check if user has exceeded the usage limit

        $request->validate([
            'newMessage' => 'bail|required|max:5255',
            'messageHistory' => 'required',
        ]);

        $openAIController = new OpenAIController();
        $response = $openAIController->sendRequest($request->newMessage["content"], $request->messageHistory);

        $this->persistResults($request, $response);
    }

    public function getChatMessages(int $id)
    {
        $messages = Message::where('chat_id', $id)->get();
        // return only role and content of each message
        $messages = $messages->map(function ($message) {
            return [
                'role' => $message->role,
                'content' => $message->content,
            ];
        });

        return $messages;
    }


    private function persistResults($request, $response)
    {
        $messageController = new MessageController();
        $messageController->saveUserMessage(
            $request->chatId,
            $request->newMessage["content"]
        );

        $messageController->saveResponseMessage(
            $request->chatId,
            $response['choices'][0]['message']['content']
        );

        $usageController = new UsageController();
        $usageController->store(
            $request->chatId,
            $response["model"],
            $response["usage"]["prompt_tokens"],
            $response["usage"]["completion_tokens"],
            $response["usage"]["total_tokens"]
        );
    }

    private function getUserChatId(): int
    {
        $userId = auth()->user()->id;
        $chat = Chat::where('user_id', $userId)->first();

        if (!$chat) {
            return $this->create();
        }

        return $chat->id;
    }
}
