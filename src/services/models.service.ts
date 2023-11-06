import User, { User as UserType } from '../models/users.model';
import Blog, { Blog as BlogType } from '../models/blogs.model';
import bcrypt from 'bcrypt'

class UserService {
    /**
     * POST a user to the database
     * @param {Object} users 
     * @returns {Object} newUser
     */
    async createUser(users: UserType): Promise<UserType> {
        const newUser = new User(users);
        return await newUser.save()
    }

    /**
     * GET all users from the database
     * @returns {Object} User
     */
    async getAllUsers(): Promise<UserType[]> {
        return User.find();
    }

    /**
     * GET a user from the database
     * @param {Object} userId 
     * @returns {Object} User
     */
    async getUserById(userId: string): Promise<UserType | null> {
        return User.findById(userId);
    }

    /**
     * PUT a user
     * @param {Object} userId 
     * @param {Object} user 
     * @returns {Object} User
     */
    async updateUser(userId: string, user: UserType): Promise<UserType | null> {
        if (user.password) {
            const saltRounds = 10;
            user.password = await bcrypt.hash(user.password, saltRounds);
        }      
        return User.findByIdAndUpdate(userId, user, { new: true });
    }
    
    /**
     * DELETE a user
     * @param {Object} userId 
     * @returns {Object} User
     */
    async deleteUser(userId: string): Promise<UserType | null> {
        return await User.findByIdAndDelete(userId);
    }

    /**
     * Get User by Username
     * @param {Object} username 
     * @returns {Promise<Object>} user
     */
    async getUserByUsername(username: string): Promise<UserType | null> {
        return User.findOne({ username });
    }
}

class BlogService {
    /**
     * POST a blog
     * @param {Object} blogs 
     * @returns {Object} newBlog 
     */
    async createBlog(blogs: BlogType): Promise<BlogType> {
        const newBlog = new Blog(blogs);
        return await newBlog.save()
    }

    /**
     * GET all blog
     * @returns {Object} Blog
     */
    async getAllBlogs(): Promise<BlogType[]> {
        return Blog.find();
    }

    /**
     * GET a blog
     * @param {Object} blogId 
     * @returns {Object} Blog
     */
    async getBlogById(blogId: string): Promise<BlogType | null> {
        return Blog.findById(blogId);
    }

    /**
     * PUT a blog
     * @param {Object} blogId 
     * @param {Object} blog 
     * @returns {Object} Blog
     */
    async updateBlog(blogId: string, blog: BlogType): Promise<BlogType | null> {
        return Blog.findByIdAndUpdate(blogId, blog, { new: true });
    }
    
    /**
     * DELETE a blog
     * @param {Object} blogId 
     * @returns {Object} Blog
     */
    async deleteBlog(blogId: string): Promise<BlogType | null> {
        return Blog.findByIdAndDelete(blogId);
    }
}

export default { UserService, BlogService };