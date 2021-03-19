<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/books', [\App\Http\Controllers\BookController::class, 'index']);
Route::get('/book/{isbn}', [\App\Http\Controllers\BookController::class, 'findByISBN']);
Route::get('/books/checkisbn/{isbn}', [\App\Http\Controllers\BookController::class, 'checkISBN']);
Route::get('/books/search/{searchTerm}', [\App\Http\Controllers\BookController::class, 'findBySearchTerm']);
