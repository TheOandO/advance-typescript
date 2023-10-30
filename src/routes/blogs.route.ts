import Express from "express";
import BlogController from "../controllers/blogs.controller";

const router = Express.Router()

router
    .get('/', BlogController.getAllBlogs)
    .post('/', BlogController.createBlog)
    .get('/:blogId', BlogController.getBlogById)
    .put('/:blogId', BlogController.updateBlog)
    .delete('/:blogId', BlogController.deleteBlog);

export default router;