<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MenuController extends Controller
{
    public function index(Request $request)
    {
        return [
            ['label' => 'Home', 'link' => '/', 'icon' => 'el-icon-s-home'],
            ['label' => 'User', 'link' => '/admin/user', 'icon' => 'el-icon-user'],
            ['label' => 'Lang', 'link' => '/admin/lang', 'icon' => 'el-icon-globe'],
        ];
    }
}
