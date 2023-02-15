import * as Router from "koa-router";
import userRoute from "./UserRoute";
import postRoute from "./PostRoute";

const router = new Router();

// TODO: add swagger and ping endpoint

router.use('/user', userRoute.routes(), userRoute.allowedMethods());
router.use('/post', postRoute.routes(), postRoute.allowedMethods());

export default router;