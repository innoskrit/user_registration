import PostModel from "../model/PostModel";
import CommentModel from "../model/CommentModel";

class PostService {
    postModel: PostModel;
    commentModel: CommentModel;

    constructor() {
        this.postModel = new PostModel();
        this.commentModel = new CommentModel();
    }

    async getPosts(): Promise<Array<Post>> {
        return await this.postModel.getAllPosts();
    }

    async createPost(post: Post): Promise<Post> {
        let postId = await this.postModel.createPost(post);
        return await this.postModel.getPost(postId);
    }

    async addComment(comment: Comment): Promise<Post> {
        let commentId = await this.commentModel.addComment(comment);
        return await this.getPostById(comment.postId);
    }

    async deletePost(id: number) {
        return await this.postModel.deletePost(id);
    }

    async getPostById(id: number): Promise<Post> {
        let post = await this.postModel.getPost(id);
        if (post) {
            let comments = await this.commentModel.getAllComments(id);
            post.comments = comments;
        }

        return post;
    }
}


export default PostService;