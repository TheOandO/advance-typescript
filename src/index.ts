import express from 'express';
import mongoose from 'mongoose';
import router from './routes';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

mongoose
    .connect(process.env.MONGODB_URL!)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    })
app.use(express.json());
app.use('/', router)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});