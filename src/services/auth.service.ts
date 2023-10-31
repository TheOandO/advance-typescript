import User, { User as UserType } from '../models/users.model';

class AuthService {
    async getUserByUsername(username: string): Promise<UserType | null> {
        return User.findOne({ username });
    }; 
}

export default AuthService;
