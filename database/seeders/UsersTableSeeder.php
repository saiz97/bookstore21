<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new \App\Models\User;
        $user->name = 'testuser';
        $user->email = 'test@gmail.com';
        $user->password = bcrypt('secret');
        $user->save();
    }
}
