<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Entry extends Model {
    use HasFactory;

    protected $fillable = [
        'month'
    ];

    public function items() {
        return $this->hasMany(Item::class);
    }
}
