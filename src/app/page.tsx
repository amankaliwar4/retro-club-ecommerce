import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, Truck, Shield, Headphones } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Fashion for
                <span className="block text-yellow-300">Everyone</span>
              </h1>
              <p className="text-xl mb-8 text-purple-100">
                Discover trendy clothing for Men, Women, and Kids at unbeatable prices. 
                Get 50% OFF on all items!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm">Products</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">50%</div>
                    <div className="text-sm">OFF</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">₹199</div>
                    <div className="text-sm">Starting</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold">3</div>
                    <div className="text-sm">Categories</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of fashion collections designed for every member of your family
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Men's Category */}
            <Link href="/products?category=Men" className="group">
              <div className="relative overflow-hidden rounded-2xl bg-blue-100 h-80">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent z-10"></div>
                <div className="absolute bottom-6 left-6 z-20 text-white">
                  <h3 className="text-2xl font-bold mb-2">Men's Fashion</h3>
                  <p className="text-blue-100 mb-4">Stylish & Comfortable</p>
                  <div className="inline-flex items-center text-white group-hover:text-yellow-300 transition-colors">
                    Shop Now <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  50% OFF
                </div>
              </div>
            </Link>

            {/* Women's Category */}
            <Link href="/products?category=Women" className="group">
              <div className="relative overflow-hidden rounded-2xl bg-pink-100 h-80">
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 to-transparent z-10"></div>
                <div className="absolute bottom-6 left-6 z-20 text-white">
                  <h3 className="text-2xl font-bold mb-2">Women's Fashion</h3>
                  <p className="text-pink-100 mb-4">Elegant & Trendy</p>
                  <div className="inline-flex items-center text-white group-hover:text-yellow-300 transition-colors">
                    Shop Now <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  50% OFF
                </div>
              </div>
            </Link>

            {/* Kids' Category */}
            <Link href="/products?category=Kids" className="group">
              <div className="relative overflow-hidden rounded-2xl bg-green-100 h-80">
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent z-10"></div>
                <div className="absolute bottom-6 left-6 z-20 text-white">
                  <h3 className="text-2xl font-bold mb-2">Kids' Fashion</h3>
                  <p className="text-green-100 mb-4">Fun & Playful</p>
                  <div className="inline-flex items-center text-white group-hover:text-yellow-300 transition-colors">
                    Shop Now <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  50% OFF
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-gray-600 text-sm">Free delivery on orders over ₹999</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Secure Payment</h3>
              <p className="text-gray-600 text-sm">100% secure payment processing</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Round the clock customer support</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quality Products</h3>
              <p className="text-gray-600 text-sm">Premium quality guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Upgrade Your Wardrobe?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Retro Club for their fashion needs. 
            Start shopping today and enjoy amazing discounts!
          </p>
          <Link
            href="/products"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center"
          >
            Start Shopping
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

