import { poll } from "../database/db.js"

export function zero(n){
    return n < 9 ? `0${n}` : `${n}`;
}


function formatDate(){
    const data = new Date();
    data.setDate(data.getDate() + 30);
    const dia = zero(data.getDate());
    const mes = zero(data.getMonth() + 1);
    const ano = zero(data.getFullYear());
    const hora = zero(data.getHours());
    const minutos = zero(data.getMinutes());

    return `${dia}-${mes}-${ano} ${hora}:${minutos}`
}

export async function pollPost(req, res) {

    const survey = req.body

    const {title, expireAt} = req.body;
    const data = formatDate();

    console.log(survey);

    try {

        if(expireAt === ""){

            const newObject = {
                title,
                expireAt: data
            }

            await poll.insertOne(newObject);
            return res.sendStatus(201)

        }

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

        res.send(polls);

    } catch (err) {

        console.log(err);
        return res.sendStatus(500);

    }
}


