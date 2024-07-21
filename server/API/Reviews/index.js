// libraries
import express from "express";
import passport from "passport";

// database model
import { ReviewModel } from "../../database/allModels";

// Validation
import { ValidateNewReview, ValidateReviewId } from "../../validation/review";

const Router = express.Router();

/*
Route          /
Description    Get all reviews
Params         resid
Body           none
Access         public
Method         GET
*/

Router.get("/resid", async (req, res) => {
    try{
        const reviews = await ReviewModel.find({ restaurant: req.params.resid})

        return res.json({ reviews });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route          /new
Description    Add new food review/rating
Params         none
Body           review object
Access         public
Method         POST
*/

Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try{
        await ValidateNewReview(req.body);

        const { _id } = req.session.passport.user._doc;

        const { reviewData } = req.body;
        await ReviewModel.create({...reviewData, user: _id});

        return res.json({ review: "Successfully Created Review." });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route          /delete
Description    delete a review
Params         _id
Body           none
Access         public
Method         Delete
*/

Router.delete("/delete/:_id", async (req, res) => {
    try{
        await ValidateReviewId(req.params);
        
        const { _id } = req.params;

        await ReviewModel.findByIdAndDelete(_id);

        return res.json({ review: "Successfully Deleted the Review." });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;