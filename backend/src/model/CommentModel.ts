import MYSQL_DB from "../config/databases";

class CommentModel {
    async addComment(comment: Comment): Promise<number> {
        let values = [comment.postId, comment.content];
        const commentId = await MYSQL_DB.insert(
            `insert into comment(post_id, content) values(?, ?)`,
            values
        );

        return commentId;
    }

    async getAllComments(postId: number): Promise<Array<Comment>> {
        return await MYSQL_DB.getall(
            `select id, post_id as postId, content from comment where post_id = ?`,
            [postId]
        );
    }
}

export default CommentModel;