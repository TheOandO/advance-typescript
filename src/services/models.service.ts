import User, { User as UserType } from '../models/users.model';
import Blog, { Blog as BlogType } from '../models/blogs.model';
import bcrypt from 'bcrypt'

class UserService {
    async createUser(users: UserType): Promise<UserType> {
        const newUser = new User(users);
        return await newUser.save()
    };

    async getAllUsers(): Promise<UserType[]> {
        return User.find();
    };

    async getUserById(userId: string): Promise<UserType | null> {
        return User.findById(userId);
    };

    async updateUser(userId: string, user: UserType): Promise<UserType | null> {
        if (user.password) {
            const saltRounds = 10;
            user.password = await bcrypt.hash(user.password, saltRounds);
        }      
        return User.findByIdAndUpdate(userId, user, { new: true });
    }
    
    async deleteUser(userId: string): Promise<UserType | null> {
        return User.findByIdAndDelete(userId);
    }
    
    async getUserByUsername(username: string): Promise<UserType | null> {
        return User.findOne({ username });
    }; 
}

class BlogService {
    async createBlog(blogs: BlogType): Promise<BlogType> {
        const newBlog = new Blog(blogs);
        return await newBlog.save()
    };

    async getAllBlogs(): Promise<BlogType[]> {
        return Blog.find();
    };

    async getBlogById(blogId: string): Promise<BlogType | null> {
        return Blog.findById(blogId);
    };
    async updateBlog(blogId: string, blog: BlogType): Promise<BlogType | null> {
        return Blog.findByIdAndUpdate(blogId, blog, { new: true });
    }
    
    async deleteBlog(blogId: string): Promise<BlogType | null> {
        return Blog.findByIdAndDelete(blogId);
    }
}

export default { UserService, BlogService };