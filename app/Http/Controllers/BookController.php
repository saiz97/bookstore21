<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index () {
        // $books = DB::table('books')->get();
        $books = Book::with(['authors', 'images', 'user'])->get();

        // return view('books.index', compact('books')); // wenn über web.php aufgerufen
        return $books;
    }

    public function show ($book) {
        // $books = DB::table('books')->get();
        $book = Book::find($book);
        return view('books.show', compact('book'));
    }

    public function findByISBN (string $isbn) : Book {
        return Book::where('isbn', $isbn)
                ->with(['authors', 'images', 'user'])
                ->first();
    }

    public function checkISBN (string $isbn) {
        return (Book::where('isbn', $isbn)->first() != null)
                    ? response()->json(true, 200)
                    : response()->json(false, 200);
    }

    public function findBySearchTerm(string $searchTerm) {
        $books = Book::with(['authors', 'images', 'user'])
            ->where ('title', 'LIKE', '%' . $searchTerm .'%')
            ->orWhere ('subtitle' , 'LIKE', '%' . $searchTerm .'%')
            ->orWhere ('description' , 'LIKE', '%' . $searchTerm .'%')

            ->orWhereHas('authors', function ($query) use ($searchTerm) {
                $query->where('firstName', 'LIKE', '%' . $searchTerm .'%')
                    ->orWhere('lastName', 'LIKE', '%' . $searchTerm .'%');
            })->get();
        return $books;
    }
}
