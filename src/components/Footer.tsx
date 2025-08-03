import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">Retro Club</h3>
            <p className="text-gray-300 mb-4">
              Fashion for All - Trendy wear at affordable prices for Men, Women, and Kids.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-purple-400 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-purple-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=Men" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Men's Fashion
                </Link>
              </li>
              <li>
                <Link href="/products?category=Women" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Women's Fashion
                </Link>
              </li>
              <li>
                <Link href="/products?category=Kids" className="text-gray-300 hover:text-purple-400 transition-colors">
                  Kids' Fashion
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  SHOP NO-245/12, PHATAK KAROR ROAD, NEAR NEAR AJMERI GATE<br />
                  DELHI, 110006
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">+91 9109933507</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Retroclub098@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Company Partnership */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center">
            <h5 className="text-lg font-semibold text-purple-400 mb-2">
              In Partnership with CROPSYKIND AGRO PRIVATE LIMITED
            </h5>
            <p className="text-gray-300 text-sm">
              Chhindwara, Madhya Pradesh - Dedicated to enhancing India's agricultural ecosystem
            </p>
            <p className="text-gray-400 text-sm mt-2">
              "Cultivating growth — naturally and sustainably."
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Retro Club. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}

