<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Book extends Model
{
    use HasFactory;

    // wird auf books gemappt (von ORmapper)
    // protected $table = 'buecher';

    // must assignments = fillables
    protected $fillable = ['isbn', 'title', 'subtitle', 'published', 'rating', 'description', 'user_id'];

    public function isFavorite() :bool {
        return ($this->rating >= 8);
    }

    public function user() : BelongsTo {
        return $this->belongsTo(User::class);
    }

    /**
     * 1-n relation
     * book has many images
     */
    public function images() : HasMany {
        return $this->hasMany(Image::class);
    }

}
