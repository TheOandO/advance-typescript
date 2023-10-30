import express from 'express';
import userRoute from './users.route';
import blogRoute from './blogs.route';
const router = express.Router();

const defaultRoutes = [
    {
        path: '/users',
        route: userRoute,
    },
    {
        path: '/blogs',
        route: blogRoute,
    }
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;