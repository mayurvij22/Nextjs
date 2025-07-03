import {connectToDatabase} from "@/lib/db.ts"
import User from "@/models/User"
import { NextRequest,NextResponse } from "next/server"


export async function POST(request:NextRequest) {

    try {
        const {email,password} = await request.json()
            

          if(!email || !password){
            return NextResponse.json(
                {error:"Email and Password are required"},{
                    status:400
                }
            )
          }

          await connectToDatabase()

          const existingUser = await User.findOne({email})
          
          if(existingUser){
            return NextResponse.json(
            {error:"User already registerd"},
             {status:400}
            )
          }

           
         await User.create({
            email,
            password
         })
       
             return NextResponse.json(
            {message:"User  registerd Successfully "},
             {status:200}
            )
   
   
    } catch (error) {
        
         console.error("error At register",error)
         return NextResponse.json(
            {error:"Failed to register the user"},
             {status:400}
            )
    }
    
}