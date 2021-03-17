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

    protected $with = ['attachments'];

    public function attachments()
    {
        return $this->morphMany(Attachment::class, 'attachable');
    }

    public function component()
    {
        return $this->belongsTo(Component::class);
    }

    public function scopeLocale($q, $locale)
    {
        return $q->whereHas('component', function ($q) use ($locale) {
            $q->where('locale', $locale);
        });
    }
}
