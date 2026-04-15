import mongoose from "mongoose";
export default mongoose.model("Video", new mongoose.Schema({
userId:String,videoUrl:String,caption:String,likes:{type:Number,default:0}
},{timestamps:true}));
