import Express from "express";
import AuthController from "../controllers/auth.controller";
import { authToken } from "../middlewares/auth.middle";

const router = Express.Router();

router
    .get('/login', AuthController.login)
    .get('/profile', authToken, (req, res) => {
        res.json({ message: 'Authorized: \n \
                It was a question of which of the two she preferred. On the one hand, the choice seemed simple. The more expensive one with a brand name would be the choice of most. It was the easy choice. The safe choice. But she wasn`t sure she actually preferred it.'})
    });
export default router;