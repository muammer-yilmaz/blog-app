import Joi from 'joi';

const create = Joi.object({
    title: Joi.string().required(),
    image : Joi.string(),
    body: Joi.string().required(),
});

export default { create };