import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, MapPin } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import Logo from './Logo';

interface NavbarProps {
  onAuthClick: () => void;
}

export default function Navbar({ onAuthClick }: NavbarProps) {
  const { isAuthenticated, user, logout } = useAuthStore();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/islands', label: 'Islands' },
    { path: '/guides', label: 'Travel Guides' },
    { path: '/activities', label: 'Activities' },
    { path: '/hotels', label: 'Hotels' },
    { path: '/rent-a-car', label: 'Rent A Car' },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Navigation Links - Responsive */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Search Bar - Responsive */}
          <div className="flex-1 max-w-xl mx-4 hidden lg:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search destinations, hotels, activities..."
                className="w-full px-4 py-2 pl-10 pr-12 rounded-full border border-gray-200 focus:outline-none focus:border-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <MapPin className="absolute right-3 top-2.5 h-5 w-5 text-blue-500 cursor-pointer" />
            </div>
          </div>

          {/* Right Section - Responsive */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link
              to="/list-property"
              className="hidden lg:block px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              List Property
            </Link>

            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <span className="hidden md:block text-sm font-medium">
                  {user?.name}
                </span>
                <button
                  onClick={logout}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  <User className="h-4 w-4" />
                  <span className="hidden md:inline">Logout</span>
                </button>
              </div>
            ) : (
              <button
                onClick={onAuthClick}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700"
              >
                <User className="h-4 w-4" />
                <span className="hidden md:inline">Sign In</span>
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMobileMenu}
                  className={`block px-4 py-2 text-base font-medium rounded-lg ${
                    location.pathname === link.path
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/list-property"
                onClick={closeMobileMenu}
                className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                List Property
              </Link>
            </div>
            <div className="mt-4 px-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}