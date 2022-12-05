import { choice } from "../database/db.js";

export async function vote(req, res){

    const { id } = req.params;

    const choices = await choice.find({ pollId: id }).toArray();
    res.send(choices)


}