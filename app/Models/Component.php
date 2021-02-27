<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Component extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'title',
        'description',
        'body',
        'active'
    ];

    protected $with = ['attachments', 'items'];

    public function attachments()
    {
        return $this->morphMany(Attachment::class, 'attachable');
    }

    public function items()
    {
        return $this->hasMany(ComponentItem::class);
    }
}
