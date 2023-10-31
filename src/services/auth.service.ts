import jwtService from "./jwt.service";
import bcrypt from 'bcrypt'
import User, {User as UserType} from '../models/users.model';

class AuthService {
    /**
     * Get User by Username
     * @param {Object} username 
     * @returns {Object} user
     */
    async getUserByUsername(username: string): Promise<UserType | null> {
        const user = await User.findOne({ username });
        console.log('Found user:', user);
        return user;    
    }; 

    /**
     * Login function
     * @param {Object} username 
     * @param {Object} password 
     * @returns {Object} user, token
     */
    async login(username: string, password: string) {
        try {
            const user = await this.getUserByUsername(username);

            if (!user) {
                return {error: 'User not found'};
            }
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) {
                return { error: 'Invalid password' };
            }
            // Generate a JWT token
            const token = jwtService.generateToken(user._id);
            return { user, token };
        } catch (error) {
            return { error: 'Login failed' };
        }
    }
}

export default new AuthService();
