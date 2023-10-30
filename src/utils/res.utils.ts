import { Response } from 'express';

class ResponseUtil {
    success(res: Response, data: any) {
    return res.status(200).json(data);
    }

    error(res: Response, message: string, status: number) {
    return res.status(status).json({ error: message });
    }
}

export default new ResponseUtil();