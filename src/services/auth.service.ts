import jwtService from "./jwt.service";
import bcrypt from 'bcrypt'
import uService from './models.service'

class AuthService {

    /**
     * Login function
     * @param {Object} username 
     * @param {Object} password 
     * @returns {Promise<Object>} user, token
     */
    async login(username: string, password: string) {
        try {
            const login = new uService.UserService();
            const user = await login.getUserByUsername(username);

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
