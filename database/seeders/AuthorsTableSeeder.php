<?php

namespace Database\Seeders;

use App\Models\Author;
use Illuminate\Database\Seeder;

class AuthorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $author1 = new Author();
        $author1->firstName = 'Charlie';
        $author1->lastName = 'Chip';
        $author1->save();

        $author2 = new Author();
        $author2->firstName = 'Gerda';
        $author2->lastName = 'Wurm';
        $author2->save();

        $author3 = new Author();
        $author3->firstName = 'Franz';
        $author3->lastName = 'Mayer';
        $author3->save();
    }
}
