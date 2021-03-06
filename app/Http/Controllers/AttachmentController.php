<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AttachmentController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'file' => 'file|required|mimes:png,jpg,jpeg,pdf'
        ]);

        $file = $request->file('file');
        $path = $file->store('uploads/' . date('Y/m/d'));

        return [
            'name' => $file->getClientOriginalName(),
            'path' => $path,
            'url' => url(Storage::url($path)),
            'data' => $request->data
        ];
    }
}
