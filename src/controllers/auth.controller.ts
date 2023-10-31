import { Request, Response } from "express";
import Service from "../services/models.service";
import ResponseUtil from "../utils/res.utils";
import jwtService from "../services/jwt.service";
import { catchAsync } from "../utils/catchAsync";
import bcrypt from 'bcrypt'

class AuthController {
    /**
     * Login Authenticator
     * @param req 
     * @param res 
     * @returns void
     */
    async login(req: Request, res: Response) {
        try {
            const authService = new Service.UserService;
            const { username, password } = req.body;
            const user = await authService.getUserByUsername(username);
        
            if (!user) {
                return ResponseUtil.error(res, 'User not found', 404);
            }
        
            const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
        
            if (!isPasswordValid) {
                return ResponseUtil.error(res, 'Invalid password', 401);
            }
        
            //Generate token
            const token = jwtService.generateToken(user._id);
        
            ResponseUtil.success(res, { user, token });
        } catch (error) {
            ResponseUtil.error(res, 'Login failed', 500);
        }
    };
};

export default new AuthController()
