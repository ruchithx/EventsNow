
import { NextApiRequest, NextApiResponse } from 'next';
import connectMongoDB from "@/lib/mongo/mongodb";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest, response: NextResponse) {
   
    try{
    const id = await request.json();
    console.log(id.id);

    await connectMongoDB();

    const updatedUser = await User.findByIdAndUpdate(id.id, {$set: {role: "admin"}});
    console.log(updatedUser);

    if(!updatedUser){
        return NextResponse.json({message: "Failed to make user an admin"},{status: 500});
    }
    
    return NextResponse.json({message: "User is now an admin"},{status: 200});

    }catch(error){
    return NextResponse.json({message: "Error of server"});
    }
}




