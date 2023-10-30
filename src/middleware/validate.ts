import Joi from "joi";

export const userValidationSchema = Joi.object({
    username: Joi.string().required().max(30).min(5).label('username'),
    password:Joi.string().required().min(5).label('password'),
    email: Joi.string().email().label('email')
})

export const blogValidationSchema = Joi.object ({
    title: Joi.string().max(150).label('title'),
    content: Joi.string().max(1000).label('content'),
    time: Joi.date().label('time')
})