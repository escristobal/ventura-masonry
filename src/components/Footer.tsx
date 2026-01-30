import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Ventura Masonry LLC</h3>
            <p className="text-sm mb-2">Licensed & Bonded</p>
            <p className="text-sm">
              Professional masonry and hardscape services for residential and commercial projects.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-amber-400 transition-colors">About</Link></li>
              <li><Link to="/services" className="text-sm hover:text-amber-400 transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="text-sm hover:text-amber-400 transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:509-792-9059"
                className="flex items-center gap-2 text-sm hover:text-amber-400 transition-colors"
              >
                <Phone size={18} />
                <span>509-792-9059</span>
              </a>
              <a
                href="mailto:venturamasonryllc@gmail.com"
                className="flex items-center gap-2 text-sm hover:text-amber-400 transition-colors"
              >
                <Mail size={18} />
                <span>venturamasonryllc@gmail.com</span>
              </a>
            </div>
            <div className="mt-6">
              <a
                href="tel:509-792-9059"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors text-sm"
              >
                Get Free Estimate
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-8 pt-8 text-center">
          <p className="text-sm">&copy; {currentYear} Ventura Masonry LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
