'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { Filter, Grid, List } from 'lucide-react';

interface Product {
  _id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  sizes: string[];
}

function ProductsContent() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: '',
    maxPrice: '',
    sortBy: 'newest',
  });
  
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get('category');

  useEffect(() => {
    if (categoryFromUrl) {
      setFilters(prev => ({ ...prev, category: categoryFromUrl }));
    }
  }, [categoryFromUrl]);

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams();
      if (filters.category !== 'all') queryParams.append('category', filters.category);
      if (filters.minPrice) queryParams.append('minPrice', filters.minPrice);
      if (filters.maxPrice) queryParams.append('maxPrice', filters.maxPrice);
      
      const response = await fetch(`/api/products?${queryParams}`);
      const data = await response.json();
      
      let sortedProducts = data.products || [];
      
      // Sort products
      switch (filters.sortBy) {
        case 'price-low':
          sortedProducts.sort((a: Product, b: Product) => a.price - b.price);
          break;
        case 'price-high':
          sortedProducts.sort((a: Product, b: Product) => b.price - a.price);
          break;
        case 'name':
          sortedProducts.sort((a: Product, b: Product) => a.name.localeCompare(b.name));
          break;
        default:
          // newest (default order from API)
          break;
      }
      
      setProducts(sortedProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
      // Set dummy products for demo
      setProducts([
        {
          _id: '1',
          name: 'Classic Cotton T-Shirt',
          price: 299,
          originalPrice: 599,
          image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
          category: 'Men',
          sizes: ['S', 'M', 'L', 'XL'],
        },
        {
          _id: '2',
          name: 'Elegant Summer Dress',
          price: 499,
          originalPrice: 999,
          image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400',
          category: 'Women',
          sizes: ['XS', 'S', 'M', 'L'],
        },
        {
          _id: '3',
          name: 'Kids Colorful Hoodie',
          price: 399,
          originalPrice: 799,
          image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400',
          category: 'Kids',
          sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y'],
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {filters.category === 'all' ? 'All Products' : `${filters.category}'s Fashion`}
          </h1>
          <p className="text-gray-600">
            Discover our amazing collection with 50% OFF on all items
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Filter className="w-5 h-5 mr-2" />
                <h3 className="font-semibold">Filters</h3>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={filters.category}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="all">All Categories</option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Kids">Kids</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.minPrice}
                    onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.maxPrice}
                    onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              {/* Sort By */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sort By
                </label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* View Controls */}
            <div className="flex justify-between items-center mb-6">
              <div className="text-gray-600">
                {loading ? 'Loading...' : `${products.length} products found`}
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md ${
                    viewMode === 'grid' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md ${
                    viewMode === 'list' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Products */}
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg shadow-md p-4 animate-pulse">
                    <div className="aspect-square bg-gray-200 rounded-md mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                ))}
              </div>
            ) : products.length > 0 ? (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
}

