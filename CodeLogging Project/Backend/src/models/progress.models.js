import mongoose from "mongoose"
const progSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    date:{type:Date,required:true},
    category:{type:String,required:true,message:"Invalid Category"},
})
const progModel = mongoose.model("Progress",progSchema)
export default progModel