import { ObjectId } from "mongodb";
import { choice, poll } from "../database/db.js";

export async function resultValidate(req, res, next){

    const {id} = req.params;

    const polls = await poll.findOne({_id: ObjectId(id)});
    if(polls === null){
        return res.sendStatus(404);
    }

    next();
}