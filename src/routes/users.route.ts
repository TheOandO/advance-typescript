import Express from "express";
import UserController from "../controllers/users.controller";
import { validateUser } from "../middlewares/validation.middle";

const router = Express.Router()

router
    .get('/', UserController.getAllUsers)
    .post('/',validateUser, UserController.createUser)
    .get('/:userId',validateUser, UserController.getUserById)
    .put('/:userId',validateUser, UserController.updateUser)
    .delete('/:userId',validateUser, UserController.deleteUser);

export default router;