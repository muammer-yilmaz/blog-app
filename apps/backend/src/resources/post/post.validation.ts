import Joi from 'joi';

const validate = Joi.object({
    title: Joi.string().required(),
    image: Joi.string(),
    body: Joi.string().required(),
});

export default { validate };