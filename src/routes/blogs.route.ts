import Express from "express";
import BlogController from "../controllers/blogs.controller";
import { validateBlog } from "../middlewares/validation.middle";

const router = Express.Router()

router
    .get('/', BlogController.getAllBlogs)
    .post('/', validateBlog, BlogController.createBlog)
    .get('/:blogId', validateBlog, BlogController.getBlogById)
    .put('/:blogId', validateBlog, BlogController.updateBlog)
    .delete('/:blogId', validateBlog, BlogController.deleteBlog);

export default router;