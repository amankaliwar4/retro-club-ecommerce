import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  category: 'Men' | 'Women' | 'Kids';
  sizes: string[];
  image: string;
  inStock: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    min: 0,
  },
  originalPrice: {
    type: Number,
    required: [true, 'Original price is required'],
    min: 0,
  },
  category: {
    type: String,
    required: [true, 'Product category is required'],
    enum: ['Men', 'Women', 'Kids'],
  },
  sizes: [{
    type: String,
    required: true,
  }],
  image: {
    type: String,
    required: [true, 'Product image is required'],
  },
  inStock: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);

