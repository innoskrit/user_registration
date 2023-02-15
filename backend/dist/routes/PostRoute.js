"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const PostController_1 = require("../controller/PostController");
const router = new Router();
// createPost -> POST /post { "post": ""}
// addComment -> /post/1/comment -> { "comment": ""}
// deletePost? -> DELETE /post/id
router.get('/', (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const postController = new PostController_1.default();
    let posts = yield postController.getPosts();
    ctx.body = posts;
}));
router.get('/:postId', (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    let postId = (ctx.params.postId);
    const postController = new PostController_1.default();
    let post = yield postController.getPostById(postId);
    ctx.body = post;
}));
router.post('/', (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const postController = new PostController_1.default();
    let post = yield postController.createPost(ctx.request.body);
    ctx.body = post;
}));
router.post('/:postId/comment', (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    let comment = ctx.request.body;
    let postId = (ctx.params.postId);
    comment.postId = postId;
    const postController = new PostController_1.default();
    let post = yield postController.addComment(comment);
    ctx.body = post;
}));
router.delete('/:postId', (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const postController = new PostController_1.default();
    let comment = yield postController.deletePost((ctx.params.postId));
    ctx.body = comment;
}));
exports.default = router;
