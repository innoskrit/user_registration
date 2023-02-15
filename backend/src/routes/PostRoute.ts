import * as Router from "koa-router";
import { Context } from "vm";
import PostController from "../controller/PostController";
const router = new Router();


// createPost -> POST /post { "post": ""}
// addComment -> /post/1/comment -> { "comment": ""}
// deletePost? -> DELETE /post/id

router.get('/', async (ctx, next) => {
    const postController = new PostController();
    let posts = await postController.getPosts();
    ctx.body = posts;
});

router.get('/:postId', async (ctx, next) => {
    let postId = (ctx.params.postId) as unknown as number;

    const postController = new PostController();
    let post = await postController.getPostById(postId);
    ctx.body = post;
});

router.post('/', async (ctx, next) => {
    const postController = new PostController();
    let post = await postController.createPost(<Post>ctx.request.body);
    ctx.body = post;
});

router.post('/:postId/comment', async (ctx, next) => {
    let comment = <Comment>ctx.request.body;
    let postId = (ctx.params.postId) as unknown as number;
    comment.postId = postId;

    const postController = new PostController();
    let post = await postController.addComment(comment);
    ctx.body = post;
});

router.delete('/:postId', async (ctx, next) => {
    const postController = new PostController();
    let comment = await postController.deletePost((ctx.params.postId) as unknown as number);
    ctx.body = comment;
});

export default router;