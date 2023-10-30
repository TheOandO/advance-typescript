import mongoose, { Schema, Document } from "mongoose";
import { USER_MODEL } from "../utils/constants/modelNames";
import bcrypt from "bcrypt";

export interface User extends Document {
    username: string;
    password: string;
    email: string;
};

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
        },
    },
    {
        timestamps: true
    }
);

// Hash the password before saving to the database
UserSchema.pre<User>('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);

        this.password = hashedPassword;
        
        next();
    } catch (error) {
        console.log(error);
        next();
    }
});
  // Method to compare passwords
UserSchema.methods.comparePassword = async function (candidatePassword: string) {
    return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model<User>(USER_MODEL, UserSchema);