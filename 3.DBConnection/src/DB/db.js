// db.js
const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://User31:user31pass@cluster0.sdbk7ro.mongodb.net/db1')// db1 -> Database name
        console.log("Connected to database!")
    } catch (error) {
        console.log("MongoDB connection error:", error)
        throw error // let server.js know it failed
    }
}

module.exports = connectDB