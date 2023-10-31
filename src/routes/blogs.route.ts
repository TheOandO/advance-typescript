import Express from "express";
import BlogController from "../controllers/blogs.controller";
import { validateBlog } from "../middlewares/validation.middle";
import { authToken } from "../middlewares/auth.middle";

const router = Express.Router()

router
    .get('/', BlogController.getAllBlogs)
    .post('/', validateBlog, authToken, BlogController.createBlog)
    .get('/:blogId', validateBlog, authToken, BlogController.getBlogById)
    .put('/:blogId', validateBlog, authToken, BlogController.updateBlog)
    .delete('/:blogId', validateBlog, authToken,BlogController.deleteBlog);
export default router;