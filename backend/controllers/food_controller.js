import foodModel from "../models/foodmodel.js";
import fs from 'fs';

//add food item 

const addFood = async (req,res)=>{
let image_filename = `${req.file.filename}`;
const food = new foodModel({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    category:req.body.category,
    image:image_filename


})
try {
    await food.save();
    res.json({success:true,message:"Food Added"})
} catch (error) {
    console.log(error);
    res,json({success:false,message:"Error"})
    
}

}

// all food list
const listFood = async (req,res)=>{
 //logic banaoo
 try {
    const foods = await foodModel.find({});
    res.json({success:true,data:foods})
 } catch (error) {
    console.log(error)
    res.json({success:false,message:error});
    
 }
}
//remove food 
const removeFood = async (req,res)=>{
//logiv daloo guyss
try {//find the food model using id 
    const food = await foodModel.findById(req.body.id);
    //delete from uploads the image 
    fs.unlink(`uploads/${food.image}`,()=>{})
// delete the entry from the database
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({success:true,message:"food removed"})
} catch (error) {
    
    console.log(error);
    res.json({success:false,message:"error"})
}
}

export {addFood,listFood,removeFood}