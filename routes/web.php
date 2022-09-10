<?php

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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'User\DashboardController@index')->name('home');

// TATANAN 1
Route::get('/kehidupan-masyarakat-sehat-mandiri', 'User\Tatanan1Controller@index')->name('tatanan1');
