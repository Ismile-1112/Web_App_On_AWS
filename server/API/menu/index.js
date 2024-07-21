// libraries
import express from "express";
import passport from "passport";

// database model
import { MenuModel, ImageModel } from "../../database/allModels";


// Validations
import { ValidateMenuListId, ValidateMenuImageId } from "../../validation/menu";

const Router = express.Router();

/*
Route          /list
Description    get all list menu based on id
Params         _id
Access         public
Method         GET
*/

Router.get("/list/:_id", async (req, res) => {
    try{
        await ValidateMenuListId(req.params);
        const { _id } = req.params;
        const menus = await MenuModel.findById(_id);

        return res.json({ menus });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route          /image
Description    get all menu images based on id
Params         _id
Access         public
Method         GET
*/

Router.get("/image/:_id", async (req, res) => {
    try{
        await ValidateMenuImageId(req.params);
        const { _id } = req.params;
        const menus = await ImageModel.find(_id);

        return res.json({ menus });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;