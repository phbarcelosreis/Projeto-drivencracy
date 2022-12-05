import { choice } from "../database/db.js";

export async function choicePost(req, res) {

    const choicePost = req.body;
    

    try {

        await choice.insertOne(choicePost)
        res.sendStatus(201)

    } catch (err) {

        console.log(err);
        return res.sendStatus(500);

    }

}


export async function getIdPoll(req, res) {

    try {


    } catch (err) {

        console.log(err);
        return res.sendStatus(500);

    }

}