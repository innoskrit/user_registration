import { React, useState } from 'react'
import styles from './styles.module.css';
import {v4 as uuid} from 'uuid';

const Post = () => {
    const [post, setPost] = useState("");
    const [postList, setPostList] = useState([]);

    const handlePost = (e) => {
        setPost(e.target.value);
    }

    const addPost = () => {
        if(post === ""){
            window.alert("Can't be empty!");
        }else{
            let id = uuid().slice(0,8);
            setPostList([{id, post, comments: [], newComment: "", showComments: false}, ...postList]);
            setPost("")
        }
    }

    const handleDelete = (id) => {
        let list = postList.filter(post => post.id !== id);
        setPostList(list);
    }

    const handleNewComment = (e, p) => {
        let newList = postList.map(post => {
            if(post.id === p.id){
                p.newComment = e.target.value;
                return p;
            }else{
                return post;
            }
        });
        setPostList(newList);
    }

    const addComment = (p) => {
        if(p.newComment === ''){
            window.alert('Can not Add Empty Comment!');
        }else{
            let list = postList.map(post => {
                if(post.id === p.id){
                    post.comments.push(post.newComment);
                    post.newComment = "";
                    return post;
                }else{
                    return post;
                }
            });
            setPostList(list);
        }
    } 

    const handleShowComments = (id) => {
        let newList = postList.map(post => {
            if(post.id === id){
                post.showComments = !post.showComments;
                return post;
            }else{
                return post;
            }
        });
        setPostList(newList);
    }

  return (
    <div className={styles.container}>
        <div className={styles.post_create}>
            <label>Write Post</label><br/>
            <input
                type="text"
                value={post}
                className={styles.post_input}
                onChange={handlePost}
            />
            <button onClick={addPost}>Post</button>
        </div>
        <div className={styles.post_list}>
            <div>
                {postList.map(post => {
                    return  <div key={post.id}>
                                <li>{post.post} <span onClick={() => handleDelete(post.id)} className={styles.delete}>Delete</span></li>
                                {!post.showComments ? <div onClick={() => handleShowComments(post.id)}>Comments</div> : <div onClick={() => handleShowComments(post.id)}>Hide</div>}
                                {
                                    post.showComments && 
                                    <>
                                        <input 
                                            type='text'
                                            value={post.newComment}
                                            placeholder='Add Comment...'
                                            onChange={(e) => handleNewComment(e, post)}
                                        />
                                        <button onClick={() => addComment(post)}>Add Comment</button>
                                        <ul>
                                            {
                                                post.comments.map(comment => <li>{comment}</li>)
                                            }
                                        </ul>
                                    </>
                                }
                                
                            </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Post;
