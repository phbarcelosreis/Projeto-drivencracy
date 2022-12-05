import { ObjectId } from "mongodb";
import { poll } from "../database/db.js";

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