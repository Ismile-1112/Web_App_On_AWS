import joi from "joi";

export const ValidateImageFile = (imgFile) => {
    const Schema = joi.object({
        file: joi.string().required()
    });

    return Schema.validateAsync(imgFile);
};