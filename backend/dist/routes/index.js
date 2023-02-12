"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const UserRoute_1 = require("./UserRoute");
const router = new Router();
// TODO: add swagger and ping endpoint
router.use('/user', UserRoute_1.default.routes(), UserRoute_1.default.allowedMethods());
exports.default = router;
