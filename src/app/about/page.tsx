import { Users, Target, Award, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Retro Club</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            We're passionate about bringing you the latest fashion trends at affordable prices, 
            making style accessible to everyone in the family.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Retro Club was founded with a simple mission: to make fashion accessible and affordable 
                for everyone. We believe that great style shouldn't come with a hefty price tag, and 
                that's why we offer trendy clothing for Men, Women, and Kids at prices that won't break the bank.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey began with the vision of creating a one-stop destination for families to 
                find quality clothing that reflects their personality and style. Today, we're proud to 
                offer over 500 products across various categories, all with our signature 50% discount.
              </p>
              <p className="text-gray-600">
                Based in Bhopal, Madhya Pradesh, we serve customers across India with our commitment 
                to quality, affordability, and exceptional customer service.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                  <div className="text-gray-600">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50%</div>
                  <div className="text-gray-600">Discount</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
                  <div className="text-gray-600">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and help us deliver the best experience to our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Customer First</h3>
              <p className="text-gray-600 text-sm">
                Our customers are at the heart of everything we do. We strive to exceed expectations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600 text-sm">
                We never compromise on quality. Every product is carefully selected and tested.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Affordability</h3>
              <p className="text-gray-600 text-sm">
                Fashion should be accessible to all. We offer great styles at unbeatable prices.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Inclusivity</h3>
              <p className="text-gray-600 text-sm">
                We celebrate diversity and create fashion for people of all ages and styles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partnership</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're proud to partner with CROPSYKIND AGRO PRIVATE LIMITED, showcasing our commitment 
                to supporting diverse industries and sustainable growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-purple-600 mb-4">
                  CROPSYKIND AGRO PRIVATE LIMITED
                </h3>
                <p className="text-gray-600 mb-4">
                  Based in Chhindwara, Madhya Pradesh, our partner company is dedicated to enhancing 
                  India's agricultural ecosystem by providing sustainable agro solutions.
                </p>
                <p className="text-gray-600 mb-4">
                  This collaboration represents our shared vision of growth and innovation across 
                  different sectors - from fashion to agriculture.
                </p>
                <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded">
                  <p className="text-purple-800 font-medium italic">
                    "Cultivating growth — naturally and sustainably."
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-100 to-purple-100 rounded-xl p-8">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Shared Values</h4>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3">
                      <span className="font-medium text-gray-900">Sustainability</span>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <span className="font-medium text-gray-900">Innovation</span>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <span className="font-medium text-gray-900">Community Growth</span>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <span className="font-medium text-gray-900">Quality Excellence</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Have questions about our products or want to learn more about our story? 
            We'd love to hear from you!
          </p>
          <a
            href="/contact"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

