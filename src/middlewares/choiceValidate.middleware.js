import { ObjectId } from "mongodb";
import { poll, choice } from "../database/db.js";
import { choiceSchema } from "../models/model.js";

export async function choiceValidate(req, res, next){

    const choicePost = req.body;
    const { pollId, title } = req.body;


    const { error } = choiceSchema.validate(choicePost, { abortEarly: false });
    if(error){
        const errors = error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }

    const titlePoll = await choice.findOne({title: title});
    if(titlePoll){
        return res.sendStatus(409);
    }

    const checkPoll = await poll.findOne({_id: ObjectId(pollId)});

    if(checkPoll === null){
        return res.sendStatus(404);
    }

    
    next();
    
}