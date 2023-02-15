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
const databases_1 = require("../config/databases");
class PostModel {
    getAllPosts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield databases_1.default.getall(`select * from post`);
        });
    }
    createPost(post) {
        return __awaiter(this, void 0, void 0, function* () {
            let values = [post.content];
            const postId = yield databases_1.default.insert(`insert into post(content) values(?)`, values);
            return postId;
        });
    }
    getPost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield databases_1.default.getrow(`select * from post where id = ?`, [id]);
        });
    }
    deletePost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield databases_1.default.delete(`delete from post where id = ?`, [id]);
        });
    }
}
exports.default = PostModel;
