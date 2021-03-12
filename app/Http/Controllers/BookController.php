<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index () {
        // $books = DB::table('books')->get();
        $books = Book::all();
        return view('books.index', compact('books'));
    }

    public function show ($book) {
        // $books = DB::table('books')->get();
        $book = Book::find($book);
        return view('books.show', compact('book'));
    }
}
