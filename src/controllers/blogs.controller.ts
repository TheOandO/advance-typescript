import { Request, Response } from "express";
import Service from "../services/models.service";
import ResponseUtil from "../utils/res.utils";
import { catchAsync } from "../utils/catchAsync";

class BlogController {
    createBlog = catchAsync(async(req: Request, res: Response) => {
        try {
            const blogService = new Service.BlogService();
            const blog = await blogService.createBlog(req.body);

            ResponseUtil.success(res, blog);
        } catch (error) {
            ResponseUtil.error(res, 'Blog creation failed', 500);
        }
    });

    getAllBlogs = catchAsync(async(req: Request, res: Response) => {
        try {
            const blogService = new Service.BlogService();
            const blogs = await blogService.getAllBlogs();

            ResponseUtil.success(res, blogs);
        } catch (error) {
            ResponseUtil.error(res, 'Error fetching blogs', 500);
        }
    });

    getBlogById = catchAsync(async (req: Request, res: Response) => {
        try {
            const blogService = new Service.BlogService();
            const blog = await blogService.getBlogById(req.params.blogId);

            if (!blog) {
                return ResponseUtil.error(res, 'Blog not found', 404);
            }

            ResponseUtil.success(res, blog);
        } catch (error) {
            ResponseUtil.error(res, 'Error fetching blog', 500);
        }
    });

    updateBlog = catchAsync(async (req: Request, res: Response) => {
        try {
            const blogService = new Service.BlogService();
            const updatedBlog = await blogService.updateBlog(req.params.blogId, req.body);

            if (!updatedBlog) {
                return ResponseUtil.error(res, 'Blog not found', 404);
            }

            ResponseUtil.success(res, updatedBlog);
        } catch (error) {
            ResponseUtil.error(res, 'Update failed', 500);
        }
    });
    
    deleteBlog = catchAsync(async (req: Request, res: Response) => {
        try {
            const blogService = new Service.BlogService();
            const blog = await blogService.deleteBlog(req.params.blogId);

            if (!blog) {
                return ResponseUtil.error(res, 'Blog not found', 404);
            }
            
            ResponseUtil.success(res, 'Blog deleted successfully');
        } catch (error) {
            ResponseUtil.error(res, 'Delete failed', 500);
        }
    });
}

export default new BlogController();