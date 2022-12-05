import { ObjectId } from "mongodb";
import { choice, poll } from "../database/db.js";
import { formatDate } from "./choiceValidate.middleware.js";

export async function voteValidate(req, res, next) {

    const { id } = req.params;
    console.log(id)

    const checkPoll = await poll.findOne({ _id: ObjectId(id) });
    console.log(checkPoll)
    if (checkPoll === null) {
        return res.sendStatus(404)
    }


    next();

}

export async function voteCheck(req, res, next) {

    const {id} = req.params;
    
    const check = await choice.findOne({_id: ObjectId(id)});
    if(check === null){
        return res.sendStatus(404);
    }

    const checkPoll = await poll.findOne({_id: ObjectId(check.pollId)});

    const date = formatDate();
    const newDate = Date.parse(date);
    const newDate2 = Date.parse(checkPoll.expireAt)
    if(newDate > newDate2){
        return res.sendStatus(403);
    }

    next()
}