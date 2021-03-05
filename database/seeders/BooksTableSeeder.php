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
        $book = new Book();
        $book->title = 'Herr der Ringe 2';
        $book->isbn = '357788888';
        $book->subtitle = 'asfgg';
        $book->rating = 10;
        $book->description = 'Fhghgh';
        $book->published = new DateTime();
        $book->save(); // anlegen + update (or mapper checkt, ob Buch existiert oder nicht)
        // für delete: $book->delete()
    }
}
