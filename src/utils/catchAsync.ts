import { Request, Response, NextFunction } from "express";

/**
 * Global handling error
 * @param {*} fn 
 * @returns {void}
 */
export const catchAsync = <T = Response>(fn: (req: Request, res: Response, next: NextFunction) => Promise<T>) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
        await fn(req, res, next);
        } catch (err) {
        next(err);
        }
    };