const app = require('./src/app')
const port =3000
const connectDB = require('./src/DB/db')
app.listen(port,()=>{
    console.log("APP WORKING AT PORT",port)
})