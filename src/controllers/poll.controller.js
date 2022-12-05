import { poll } from "../database/db.js"

export async function pollPost(req, res) {

    const survey = req.body;

    console.log(survey);

    try {

        await poll.insertOne(survey);
        res.sendStatus(201)

    } catch (err) {

        console.log(err);
        return res.sendStatus(500);

    }

}

export async function pollGet(req, res) {

    try {

        const polls = await poll.find({}).toArray()
        console.log(polls);

        res.send(polls)

    } catch (err) {

        console.log(err);
        return res.sendStatus(500);

    }
}


