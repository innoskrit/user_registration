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
const PostModel_1 = require("../model/PostModel");
const CommentModel_1 = require("../model/CommentModel");
class PostService {
    constructor() {
        this.postModel = new PostModel_1.default();
        this.commentModel = new CommentModel_1.default();
    }
    getPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postModel.getAllPosts();
        });
    }
    createPost(post) {
        return __awaiter(this, void 0, void 0, function* () {
            let postId = yield this.postModel.createPost(post);
            return yield this.postModel.getPost(postId);
        });
    }
    addComment(comment) {
        return __awaiter(this, void 0, void 0, function* () {
            let commentId = yield this.commentModel.addComment(comment);
            return yield this.getPostById(comment.postId);
        });
    }
    deletePost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postModel.deletePost(id);
        });
    }
    getPostById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let post = yield this.postModel.getPost(id);
            if (post) {
                let comments = yield this.commentModel.getAllComments(id);
                post.comments = comments;
            }
            return post;
        });
    }
}
exports.default = PostService;
