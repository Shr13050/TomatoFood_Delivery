//logic to connect with the database

import mongoose from "mongoose"

export const connectDB = async ()=>{
    await mongoose.connect(Mongouri).then(()=> console.log("db connected"));
}
