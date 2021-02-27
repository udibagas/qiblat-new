<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ComponentItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'component_id',
        'content'
    ];

    protected $casts = ['content' => 'json'];

    public function attachments()
    {
        return $this->morphMany(Attachment::class, 'attachable');
    }
}
