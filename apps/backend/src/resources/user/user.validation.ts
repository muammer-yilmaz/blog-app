import Joi from "joi";

const register = Joi.object(
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

const login = Joi.object(
    {
        mail: Joi.string().required(),
        password: Joi.string().required(),
    }
)

export default { register, login }
