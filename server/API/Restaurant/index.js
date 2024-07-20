// libraries
import express from "express";
import passport from "passport";

// database model
import { RestaurantModel } from "../../database/allModels";

const Router = express.Router();

/*
Route          /
Description    get all the restaurant details based on city
Params         none
Access         public
Method         GET
*/

Router.get ("/", async (req, res) => {
    try {
        // await ValidateRestaurantCity(req.query);
        const { city } = req.query;
        const restaurants = await RestaurantModel.find({ city });

        return res.json({ restaurants });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route          /
Description    get individual restaurant details based on id
Params         id
Access         public
Method         GET
*/

Router.get("/:_id", async (req, res) => {
    try{
        // await ValidateRestaurantId(req.params);
        const { _id } = req.params;
        const restaurant = await RestaurantModel.findById(_id);
        if(!restaurant)
          return res.status(404).json({ error: "Restaurant Not Found" });
        return res.json({ restaurant });
    } catch(error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route          /search
Description    get restaurant details based on search string
Params         none
Body           search string
Access         public
Method         GET
*/

Router.get("/search", async (req, res) => {
    try{
        // await ValidateRestaurantSearchString(req.body);
        const { searchString } = req.body;

        const restaurants = await RestaurantModel.find({ 
          name: { $regex: searchString, $options: "i" }
        });

        if(!restaurants)
          return res.status(404).json({ error: `No Restaurant matched with ${searchString}` });
        return res.json({ restaurant });
    } catch(error) {
        return res.status(500).json({ error: error.message });
    } 
});

export default Router;