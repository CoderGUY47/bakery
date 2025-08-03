'use client';

import { Star, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { useCart } from './cart/CartContext';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  rating: number;
  reviews: number;
}

export default function ProductCard({ 
  id, 
  name, 
  description, 
  price, 
  image, 
  rating, 
  reviews 
}: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    setIsAdding(true);
    // Add item to cart
    addItem({ id, name, price, image });
    
    // Simulate API call delay
    setTimeout(() => {
      setIsAdding(false);
    }, 500);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-amber-900 truncate">{name}</h3>
          <span className="text-2xl font-bold text-amber-600">{price}</span>
        </div>
        
        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-sm text-gray-500">({reviews})</span>
          </div>
          
          <button 
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
              isAdding 
                ? 'bg-gray-400 text-white cursor-not-allowed' 
                : 'bg-amber-600 text-white hover:bg-amber-700 hover:scale-105'
            }`}
          >
            <ShoppingCart size={16} />
            <span>{isAdding ? 'Adding...' : 'Add to Cart'}</span>
          </button>
        </div>
      </div>
    </div>
  );
} 