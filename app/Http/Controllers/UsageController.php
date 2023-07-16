<?php

namespace App\Http\Controllers;

use App\Models\Usage;

class UsageController extends Controller
{
    public function store($messageId, $model, $promptToken, $completionToken, $totalToken)
    {
        $usage = new Usage();
        $usage->message_id = $messageId;
        $usage->model = $model;
        $usage->prompt_tokens = $promptToken;
        $usage->completion_tokens = $completionToken;
        $usage->total_tokens = $totalToken;
        $usage->save();
    }

}
