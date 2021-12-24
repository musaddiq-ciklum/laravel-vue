<?php

use \App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::post('/login',[LoginController::class,'login'])->name('user.login');
Route::post('/register',[LoginController::class,'register'])->name('user.register');
Route::post('/logout',[LoginController::class,'logout'])->name('user.logout');


Route::view('/{any}', 'welcome')
    //->middleware('auth')
    ->where('any', '.*');
