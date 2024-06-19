import express from "express";
import { addFood, listFood, removeFood } from "../controllers/food_controller.js";
import multer from "multer";

//express router - using this method we can create all methods get post update etcc
const foodRouter = express.Router();

//image storage engine 
//multer disk storage method 
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,callback)=>{
return callback(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer ({storage:storage})

// add this middleware to this route
foodRouter.post('/add',upload.single("image"),addFood);

//list all the food items
foodRouter.get('/list',listFood);
foodRouter.post('/remove',removeFood)

//remove food item 






export default foodRouter;