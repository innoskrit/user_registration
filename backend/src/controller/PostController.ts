import PostService from "../service/PostService";

class PostController {
    postService: PostService;
    constructor() {
        this.postService = new PostService();
    }

    async getPosts(): Promise<Array<Post>> {
        return await this.postService.getPosts();
    }

    async getPostById(id: number): Promise<Post> {
        return await this.postService.getPostById(id);
    }

    async createPost(post: Post): Promise<Post> {
        return await this.postService.createPost(post);
    }

    async addComment(comment: Comment): Promise<Post> {
        return await this.postService.addComment(comment);
    }

    async deletePost(postId: number) {
        return await this.postService.deletePost(postId);
    }
}

export default PostController;