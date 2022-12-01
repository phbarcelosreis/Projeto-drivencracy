import Joi from "joi";

export const pollSchema = Joi.object({
    title: Joi.string().min(1).required(),
    expireAt: Joi.required()
});

export const choiceSchema = Joi.object({
    title: Joi.string().min(1).required(),
    pollId: Joi.string().min(1).required()
});