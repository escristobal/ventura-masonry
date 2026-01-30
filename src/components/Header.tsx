import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-stone-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Ventura Masonry LLC</h1>
            <p className="text-xs sm:text-sm text-stone-300">Licensed & Bonded</p>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-amber-400 ${
                    isActive(link.path) ? 'text-amber-400' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <a
              href="tel:509-792-9059"
              className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              <Phone size={18} />
              <span className="whitespace-nowrap">509-792-9059</span>
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-stone-700 mt-2 pt-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-amber-400 ${
                    isActive(link.path) ? 'text-amber-400' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:509-792-9059"
                className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors mt-4"
              >
                <Phone size={18} />
                <span>509-792-9059</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
