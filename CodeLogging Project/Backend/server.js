import dotenv from "dotenv"
import app from "./src/app.js"
import dns from "dns"
import connectDB from "./src/config/db.js"
dotenv.config()
dns.setServers(['8.8.8.8'],['8.8.4.4'])
app.listen(5000,()=>{
    console.log("server is working on port 5000")
})
connectDB()