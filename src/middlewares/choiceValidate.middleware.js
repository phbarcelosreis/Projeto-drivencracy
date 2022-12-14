import { ObjectId } from "mongodb";
import { poll, choice } from "../database/db.js";
import { choiceSchema } from "../models/model.js";
import { zero } from "../controllers/poll.controller.js";

export function formatDate(){
    const data = new Date();
    data.setDate(data.getDate());
    const dia = zero(data.getDate());
    const mes = zero(data.getMonth() + 1);
    const ano = zero(data.getFullYear());
    const hora = zero(data.getHours());
    const minutos = zero(data.getMinutes());

    return `${dia}-${mes}-${ano} ${hora}:${minutos}`
}

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

    const date = formatDate();
    const newDate = Date.parse(date);
    const newDate2 = Date.parse(checkPoll.expireAt)
    if(newDate > newDate2){
        return res.sendStatus(403);
    }
    
    next();
    
}