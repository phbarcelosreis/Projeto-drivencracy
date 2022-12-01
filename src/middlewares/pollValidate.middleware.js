import {pollSchema} from '../models/pollModel.js'
/* import {choiceSchema} from '../models/pollModel.js' */

export async function pollPostValidate(req, res, next){

    const poll = req.body;

    const { error } = pollSchema.validate(poll, { abortEarly: false });
    if(error){
        const errors = error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }


    next();

}

/* export async function choiceValidate(req, res, next){

    const choice = req.body;
    const { pollId, title } = req.body;


    const { error } = choiceSchema.validate(choice, { abortEarly: false });
    if(error){
        const errors = error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }
    
    next();
    
} */