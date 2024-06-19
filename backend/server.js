import express from "express";
import cors from 'cors'
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/UserRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
//yaha pr js add karna hai 


//app config
const app=express();
const port = 4003;

//middleware
app.use(express.json());
app.use(cors());
//using this we can access the frontend from any frontend

//db connection
connectDB();

//api endpoint 
app.use("/api/food",foodRouter); //new food items will added in database
app.use("/api/user",userRouter); 
app.use("/api/cart",cartRouter);



app.use('/images',express.static('uploads'))
//we have mounted this folder at this end point ,all the files uploaded can be accessed using this endpoint 


//to get the data (path) /endpoint
app.get('/',(req,res)=>{
   res.send("API working")
});

app.listen(port,()=>{
    console.log(`Server started on  http://localhost:${port}`)
})

