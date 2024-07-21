import joi from "joi";

export const ValidateNewReview = (newReviewId) => {
    const Schema = joi.object({
        _id: joi.string().required()
    });

    return Schema.validateAsync(newReviewId);
};

export const ValidateReviewId = (ReviewId) => {
    const Schema = joi.object({
        _id: joi.string().required()
    });

    return Schema.validateAsync(ReviewId);
};