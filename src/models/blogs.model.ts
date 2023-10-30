import mongoose, { Schema, Document, Date} from "mongoose";
import { BLOG_MODEL } from "../utils/constants/modelNames";

export interface Blog extends Document {
    title: string,
    content: string,
    date: Date
};

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

export default mongoose.model<Blog>(BLOG_MODEL, BlogSchema);