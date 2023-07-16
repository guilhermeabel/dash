<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usage extends Model
{
    use HasFactory;

    public $fillable = ['message_id', 'model', 'prompt_tokens', 'completion_tokens', 'total_tokens'];

}
