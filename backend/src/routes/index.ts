import * as Router from "koa-router";
import userRoute from "./UserRoute";

const router = new Router();

// TODO: add swagger and ping endpoint

router.use('/user', userRoute.routes(), userRoute.allowedMethods());

export default router;