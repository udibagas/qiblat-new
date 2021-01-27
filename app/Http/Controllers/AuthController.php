<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        return Auth::attempt($request->only(['email', 'password']));
    }

    public function logout()
    {
        return Auth::logout();
    }

    public function me(Request $request)
    {
        return $request->user();
    }
}
