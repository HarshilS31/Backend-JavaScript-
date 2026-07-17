// We will start the server here
const app = require("./src/app") // we imported the server instance here from app
const port = 4000
// app.get("/notes",(req,res)=>{
//     res.send("Server is working at port 4000")
// })
app.listen(port,()=>{// Starting the server
    console.log("Server is working at port:",port)
})