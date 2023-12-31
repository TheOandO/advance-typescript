import { Request, Response, NextFunction } from 'express';
import jwtService from '../services/jwt.service';

export const authToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const decoded = jwtService.verifyToken(token);

    if (!decoded) {
        return res.status(401).json({ error: 'Invalid token' });
    }

    next();
};