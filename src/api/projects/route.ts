import { NextRequest, NextResponse } from 'next/server';
import { connectToDb } from '@/lib/mongodb';
// import { revalidatePath } from 'next/cache';
import Project from '@/models/ProjectsModel';


export const GET = async () => {
    try {
        await connectToDb();
        const products = await Project.find();
        // console.log(products);
        return NextResponse.json(products);
        
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch product");
    }
}


export const POST = async (req: NextRequest) => {
    try {
        await connectToDb();
        const data = await req.json();
      
        const product = new Project({
          ...data,
          // digestproduct: data.digestproduct || false,
          // dailyDigest: data.dailyDigest || 'Daily',
          // productStatus: data.productStatus === 'active' ? 'active' : 'inactive',
        });
      
        try {
          await product.save();
          return NextResponse.json(product);
        } catch (error) {
            console.error("Error saving product:", error);
          return NextResponse.json({ error }, { status: 400 });
        }
        
    } catch (error) {
        console.log(error);
        throw new Error("Failed to post product");
    }
}