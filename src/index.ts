import express from 'express';
import router from './routes';
import dotenv from 'dotenv';
import connectDB from './utils/connectDB';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use('/', router)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});