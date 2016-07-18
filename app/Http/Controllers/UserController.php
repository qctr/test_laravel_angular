<?php
/*
 * UserController
 * @author: Quoc Tri Tran
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
	/*
	 * verify the authentification
	 */
    public function checkAuth(Request $request) { 
		$credentials = [
			'email' => $request->input('email'),
			'password' => $request->input('password'),
		];

		if(!Auth::attempt($credentials)){
			return response('Username password doesnt match', 403);
		}

		return response(Auth::user(), 201);
	}
}
