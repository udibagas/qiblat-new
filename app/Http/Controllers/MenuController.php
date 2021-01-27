<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MenuController extends Controller
{
    public function index(Request $request)
    {
        return [
            ['label' => 'Home', 'path' => '/', 'icon' => 'el-icon-s-home'],
            ['label' => 'User', 'path' => '/admin/user', 'icon' => 'el-icon-user'],
            ['label' => 'Lang', 'path' => '/admin/lang', 'icon' => 'el-icon-globe'],
        ];
    }
}
