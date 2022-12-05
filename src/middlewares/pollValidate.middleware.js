import {pollSchema} from '../models/model.js'
/* import {choiceSchema} from '../models/pollModel.js' */

function zero(n){
    return n < 9 ? `0${n}` : `${n}`;
}


function formatDate(){
    const data = new Date();
    data.setDate(data.getDate() + 30);
    const dia = zero(data.getDate());
    const mes = zero(data.getMonth() + 1);
    const ano = zero(data.getFullYear());

    return `${dia}-${mes}-${ano}`
}

export async function pollPostValidate(req, res, next){

    const poll = req.body;
    const newData = formatDate();
    console.log(newData);

    const { error } = pollSchema.validate(poll, { abortEarly: false });
    if(error){
        const errors = error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }


    next();

}

