import express from "express";
import { addToCart,removeFromCart,getCart } from "../controllers/cart_controller.js";
import authMidleware from "../middleware/auth.js";

const cartRouter= express.Router();

//ab we will make multipe endpoints

cartRouter.post('/add',authMidleware,addToCart)
cartRouter.post('/remove',authMidleware,removeFromCart)
cartRouter.post('/get',authMidleware,getCart)

export default cartRouter