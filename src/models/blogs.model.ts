import mongoose, { Document } from "mongoose";
import { ModelNames } from "../utils/constants/modelNames";

export interface Blog extends Document {
    title: string,
    content: string,
}

const BlogSchema = new mongoose.Schema (
    {
        title: {
            type: String,
        },
        content: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<Blog>(ModelNames.BLOG_MODEL, BlogSchema);