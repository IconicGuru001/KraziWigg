import cloudinary from "@/lib/cloudinary";
import Video from "@/models/Video";
import {connectDB} from "@/lib/db";
import {NextResponse} from "next/server";

export async function POST(req){
await connectDB();
const data=await req.formData();
const file=data.get("file");
const buffer=Buffer.from(await file.arrayBuffer());

const upload=await new Promise((res,rej)=>{
cloudinary.uploader.upload_stream({resource_type:"video"},(e,r)=>{
if(e)rej(e); else res(r);
}).end(buffer);
});

const video=await Video.create({url:upload.secure_url});
return NextResponse.json(video);
}