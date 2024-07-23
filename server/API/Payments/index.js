// libraries
import express from "express";
//import passport from "passport";
import Razorpay from "razorpay";
import { v4 as uuid } from "uuid";

// database model
//import { MenuModel, ImageModel } from "../../database/allModels";

const Router = express.Router();

/*
Route          /list
Description    get all list menu based on id
Params         _id
Access         public
Method         GET
*/
Router.post("/new", async(req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.RZR_PAY_ID,
            key_secret: process.env.RZR_PAY_SECRET
        });

        var options = {  
            amount: req.body.amount * 100,  // amount in the smallest currency unit  
            currency: "INR",  
            receipt: `${uuid()}`
        };
        const order = await instance.orders.create(options);
        return res.json({ order });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;