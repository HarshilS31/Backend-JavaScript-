//We will create the server here

const express = require("express")
const app = express()
app.use(express.json()) // middleware -> here it is making data readable for express which came from frontend
const notes = []
app.post("/notes",(req,res)=>{
    notes.push(req.body) // data comes into req.body
    res.status(201).json({
        message:"Note created"
    }) // 201 -> success(a new resource has been created)
}) // we created an API with name notes
app.get("/notes",(req,res)=>{
    res.status(200).json({
        message:"notes fetched successfully",
        notes:notes,

    })
})
//Deleting a note based on index : Eg: for deleting 4th node,use /notes/3
// index is a dynamic part here so use : before index -> /:index
app.delete("/notes/:index",(req,res)=>{
    const {index} = parseInt(req.params.index,10);
    notes.splice(index,1);
    res.status(200).json({
        message:"note deleted successfully"
    })
})
app.patch("/notes/:index", (req, res) => {
    const index = parseInt(req.params.index);
    const description = req.body.description;

    if (isNaN(index) || !notes[index]) {
        return res.status(404).json({ message: "Note not found" });
    }
    if (!description) {
        return res.status(400).json({ message: "Description is required" });
    }

    notes[index].description = description;
    res.status(200).json({ message: "Description updated successfully" });
});
module.exports=app
 // user31pass