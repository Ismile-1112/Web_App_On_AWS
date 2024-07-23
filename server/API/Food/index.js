// libraries
import express from "express";
import passport from "passport";

// database model
import { FoodModel } from "../../database/allModels";

// Validation
import { ValidateRestaurantId, Validatecategory } from "../../validation/food";

const Router = express.Router();

/*
Route          /r
Description    get all food based on a perticular restaurant
Params         id
Access         public
Method         GET
*/

Router.get("/r/:_id", async(req, res) => {
    try{
        await ValidateRestaurantId(req.params);

        const{ _id } = req.params;
        const foods = await FoodModel.find({ restaurant: _id });

        return res.json({ foods });
    }catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route          /:_id
Description    get food based on id
Params         _id
Access         public
Method         GET
*/

Router.get("/:_id", async(req, res) => {
    try{
        const{ _id } = req.params;
        const foods = await FoodModel.findById(_id);

        return res.json({ foods });
    }catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route          /c
Description    get all food based on a perticular restaurant
Params         category
Access         public
Method         GET
*/

Router.get("/r/:category", async(req, res) => {
    try{
        await Validatecategory(req.params);

        const{ category } = req.params;
        const foods = await FoodModel.find({ 
            category: { $regex: category, $options: "i" }
        });

        return res.json({ foods });
    }catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route          POST /foods/new
Description    add new food record to database
Access         PRIVATE
*/
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try {
      const { foodData } = req.body;
      const newFood = await FoodModel.create(foodData);
      return res.json({ foods: newFood });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

export default Router;