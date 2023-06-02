import PostModel from "./mysql/models/post.model.js";

export default class PostDaoMySql {
    async createPost(post){
        try {
            const response = await PostModel.create(post);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async getAllPosts(){
        try {
            const response = await PostModel.findAll();
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async getPostById(id){
        try {
            const response = await PostModel.findOne({
                where: {
                    id: id
                }
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async updatePost(id, body){
        try {
            const post = await PostModel.update(body, {
                where: {
                    id: id
                }
            })
            return post;
        } catch (error) {
            console.log(error);
        }
    }

    async deletePost(id){
        try {
            const post = await PostModel.destroy({
                where: {
                    id: id
                }
            })
            return post;
        } catch (error) {
            console.log(error);
        }
    }
}