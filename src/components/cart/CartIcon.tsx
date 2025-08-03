'use client';

import { ShoppingCart } from 'lucide-react';
import { useCart } from './CartContext';

interface CartIconProps {
  onClick: () => void;
  className?: string;
}

export default function CartIcon({ onClick, className = '' }: CartIconProps) {
  const { state } = useCart();

  return (
    <button
      onClick={onClick}
      className={`relative flex items-center space-x-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors ${className}`}
    >
      <ShoppingCart size={18} />
      <span>Cart</span>
      {state.totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
          {state.totalItems > 99 ? '99+' : state.totalItems}
        </span>
      )}
    </button>
  );
} 