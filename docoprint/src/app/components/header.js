'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-blue-600">Docoprint</div>

          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link href="/shop" className="text-gray-700 hover:text-blue-600">Shop</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden space-y-2 pb-4">
            <Link href="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/about" className="block text-gray-700 hover:text-blue-600">About</Link>
            <Link href="/services" className="block text-gray-700 hover:text-blue-600">Shop</Link>
            <Link href="/contact" className="block text-gray-700 hover:text-blue-600">Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
}
