import {connectDB} from "@/lib/db";
import Video from "@/models/Video";
import {NextResponse} from "next/server";
export async function GET(){
await connectDB();
return NextResponse.json(await Video.find().sort({createdAt:-1}));
}