const dns = require('dns')
dns.setServers(['8.8.8.8', '8.8.4.4']); // Manual Server Setting
const app = require('./src/app')
const connectDB = require("./src/DB/db")
const port = 3000
connectDB()
app.listen(port,()=>{
    console.log(`Server is running at port :${port}`)
})