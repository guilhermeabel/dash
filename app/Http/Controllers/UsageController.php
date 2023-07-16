<?php

namespace App\Http\Controllers;

use App\Models\Usage;

class UsageController extends Controller
{
    public function store($messageId, $model, $promptToken, $completionToken, $totalToken)
    {
        $usage = new Usage();
        $usage->messageId = $messageId;
        $usage->model = $model;
        $usage->promptToken = $promptToken;
        $usage->completionToken = $completionToken;
        $usage->totalToken = $totalToken;
        $usage->save();
    }

}
