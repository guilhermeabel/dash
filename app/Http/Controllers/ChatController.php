<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChatController extends Controller
{
    public function index()
    {
        return Inertia::render('Chat/Index');
    }

    public function create()
    {
        $chat = new Chat();
        $chat->userId = auth()->user()->id;
        $chat->save();
    }

    public function sendRequest(Request $request)
    {
        $openAIController = new OpenAIController();
        $response = $openAIController->sendRequest($request->newMessage, $request->messageHistory);

        $this->persistResults($request, $response);
    }



    private function persistResults($request, $response)
    {
        $messageController = new MessageController();
        $messageController->saveUserMessage(
            $request->chatId,
            $request->newMessage
        );

        $messageController->saveResponseMessage(
            $request->chatId,
            $response['choices'][0]['message']['content']
        );

        $usageController = new UsageController();
        $usageController->store(
            $request->chatId,
            $response["model"],
            $response["usage"]["promptToken"],
            $response["usage"]["completionToken"],
            $response["usage"]["totalToken"]
        );
    }
}
