<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Attachment extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'path', 'data'];

    protected $casts = ['data' => 'json'];

    protected $appends = ['url'];

    public function attachable()
    {
        return $this->morphTo();
    }

    public function getUrlAttribute()
    {
        return url(Storage::url($this->path));
    }
}
