import mongoose, { Document, Schema } from 'mongoose';

export interface ITransaction extends Document {
  order: mongoose.Types.ObjectId;
  transactionId: string;
  amount: number;
  paymentMethod: 'COD' | 'Online';
  status: 'Pending' | 'Completed' | 'Failed';
  bankAccount: {
    accountHolder: string;
    bank: string;
    accountNumber: string;
    ifscCode: string;
    branchAddress: string;
  };
  transactionDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

const TransactionSchema: Schema = new Schema({
  order: {
    type: Schema.Types.ObjectId,
    ref: 'Order',
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
  paymentMethod: {
    type: String,
    enum: ['COD', 'Online'],
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Completed', 'Failed'],
    default: 'Pending',
  },
  bankAccount: {
    accountHolder: {
      type: String,
      default: 'Retro Club',
    },
    bank: {
      type: String,
      default: 'SBI (State Bank of India)',
    },
    accountNumber: {
      type: String,
      default: '44286850138',
    },
    ifscCode: {
      type: String,
      default: 'SBIN0064303',
    },
    branchAddress: {
      type: String,
      default: 'Parasia Road, Chhindwara, Madhya Pradesh',
    },
  },
  transactionDate: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Transaction || mongoose.model<ITransaction>('Transaction', TransactionSchema);

