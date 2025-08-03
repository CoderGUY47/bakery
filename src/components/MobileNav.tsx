'use client';

import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import CartIcon from './cart/CartIcon';
import CartSidebar from './cart/CartSidebar';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <div className="flex items-center space-x-2">
        {/* Cart button */}
        <CartIcon onClick={() => setIsCartOpen(true)} />
        
        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="flex items-center space-x-2 bg-amber-600 text-white px-3 py-2 rounded-lg hover:bg-amber-700 transition-colors"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
          <span>Menu</span>
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-amber-800">Sweet Dreams</h2>
              <button
                onClick={toggleMenu}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="p-6">
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#home"
                    onClick={toggleMenu}
                    className="block text-lg text-gray-700 hover:text-amber-600 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#products"
                    onClick={toggleMenu}
                    className="block text-lg text-gray-700 hover:text-amber-600 transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    onClick={toggleMenu}
                    className="block text-lg text-gray-700 hover:text-amber-600 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    onClick={toggleMenu}
                    className="block text-lg text-gray-700 hover:text-amber-600 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button className="w-full flex items-center justify-center space-x-2 bg-amber-600 text-white px-4 py-3 rounded-lg hover:bg-amber-700 transition-colors">
                  <ShoppingCart size={18} />
                  <span>Order Now</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
      
      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
} 