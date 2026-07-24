import progModel from "../models/progress.models.js";
export const createProgress = async (req,res) => {
    try {
        const data = await progModel.create(req.body)
        return res.status(201).json({message:"Progress tracked successfully!",data})
    
    }catch(error) {
        return res.status(500).json({message:"Internal server error"})
    }   
}
export const getAllProgress = async (req,res) => {
    try{
        const data = await progModel.find();
        res.status(200).json({message:"Progress fetched successfully",data})

    }catch(error) {
        return res.status(500).json({message : error.message})
    }
}
export const deleteProgress = async (req, res) => {
    try {
        const id=req.params.id;
        const deletedDoc=await progModel.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Progress removed",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error.message,
        });
    }
}