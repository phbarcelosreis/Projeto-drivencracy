import { ObjectId } from "mongodb";
import { choice, poll, votes } from "../database/db.js";

export async function resultCheck(req, res) {

    const { id } = req.params;


    const polls = await poll.findOne({ _id: ObjectId(id) });
    const choices = await choice.find({ pollId: id }).toArray();
    let teste = 0;
    let newId;
    choices.forEach(async (props) => {
        try {
            const id = (props._id).toString()
            const voto = await votes.find({ pollId: id }).toArray();
            if (teste < voto.length) {
                teste = voto.length
                newId = voto[0].pollId
                console.log(voto)
                console.log(newId)
                const titulo = await choice.findOne({ _id: ObjectId(newId) })
                console.log(titulo)
                const formatVote = {
                    ...polls,
                    result: {
                        title: titulo.title,
                        votes: teste
                    }

                }
                res.status(200).send(formatVote)
            }
        } catch (err) {

            res.sendStatus(500)
            console.log(err);

        }
    });


}