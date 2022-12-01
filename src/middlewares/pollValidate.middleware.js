import pollSchema from '../models/pollJoi.model.js'
import choiceSchema from '../models/pollJoi.model.js'

export async function pollPostValidate(req, res, next){

    const {title} = req.body;

    const { error } = pollSchema.validate(title, { abortEarly: false });
    if(error){
        const errors = error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }




}

export async function choiceValidate(req, res, next){

    const choice = req.body;
    const { pollId, title } = req.body;


    const { error } = choiceSchema.validate(choice, { abortEarly: false });
    if(error){
        const errors = error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }
    
}