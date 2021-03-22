<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use DateTime;

use App\Models\Book;

class BooksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /* DB::table('books')->insert([
            'title' => 'Hobbit',
            'isbn' => '4777237677',
            'subtitle' => Str::random(100),
            'rating'=> 10,
            'description' => Str::random(1000),
            'published' => new DateTime(),
            'created_at' => date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s'),
        ]); */

        // über ORmapper
        // php artisan db:seed
        $book = new Book;
        $book->title = 'Herr der Ringe 2';
        $book->isbn = '357788888';
        $book->subtitle = 'asfgg';
        $book->rating = 10;
        $book->description = 'Fhghgh';
        $book->published = new DateTime();

        // first user
        $user = \App\Models\User::all()->first();
        $book->user()->associate($user);

        $book->save(); // anlegen + update (or mapper checkt, ob Buch existiert oder nicht)
        // für delete: $book->delete()

        $image1 = new \App\Models\Image;
        $image1->title = 'Bild 1';
        $image1->url = 'https://images.unsplash.com/photo-1535666669445-e8c15cd2e7d9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9yZCUyMG9mJTIwcmluZ3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60';

        $image2 = new \App\Models\Image;
        $image2->title = 'Bild 2';
        $image2->url = 'https://images.unsplash.com/photo-1577453193951-ae7a761e70eb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

        $book->images()->saveMany([$image1, $image2]);

        // test authors
        $authors = \App\Models\Author::all()->pluck('id');
        $book->authors()->sync($authors);

        $book->save();
    }
}
