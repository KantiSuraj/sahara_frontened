import React from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, Heart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import ThemeToggle from '@/components/themetoggle';

const Header = () => {
  return (
    <header className="border-b sticky top-0 bg-background z-50">
      {/* Main header with logo, search, and user actions */}
      <div className="py-2 sm:py-4">
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl sm:text-2xl font-bold text-dark flex items-center">
              <span className="text-primary">S</span>ahara
            </span>
          </Link>

          {/* Search - hidden on small mobile screens */}
          <div className="hidden sm:flex flex-1 max-w-md mx-4 lg:mx-10">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full pr-10 border-gray-300 rounded-md focus-visible:ring-primary text-sm"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* User actions */}
          <div className="flex items-center space-x-1 xs:space-x-2 sm:space-x-4">
            <Link href="/account" className="hidden md:flex items-center hover:text-primary transition-colors p-1.5">
              <User className="h-5 w-5 mr-1" />
              <span className="sr-only md:not-sr-only text-sm">Account</span>
            </Link>
            <Link href="/wishlist" className="flex items-center hover:text-primary transition-colors p-1.5">
              <div className="relative">
                <Heart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </div>
              <span className="sr-only sm:not-sr-only sm:ml-1 text-sm hidden md:inline-block">Wishlist</span>
            </Link>
            <Link href="/cart" className="flex items-center hover:text-primary transition-colors p-1.5">
              <div className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </div>
              <span className="sr-only sm:not-sr-only sm:ml-1 text-sm hidden md:inline-block">Cart</span>
            </Link>
            <ThemeToggle />
            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="sm:hidden p-1.5">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[85%] sm:w-[385px] p-0">
                <div className="p-4 border-b flex items-center justify-between">
                  <span className="text-xl font-bold text-dark flex items-center">
                    <span className="text-primary">S</span>ahara
                  </span>
                  <SheetClose className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-gray-100">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>

                  </SheetClose>
                </div>
                <div className="mt-6 border-t pt-4 px-4">
                  <ThemeToggle />
                </div>
                <div className="p-4">
                  <div className="mb-6">
                    <Input
                      type="search"
                      placeholder="Search products..."
                      className="w-full pr-10 text-sm"
                    />
                  </div>

                  <div className="space-y-1 mb-4">
                    {/* {*<h3 className="text-xs uppercase font-medium text-gray-500 tracking-wider mb-2">Navigation</h3>*} */}
                    <Link href="/" className="block py-2 hover:text-primary transition-colors text-sm font-medium">Home</Link>
                    <Link href="/shop" className="block py-2 hover:text-primary transition-colors text-sm font-medium">Shop</Link>
                    <Link href="/categories" className="block py-2 hover:text-primary transition-colors text-sm font-medium">Categories</Link>
                    <Link href="/products" className="block py-2 hover:text-primary transition-colors text-sm font-medium">Products</Link>
                  </div>

                  <div className="space-y-1 mb-4">
                    {/* <h3 className="text-xs uppercase font-medium text-gray-500 tracking-wider mb-2">Pages</h3> */}
                    <Link href="/about" className="block py-2 hover:text-primary transition-colors text-sm">About</Link>
                    <Link href="/contact" className="block py-2 hover:text-primary transition-colors text-sm">Contact</Link>
                    <Link href="/faq" className="block py-2 hover:text-primary transition-colors text-sm">FAQ</Link>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xs uppercase font-medium text-gray-500 tracking-wider mb-2">Account</h3>
                    <Link href="/login" className="block py-2 hover:text-primary transition-colors text-sm">Login</Link>
                    <Link href="/register" className="block py-2 hover:text-primary transition-colors text-sm">Register</Link>
                    <Link href="/account" className="block py-2 hover:text-primary transition-colors text-sm">My Account</Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="sm:block mb-3">
  <div className="container-custom">
    <div className="flex flex-wrap items-center justify-between">
      <nav className="flex flex-wrap space-x-4 sm:space-x-8">
        <Link href="/" className="py-2 sm:py-3 text-sm font-medium hover:text-primary transition-colors">
          Home
        </Link>
        <Link href="/shop" className="py-2 sm:py-3 text-sm font-medium hover:text-primary transition-colors">
          Shop
        </Link>
        <Link href="/categories" className="py-2 sm:py-3 text-sm font-medium hover:text-primary transition-colors">
          Categories
        </Link>
        <Link href="/product" className="py-2 sm:py-3 text-sm font-medium hover:text-primary transition-colors">
          Products
        </Link>
        <Link href="/about" className="py-2 sm:py-3 text-sm font-medium hover:text-primary transition-colors">
          About
        </Link>
        <Link href="/contact" className="py-2 sm:py-3 text-sm font-medium hover:text-primary transition-colors">
          Contact
        </Link>
      </nav>
      <div className="flex space-x-4 mt-2 sm:mt-0">
        <Link href="/login" className="text-sm font-medium px-4 py-2 border rounded hover:bg-primary hover:text-white transition">
          Log In
        </Link>
        <Link href="/signup" className="text-sm font-medium px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition">
          Sign Up
        </Link>
      </div>
    </div>
  </div>
</div>

    </header>
  );
};

export default Header;
