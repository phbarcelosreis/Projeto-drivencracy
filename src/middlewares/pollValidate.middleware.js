import {pollSchema} from '../models/model.js'
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

