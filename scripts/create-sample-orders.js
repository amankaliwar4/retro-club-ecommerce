const mongoose = require('mongoose');

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/retro-club';

// Schemas
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
}, { timestamps: true });

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  originalPrice: Number,
  category: String,
  sizes: [String],
  image: String,
}, { timestamps: true });

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  customerName: String,
  customerEmail: String,
  customerPhone: String,
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    name: String,
    price: Number,
    quantity: Number,
    size: String,
    image: String,
  }],
  totalAmount: Number,
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
  },
  paymentMethod: { type: String, default: 'COD' },
  paymentStatus: { type: String, default: 'Pending' },
  orderStatus: { type: String, default: 'Pending' },
  orderDate: { type: Date, default: Date.now },
}, { timestamps: true });

const TransactionSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
  transactionId: String,
  amount: Number,
  paymentMethod: String,
  status: { type: String, default: 'Pending' },
  bankAccount: {
    accountHolder: { type: String, default: 'Retro Club' },
    bank: { type: String, default: 'SBI (State Bank of India)' },
    accountNumber: { type: String, default: '44286850138' },
    ifscCode: { type: String, default: 'SBIN0064303' },
    branchAddress: { type: String, default: 'Parasia Road, Chhindwara, Madhya Pradesh' },
  },
  transactionDate: { type: Date, default: Date.now },
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
const Product = mongoose.model('Product', ProductSchema);
const Order = mongoose.model('Order', OrderSchema);
const Transaction = mongoose.model('Transaction', TransactionSchema);

async function createSampleOrders() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Get sample users and products
    const users = await User.find({ role: 'user' }).limit(3);
    const products = await Product.find().limit(10);

    if (users.length === 0 || products.length === 0) {
      console.log('No users or products found. Please run the other scripts first.');
      await mongoose.disconnect();
      return;
    }

    // Sample orders data
    const sampleOrders = [
      {
        user: users[0]._id,
        customerName: users[0].name,
        customerEmail: users[0].email,
        customerPhone: '+91 9876543210',
        items: [
          {
            product: products[0]._id,
            name: products[0].name,
            price: products[0].price,
            quantity: 2,
            size: 'M',
            image: products[0].image,
          },
          {
            product: products[1]._id,
            name: products[1].name,
            price: products[1].price,
            quantity: 1,
            size: 'L',
            image: products[1].image,
          },
        ],
        totalAmount: (products[0].price * 2) + products[1].price,
        shippingAddress: {
          street: '123 Main Street',
          city: 'Mumbai',
          state: 'Maharashtra',
          zipCode: '400001',
          country: 'India',
        },
        paymentMethod: 'COD',
        paymentStatus: 'Pending',
        orderStatus: 'Delivered',
        orderDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
      },
      {
        user: users[1]._id,
        customerName: users[1].name,
        customerEmail: users[1].email,
        customerPhone: '+91 9876543211',
        items: [
          {
            product: products[2]._id,
            name: products[2].name,
            price: products[2].price,
            quantity: 1,
            size: 'S',
            image: products[2].image,
          },
        ],
        totalAmount: products[2].price,
        shippingAddress: {
          street: '456 Park Avenue',
          city: 'Delhi',
          state: 'Delhi',
          zipCode: '110001',
          country: 'India',
        },
        paymentMethod: 'Online',
        paymentStatus: 'Paid',
        orderStatus: 'Shipped',
        orderDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
      },
      {
        user: users[2]._id,
        customerName: users[2].name,
        customerEmail: users[2].email,
        customerPhone: '+91 9876543212',
        items: [
          {
            product: products[3]._id,
            name: products[3].name,
            price: products[3].price,
            quantity: 3,
            size: 'XL',
            image: products[3].image,
          },
          {
            product: products[4]._id,
            name: products[4].name,
            price: products[4].price,
            quantity: 1,
            size: 'M',
            image: products[4].image,
          },
        ],
        totalAmount: (products[3].price * 3) + products[4].price,
        shippingAddress: {
          street: '789 Garden Road',
          city: 'Bangalore',
          state: 'Karnataka',
          zipCode: '560001',
          country: 'India',
        },
        paymentMethod: 'COD',
        paymentStatus: 'Pending',
        orderStatus: 'Processing',
        orderDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
      },
      {
        user: users[0]._id,
        customerName: users[0].name,
        customerEmail: users[0].email,
        customerPhone: '+91 9876543210',
        items: [
          {
            product: products[5]._id,
            name: products[5].name,
            price: products[5].price,
            quantity: 1,
            size: 'L',
            image: products[5].image,
          },
        ],
        totalAmount: products[5].price,
        shippingAddress: {
          street: '123 Main Street',
          city: 'Mumbai',
          state: 'Maharashtra',
          zipCode: '400001',
          country: 'India',
        },
        paymentMethod: 'Online',
        paymentStatus: 'Paid',
        orderStatus: 'Pending',
        orderDate: new Date(), // Today
      },
    ];

    // Create orders and transactions
    for (const orderData of sampleOrders) {
      const order = new Order(orderData);
      await order.save();
      console.log(`Order created for ${orderData.customerName}`);

      // Create corresponding transaction
      const transactionId = `TXN${Date.now()}${Math.random().toString(36).substr(2, 9)}`;
      const transaction = new Transaction({
        order: order._id,
        transactionId,
        amount: order.totalAmount,
        paymentMethod: order.paymentMethod,
        status: order.paymentMethod === 'COD' ? 'Pending' : 'Completed',
        transactionDate: order.orderDate,
      });
      await transaction.save();
      console.log(`Transaction created: ${transactionId}`);
    }

    console.log('Sample orders and transactions created successfully');
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error creating sample orders:', error);
    process.exit(1);
  }
}

// Run the script
createSampleOrders();

