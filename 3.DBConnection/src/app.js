const express  = require('express')
const noteModel = require("../src/models/notes.models")
const app = express()
app.use(express.json()) //Middleware
app.post("/notes", async (req,res)=>{
    const data = req.body
    console.log(data.title)
    await noteModel.create({
        title:data.title,
        description : data.description
    })
    res.status(201).json({message:"Note Created successfully!"})
})
app.get("/notes",async (req,res)=>{
    // const notes = await noteModel.find({condition}) //find always returns a array,condition is optional,by default it retuns all the data
    // const notes =await noteModel.findOne({
    //     title:"Note 2"
    const notes = await noteModel.find()
    res.status(200).json({message:"Notes fetched succesfully!",
        notes : notes 
    })
})
app.delete("/notes/:id",async (req,res)=>{
    const id = req.params.id;
    await noteModel.findOneAndDelete({
        _id:id
    })
    res.status(201).json({
        message:`note with id ${id} deleted!`
    })
})
app.patch("/notes/:id",async (req,res)=>{
    const id = req.params.id
    await noteModel.findOneAndUpdate(
        {_id:id}, // which ietm to update
        {description:req.body.description} // updated details
    )
    res.status(200).json({message:"Updated Successfully!"})


})
module.exports = app