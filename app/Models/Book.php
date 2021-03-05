<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    // wird auf books gemappt (von ORmapper)
    // protected $table = 'buecher';

    protected $fillable = ['isbn', 'title', 'subtitle', 'published', 'rating', 'description', 'user_id'];

    public function isFavorite() :bool {
        return ($this->rating >= 8);
    }
}
