'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, ShoppingCart, User, Menu, X, LogOut } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    router.push('/');
  };

  const handleUserClick = () => {
    if (user) {
      if (user.role === 'admin') {
        router.push('/admin');
      } else {
        router.push('/dashboard');
      }
    } else {
      router.push('/login');
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm border-b">
          <div className="text-gray-600">
            Free shipping on orders over ₹999
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">📞 +91 9109933507</span>
            <span className="text-gray-600">📧 Retroclub098@gmail.com</span>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-purple-600">
            Retro Club
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link href="/products?category=Men" className="text-gray-700 hover:text-purple-600 transition-colors">
              Men
            </Link>
            <Link href="/products?category=Women" className="text-gray-700 hover:text-purple-600 transition-colors">
              Women
            </Link>
            <Link href="/products?category=Kids" className="text-gray-700 hover:text-purple-600 transition-colors">
              Kids
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Search bar */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 w-64">
            <Search className="w-4 h-4 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none flex-1 text-sm"
            />
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* User Account */}
            {user ? (
              <div className="relative group">
                <button
                  onClick={handleUserClick}
                  className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
                >
                  <User className="w-6 h-6" />
                  <span className="hidden lg:block text-sm">{user.name}</span>
                  {user.role === 'admin' && (
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                      Admin
                    </span>
                  )}
                </button>
                
                {/* Dropdown */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <button
                    onClick={handleUserClick}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {user.role === 'admin' ? 'Admin Dashboard' : 'My Dashboard'}
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link href="/login" className="text-gray-700 hover:text-purple-600 transition-colors">
                <User className="w-6 h-6" />
              </Link>
            )}

            <Link href="/cart" className="relative text-gray-700 hover:text-purple-600 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors">
                Home
              </Link>
              <Link href="/products?category=Men" className="text-gray-700 hover:text-purple-600 transition-colors">
                Men
              </Link>
              <Link href="/products?category=Women" className="text-gray-700 hover:text-purple-600 transition-colors">
                Women
              </Link>
              <Link href="/products?category=Kids" className="text-gray-700 hover:text-purple-600 transition-colors">
                Kids
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">
                Contact
              </Link>
              
              {/* Mobile User Actions */}
              {user ? (
                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <button
                    onClick={handleUserClick}
                    className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    {user.role === 'admin' ? 'Admin Dashboard' : 'My Dashboard'}
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left text-gray-700 hover:text-purple-600 transition-colors flex items-center"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </button>
                </div>
              ) : (
                <Link href="/login" className="text-gray-700 hover:text-purple-600 transition-colors border-t border-gray-200 pt-4">
                  Login / Register
                </Link>
              )}
              
              <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
                <Search className="w-4 h-4 text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-transparent outline-none flex-1 text-sm"
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

