import mongoose from "mongoose";

export default async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URL!);
        console.log("Conned !")
    }
    catch (err) {
        console.log("Not conned: " + err);
    }
}