// libraries
import express from "express";
import passport from "passport";

// database model
import { UserModel } from "../../database/allModels";

// Validations
import { ValidateUserId, ValidateUserData } from "../../validation/user";

const Router = express.Router();

/*
Route          /
Description    Get User Data
Params         _id
Body           none
Access         public
Method         GET
*/

Router.get("/" ,passport.authenticate("jwt"), async (req, res) => {
    try{
        const { email, fullname, phoneNumber, address } = req.session.passport.user._doc;
        return res.json({ user: { email, fullname, phoneNumber, address } });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route          /:_id
Description    Get User Data
Params         _id
Body           none
Access         public
Method         GET
*/

Router.get("/:_id" , async (req, res) => {
    try{
        const user = await UserModel.findById(req.params._id);
        const { fullname } = user;
        
        return res.json({ user: { fullname } });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route          /update
Description    update user id
Params         _id
Body           user data
Access         public
Method         PUT
*/

Router.put("/update/:userID", async (req, res) => {
    try{
        await ValidateUserId(req.params);
        await ValidateUserData(req.body);
        const{ userID } = req.params;
        const{ userData } = req.body;

        const updateUserData = await UserModel.findByIdAndUpdate(userID, {
            $set: userData
        }, { new: true });

        return res.json({user: updateUserData});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;