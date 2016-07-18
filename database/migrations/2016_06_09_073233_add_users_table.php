<?php
/*
 * Migration file for php artisan migrate
 * @author: Quoc Tri Tran
 */

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('users')->insert(array(
            'name'          => 'Test User',
            'email'         => 'test@test.ch',
            'password'      => \Hash::make('test'),
            'created_at'    => date('Y-m-d H:i:s'),
            'updated_at'    => date('Y-m-d H:i:s')
        ));
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::table('users')->where('email','=','test@test.ch')->delete();
    }
}
