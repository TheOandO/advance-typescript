import { Request, Response, NextFunction } from 'express';
import { userValidationSchema, blogValidationSchema } from '../models/joi.schema';
import Joi from 'joi';

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
    const { error } = userValidationSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
};

export const validateBlog = (req: Request, res: Response, next: NextFunction) => {
    const { error } = blogValidationSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
};
