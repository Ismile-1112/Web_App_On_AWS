// libraries
import express from "express";
import passport from "passport";
import multer from "multer";

// database model
import { ImageModel } from "../../database/allModels";

// Validations
// import { ValidateImageFile } from "../../validation/image";

// utilities
import { s3Upload } from "../../Utils/AWS/s3";

const Router = express.Router();

// Multer config
const storage = multer.memoryStorage();
const upload = multer({ storage });

/*
Route          /
Description    Get Image Details
Params         _id
Access         public
Method         Get
*/
Router.get("/:_id", async (req, res) => {
    try{
        const image = await ImageModel.findById(req.params._id);

        return res.json({ image });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


/*
Route          /
Description    Uploads given image to S3 bucket, and saves file link to mongodb
Params         none
Access         public
Method         POST
*/

Router.post("/", upload.single("file"), async (req, res) => {
   try{
       /* 
       await ValidateImageFile(req.file); 
       */

       const file = req.file;

       // s3 bucket options
       const bucketOptions = {
           Bucket: "webdevproject1112",
           Key: file.originalname,
           Body: file.buffer,
           ContentType: file.mimetype
       };

       const uploadImage = await s3Upload(bucketOptions);

       // await ImageModel.create({images : [ { location: uploadImage.Location } ]});

       return res.status(200).json({ uploadImage });
   }catch(error){
       return res.status(500).json({ error: error.message });
   }
});

export default Router;