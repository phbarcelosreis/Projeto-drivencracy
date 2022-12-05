import { choice, votes } from "../database/db.js";
import { formatDate } from "../middlewares/choiceValidate.middleware.js";

export async function vote(req, res){

    const { id } = req.params;

    try {

        const choices = await choice.find({ pollId: id }).toArray();
        res.send(choices)

    } catch (err) {
    
        console.log(err);
        return res.sendStatus(500);
    
    }

}

export async function registerVote(req, res){

    const {id} = req.params
    const date = formatDate();

    const newVote = {
        pollId: id,
        date
    }

    try {

        await votes.insertOne(newVote);
        res.sendStatus(201);

    } catch (err) {
    
        console.log(err);
        return res.sendStatus(500);
    
    }

}