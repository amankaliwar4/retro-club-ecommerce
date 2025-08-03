import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Order from '@/models/Order';
import Transaction from '@/models/Transaction';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    
    let query: any = {};
    if (userId) {
      query.user = userId;
    }
    
    const skip = (page - 1) * limit;
    
    const orders = await Order.find(query)
      .populate('user', 'name email')
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });
    
    const total = await Order.countDocuments(query);
    
    return NextResponse.json({
      orders,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    
    const body = await request.json();
    
    // Create order
    const order = new Order(body);
    await order.save();
    
    // Create transaction record
    const transactionId = `TXN${Date.now()}${Math.random().toString(36).substr(2, 9)}`;
    const transaction = new Transaction({
      order: order._id,
      transactionId,
      amount: order.totalAmount,
      paymentMethod: order.paymentMethod,
      status: order.paymentMethod === 'COD' ? 'Pending' : 'Completed',
    });
    await transaction.save();
    
    return NextResponse.json({ order, transaction }, { status: 201 });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}

