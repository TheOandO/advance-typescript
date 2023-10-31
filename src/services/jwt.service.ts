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

// export const generateToken = (payload: any) => {
//     return jwt.sign(payload, JWT_SECRET!, { expiresIn: '1h'});
// };

// export const verifyToken = (token: string): string | object => {
//     try {
//         const decoded = jwt.verify(token, JWT_SECRET!);
//         return decoded;
//     } catch (error) {
//         return '';
//     }
// };

export default new JwtService()