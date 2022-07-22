import Joi from "joi";

const validate = Joi.object(
    {
        name: Joi.string().required(),
        surname: Joi.string().required(),
        mail: Joi.string().email().required(),
        password: Joi.string().min(5).max(16).required(),
        phone: Joi.string().max(18),
        image: Joi.string(),
        //createdDate: Joi.date()
    }

)

export default { validate }
