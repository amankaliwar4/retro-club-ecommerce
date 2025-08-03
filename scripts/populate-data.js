const mongoose = require('mongoose');

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/retro-club';

// Product schema (simplified for script)
const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  originalPrice: Number,
  category: String,
  sizes: [String],
  image: String,
  inStock: Boolean,
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);

// Sample products data
const sampleProducts = [
  // Men's Fashion
  {
    name: "Classic Cotton T-Shirt",
    description: "Comfortable cotton t-shirt perfect for everyday wear. Made from 100% premium cotton.",
    price: 299,
    originalPrice: 599,
    category: "Men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    inStock: true
  },
  {
    name: "Denim Casual Shirt",
    description: "Stylish denim shirt for a casual yet sophisticated look.",
    price: 499,
    originalPrice: 999,
    category: "Men",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
    inStock: true
  },
  {
    name: "Formal White Shirt",
    description: "Crisp white formal shirt perfect for office and formal occasions.",
    price: 399,
    originalPrice: 799,
    category: "Men",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400",
    inStock: true
  },
  {
    name: "Casual Polo Shirt",
    description: "Comfortable polo shirt for casual outings and sports activities.",
    price: 349,
    originalPrice: 699,
    category: "Men",
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400",
    inStock: true
  },
  {
    name: "Slim Fit Jeans",
    description: "Modern slim fit jeans with premium denim fabric.",
    price: 799,
    originalPrice: 1599,
    category: "Men",
    sizes: ["28", "30", "32", "34", "36"],
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
    inStock: true
  },

  // Women's Fashion
  {
    name: "Elegant Summer Dress",
    description: "Beautiful floral summer dress perfect for casual and semi-formal occasions.",
    price: 599,
    originalPrice: 1199,
    category: "Women",
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400",
    inStock: true
  },
  {
    name: "Casual Blouse",
    description: "Comfortable and stylish blouse for everyday wear.",
    price: 399,
    originalPrice: 799,
    category: "Women",
    sizes: ["XS", "S", "M", "L"],
    image: "https://images.unsplash.com/photo-1564257577-2d5d7b1b1b1b?w=400",
    inStock: true
  },
  {
    name: "High-Waist Jeans",
    description: "Trendy high-waist jeans with a flattering fit.",
    price: 699,
    originalPrice: 1399,
    category: "Women",
    sizes: ["26", "28", "30", "32", "34"],
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400",
    inStock: true
  },
  {
    name: "Formal Blazer",
    description: "Professional blazer perfect for office and business meetings.",
    price: 899,
    originalPrice: 1799,
    category: "Women",
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400",
    inStock: true
  },
  {
    name: "Maxi Dress",
    description: "Elegant maxi dress for special occasions and evening wear.",
    price: 799,
    originalPrice: 1599,
    category: "Women",
    sizes: ["XS", "S", "M", "L"],
    image: "https://images.unsplash.com/photo-1566479179817-c0c8b4b8b1b1?w=400",
    inStock: true
  },

  // Kids' Fashion
  {
    name: "Kids Colorful Hoodie",
    description: "Warm and comfortable hoodie with fun colors for active kids.",
    price: 399,
    originalPrice: 799,
    category: "Kids",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400",
    inStock: true
  },
  {
    name: "Kids Denim Jacket",
    description: "Stylish denim jacket for kids, perfect for layering.",
    price: 499,
    originalPrice: 999,
    category: "Kids",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400",
    inStock: true
  },
  {
    name: "Kids Cotton T-Shirt",
    description: "Soft cotton t-shirt with fun prints for everyday wear.",
    price: 199,
    originalPrice: 399,
    category: "Kids",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400",
    inStock: true
  },
  {
    name: "Kids Casual Shorts",
    description: "Comfortable shorts for active play and summer activities.",
    price: 249,
    originalPrice: 499,
    category: "Kids",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400",
    inStock: true
  },
  {
    name: "Kids Party Dress",
    description: "Beautiful dress for special occasions and parties.",
    price: 599,
    originalPrice: 1199,
    category: "Kids",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400",
    inStock: true
  }
];

async function populateProducts() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Generate more products to reach 500
    const allProducts = [...sampleProducts];
    
    // Generate variations of existing products
    for (let i = 0; i < 485; i++) {
      const baseProduct = sampleProducts[i % sampleProducts.length];
      const variation = {
        ...baseProduct,
        name: `${baseProduct.name} - Variant ${Math.floor(i / sampleProducts.length) + 1}`,
        price: baseProduct.price + Math.floor(Math.random() * 200) - 100,
        originalPrice: baseProduct.originalPrice + Math.floor(Math.random() * 200) - 100,
      };
      // Ensure price is not negative and originalPrice is higher than price
      variation.price = Math.max(199, variation.price);
      variation.originalPrice = Math.max(variation.price + 100, variation.originalPrice);
      allProducts.push(variation);
    }

    // Insert all products
    await Product.insertMany(allProducts);
    console.log(`Successfully inserted ${allProducts.length} products`);

    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error populating products:', error);
    process.exit(1);
  }
}

// Run the script
populateProducts();

