

import { NextRequest, NextResponse } from 'next/server';
import { connectToDb } from '@/lib/mongodb';
import Project from '@/models/ProjectsModel';

// GET product by ID
export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
    try {
        await connectToDb();
        const product = await Project.findById(params.id);
        // console.log(product);
        if (!product) {
          return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }
      
        return NextResponse.json(product);
        
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch product");
    }
}

// PUT (update) product by ID
export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
    try {
        await connectToDb();
        const updatedData = await req.json();
      
        const product = await Project.findByIdAndUpdate(params.id, updatedData, { new: true });
      
        if (!product) {
          return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }
      
        return NextResponse.json(product);
        
    } catch (error) {
        console.log(error);
        throw new Error("Failed to update product");
    }
}

// DELETE product by ID
export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
    try {
        await connectToDb();
        const result = await Project.findByIdAndDelete(params.id);
      
        if (!result) {
          return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }
      
        return NextResponse.json({ message: 'Product deleted' });
        
    } catch (error) {
        console.log(error);
        throw new Error("Failed to delete product");
    }
}
