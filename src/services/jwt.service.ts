import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

class JwtService {
    private secretKey: string;

    constructor() {
        this.secretKey = process.env.JWT_SECRET || 'defaultSecretKey';
    };

    /**
     * Generate JWT
     * @param {Object} userId 
     * @returns {Object} jwt
     */
    generateToken(userId: string) {
        return jwt.sign({ userId }, this.secretKey, { expiresIn: '1h' });
    };
    
    /**
     * Verify JWT
     * @param {Object} token 
     * @returns jwt
     */
    verifyToken(token: string) {
        try {
            return jwt.verify(token, this.secretKey);
        } catch (error) {
            return null;
        }
    }
};

export default new JwtService()