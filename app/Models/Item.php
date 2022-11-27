<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

	protected $fillable = [
        'name',
        'type',
        'value',
        'description'
    ];

	public function entry()
    {
        return $this->belongsTo(Entry::class);
    }
}
