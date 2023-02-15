import MYSQL_DB from "../config/databases";

class PostModel {
    async getAllPosts(): Promise<Array<Post>> {
        return await MYSQL_DB.getall(
            `select * from post`
        );
    }
    
    async createPost(post: Post): Promise<number> {
        let values = [post.content];
        const postId = await MYSQL_DB.insert(
            `insert into post(content) values(?)`,
            values
        );

        return postId;
    }

    async getPost(id: number): Promise<Post> {
        return await MYSQL_DB.getrow(`select * from post where id = ?`, [id]);
    }

    async deletePost(id: number) {
        return await MYSQL_DB.delete(`delete from post where id = ?`, [id]);
    }
}

export default PostModel;