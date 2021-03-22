<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Image extends Model
{
    use HasFactory;

    protected $fillable = ['url', 'title'];

    /**
     * 1-n relation
     * book has many images
     */
    public function book() : BelongsTo {
        return $this->belongsTo(Book::class);
    }
}
