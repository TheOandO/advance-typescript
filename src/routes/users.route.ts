import Express from "express";
import UserController from "../controllers/users.controller";
import { validateUser } from "../middlewares/validation.middle";
import { authToken } from "../middlewares/auth.middle";

const router = Express.Router()

router
    .get('/', authToken, UserController.getAllUsers)
    .post('/',validateUser, authToken, UserController.createUser)
    .get('/:userId',validateUser,authToken, UserController.getUserById)
    .put('/:userId',validateUser,authToken, UserController.updateUser)
    .delete('/:userId',validateUser,authToken, UserController.deleteUser);

export default router;