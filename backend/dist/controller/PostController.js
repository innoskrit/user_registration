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
const PostService_1 = require("../service/PostService");
class PostController {
    constructor() {
        this.postService = new PostService_1.default();
    }
    getPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postService.getPosts();
        });
    }
    getPostById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postService.getPostById(id);
        });
    }
    createPost(post) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postService.createPost(post);
        });
    }
    addComment(comment) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postService.addComment(comment);
        });
    }
    deletePost(postId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.postService.deletePost(postId);
        });
    }
}
exports.default = PostController;
