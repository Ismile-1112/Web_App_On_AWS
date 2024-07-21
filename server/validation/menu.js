import joi from "joi";

export const ValidateMenuListId = (menuId) => {
    const Schema = joi.object({
        _id: joi.string().required()
    });

    return Schema.validateAsync(menuId);
};

export const ValidateMenuImageId = (menuId) => {
    const Schema = joi.object({
        _id: joi.string().required()
    });

    return Schema.validateAsync(menuId);
};