<?php
/*
 * Definition of the routes for the applications
 * @author: Quoc Tri Tran
 */

Route::get('/', function () {
    return view('welcome');
});


Route::post('auth', 'UserController@checkAuth');