<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');
Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');
Route::get('/shop', function () {
    return Inertia::render('Shop');
})->name('shop');
Route::get('/blog', function () {
    return Inertia::render('Blog');
})->name('blog');
Route::get('/checkout', function () {
    return Inertia::render('Checkout');
})->name('checkout');
Route::get('/faq', function () {
    return Inertia::render('FAQ');
})->name('faq');
Route::get('/cart', function () {
    return Inertia::render('Cart');
})->name('cart');
Route::get('/show', function () {
    return Inertia::render('ProductDetail');
})->name('show');
Route::get('/wishlist', function () {
    return Inertia::render('Wishlist');
})->name('wishlist');
Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
