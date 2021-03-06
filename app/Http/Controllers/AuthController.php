<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $auth = Auth::attempt(['email' => $request->email, 'password' => $request->password], true);

        if (!$auth) {
            return response(['message' => 'Invalid email or password'], 401);
        }

        return response('', 204);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response('', 204);
    }

    public function me(Request $request)
    {
        return $request->user();
    }
}
