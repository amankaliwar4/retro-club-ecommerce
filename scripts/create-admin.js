const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/retro-club';

// User schema (simplified for script)
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
  },
  phone: String,
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

async function createAdminUser() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Check if admin user already exists
    const existingAdmin = await User.findOne({ email: 'admin@retroclub.com' });
    if (existingAdmin) {
      console.log('Admin user already exists');
      await mongoose.disconnect();
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash('admin123', 12);

    // Create admin user
    const adminUser = new User({
      name: 'Admin User',
      email: 'admin@retroclub.com',
      password: hashedPassword,
      role: 'admin',
      phone: '+91 9109933507',
      address: {
        street: '29A, GURU NANAKPURA, NEAR CAPITAL PETROL PUMP',
        city: 'BHOPAL',
        state: 'Madhya Pradesh',
        zipCode: '462023',
        country: 'India',
      },
    });

    await adminUser.save();
    console.log('Admin user created successfully');
    console.log('Email: admin@retroclub.com');
    console.log('Password: admin123');

    // Also create a few sample regular users
    const sampleUsers = [
      {
        name: 'John Doe',
        email: 'john@example.com',
        password: await bcrypt.hash('password123', 12),
        role: 'user',
        phone: '+91 9876543210',
      },
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        password: await bcrypt.hash('password123', 12),
        role: 'user',
        phone: '+91 9876543211',
      },
      {
        name: 'Mike Johnson',
        email: 'mike@example.com',
        password: await bcrypt.hash('password123', 12),
        role: 'user',
        phone: '+91 9876543212',
      },
    ];

    for (const userData of sampleUsers) {
      const existingUser = await User.findOne({ email: userData.email });
      if (!existingUser) {
        const user = new User(userData);
        await user.save();
        console.log(`Sample user created: ${userData.email}`);
      }
    }

    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error creating admin user:', error);
    process.exit(1);
  }
}

// Run the script
createAdminUser();

