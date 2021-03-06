<?php

use App\Http\Controllers\AttachmentController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ComponentController;
use App\Http\Controllers\ComponentItemController;
use App\Http\Controllers\DonationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LangController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\PaymentGatewayController;
use App\Http\Controllers\ReceiptController;
use App\Models\Lang;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', [AuthController::class, 'login']);

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('me', [AuthController::class, 'me']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::get('menu', [MenuController::class, 'index']);

    Route::get('component/getByName/{name}', [ComponentController::class, 'getByName'])->where('name', '[A-Za-z]+');

    Route::apiResources([
        'component' => ComponentController::class,
        'donation' => DonationController::class,
        'paymentGateway' => PaymentGatewayController::class,
        'receipt' => ReceiptController::class,
        'user' => UserController::class,
        'lang' => LangController::class,
        'componentItem' => ComponentItemController::class
    ]);

    Route::post('upload', [AttachmentController::class, 'upload']);
});

Route::get('locale', [LangController::class, 'locale']);


Route::get('locale', function (Request $request) {
    return Lang::where('locale', $request->locale)->pluck('text', 'key');
});
