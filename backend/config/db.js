//logic to connect with the database

import mongoose from "mongoose"

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://shryl13050:KPQmVS8pVd9Qhe8r@cluster0.ugwcrny.mongodb.net/tomato').then(()=> console.log("db connected"));
}
