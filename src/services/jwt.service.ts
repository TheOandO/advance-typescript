import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

class JwtService {
    private secretKey: string;

    constructor() {
        this.secretKey = process.env.JWT_SECRET || 'defaultSecretKey';
    };

    generateToken(userId: string) {
        return jwt.sign({ userId }, this.secretKey, { expiresIn: '1h' });
    };
    
    verifyToken(token: string) {
        try {
            return jwt.verify(token, this.secretKey);
        } catch (error) {
            return null;
        }
    }
};

export default new JwtService()