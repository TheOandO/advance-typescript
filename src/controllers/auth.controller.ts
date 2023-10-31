import { Request, Response } from "express";
import AuthService from "../services/auth.service";
import ResponseUtil from "../utils/res.utils";
import { catchAsync } from "../utils/catchAsync";

class AuthController {
    /**
     * Login Authenticator
     * @param {Request} req 
     * @param {Response}res 
     * @returns {void}
     */
    login = catchAsync(async (req: Request, res: Response) => {
        try {
            const { username, password } = req.body;
            const loginResult = await AuthService.login(username, password);

            res.json(loginResult);
        }
        catch (error) {
            ResponseUtil.error(res, 'Login failed \n\
            Reasons: ' + error, 500);
        }
    });
};

export default new AuthController()
