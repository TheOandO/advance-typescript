import Express from "express";
import UserController from "../controllers/users.controller";

const router = Express.Router()

router
    .get('/', UserController.getAllUsers)
    .post('/', UserController.createUser)
    .get('/:userId', UserController.getUserById)
    .put('/:userId', UserController.updateUser)
    .delete('/:userId', UserController.deleteUser);

export default router;