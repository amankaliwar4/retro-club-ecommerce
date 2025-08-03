'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Heart } from 'lucide-react';
import { useState } from 'react';

interface Product {
  _id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  sizes: string[];
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    // Add to cart logic here
    console.log('Added to cart:', product._id);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <Link href={`/products/${product._id}`}>
        <div className="relative">
          {/* Product Image */}
          <div className="aspect-square overflow-hidden bg-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Discount Badge */}
          {discountPercentage > 0 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
              {discountPercentage}% OFF
            </div>
          )}
          
          {/* Wishlist Button */}
          <button
            onClick={handleWishlist}
            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
          >
            <Heart
              className={`w-4 h-4 ${
                isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'
              }`}
            />
          </button>
          
          {/* Quick Add to Cart - appears on hover */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={handleAddToCart}
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
        
        {/* Product Info */}
        <div className="p-4">
          <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            {product.category}
          </div>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
            {product.name}
          </h3>
          
          {/* Sizes */}
          <div className="flex flex-wrap gap-1 mb-3">
            {product.sizes.slice(0, 4).map((size) => (
              <span
                key={size}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
              >
                {size}
              </span>
            ))}
            {product.sizes.length > 4 && (
              <span className="text-xs text-gray-500">+{product.sizes.length - 4}</span>
            )}
          </div>
          
          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-purple-600">
              ₹{product.price}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}

