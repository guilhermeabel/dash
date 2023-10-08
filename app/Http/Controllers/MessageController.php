<?php

namespace App\Http\Controllers;

use App\Models\Message;

class MessageController extends Controller
{
    public function store($chatId, $role, $content)
    {
        $message = new Message();
        $message->chat_id = $chatId;
        $message->role = $role;
        $message->content = $content;
        $message->save();
    }

    public function saveUserMessage($chatId, $content)
    {
        $this->store($chatId, 'user', $content);
    }

    public function saveResponseMessage($chatId, $content)
    {
        $this->store($chatId, 'system', $content);
    }
}
