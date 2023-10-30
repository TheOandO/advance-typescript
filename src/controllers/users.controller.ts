import { Request, Response } from "express";
import Service from "../services/models.service";
import ResponseUtil from "../utils/res.utils";
import { catchAsync } from "../utils/catchAsync";

class UserController {
    /**
     * Get all users
     * @param {Request} req 
     * @param {Response} res 
     * @returns {Object} user
     */
    createUser = catchAsync(async(req: Request, res: Response) => {
        try {
            const userService = new Service.UserService();
            const user = await userService.createUser(req.body);
            ResponseUtil.success(res, user);
        } catch (error) {
            ResponseUtil.error(res, 'User creation failed', 500);
        }
    });

    /**
     *  Create a user
     * @param {Request} req 
     * @param {Response} res 
     * @returns {Object} users
     */
    getAllUsers = catchAsync(async(req: Request, res: Response) => {
        try {
            const userService = new Service.UserService();
            const users = await userService.getAllUsers();
            ResponseUtil.success(res, users);
        } catch (error) {
            ResponseUtil.error(res, 'Error fetching users', 500);
        }
    });

    /**
     * Get a user by ID
     * @param {Request} req 
     * @param {Response} res 
     * @returns {Object} user
     */
    getUserById = catchAsync(async (req: Request, res: Response) => {
        try {
            const userService = new Service.UserService();
            const user = await userService.getUserById(req.params.userId);
            if (!user) {
                return ResponseUtil.error(res, 'User not found', 404);
            }
            ResponseUtil.success(res, user);
        } catch (error) {
            ResponseUtil.error(res, 'Error fetching user', 500);
        }
    });

    /**
     * Update a user
     * @param {Request} req 
     * @param {Response} res 
     * @returns {Object} updatedUser
     */
    updateUser = catchAsync(async (req: Request, res: Response) => {
        try {
            const userService = new Service.UserService();
            const updatedUser = await userService.updateUser(req.params.userId, req.body);
            if (!updatedUser) {
                return ResponseUtil.error(res, 'User not found', 404);
        }
            ResponseUtil.success(res, updatedUser);
        } catch (error) {
            ResponseUtil.error(res, 'Update failed', 500);
        }
    });
    
    /**
     * Delete a user
     * @param {Request} req 
     * @param {Response} res 
     * @returns {void}
     */
    deleteUser = catchAsync(async (req: Request, res: Response) => {
        try {
            const userService = new Service.UserService();
            const user = await userService.deleteUser(req.params.userId);
            if (!user) {
                return ResponseUtil.error(res, 'User not found', 404);
            }
            ResponseUtil.success(res, 'User deleted successfully');
        } catch (error) {
            ResponseUtil.error(res, 'Delete failed', 500);
        }
    });
}

export default new UserController();