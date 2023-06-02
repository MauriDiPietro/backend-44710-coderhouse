import PostDaoMySql from "../daos/posts.dao.js";
const postDao = new PostDaoMySql();

export const createPost = async (post) => {
    try {
      const newPost = await postDao.createPost(post);
      if (!newPost) throw new Error("Validation Error!");
      else return newPost;
    } catch (error) {
      console.log(error);
    }
  };

  export const getAllPosts = async()=>{
    try {
      const response = await postDao.getAllPosts();
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  export const getPostById = async (id) => {
    try {
      const post = await postDao.getPostById(id);
      if(!post) throw new Error('Product not found')
      else return post;
    } catch (error) {
      console.log(error);
    }
  };

  export const updatePost = async (id, body) => {
    try {
      const post = await postDao.getPostById(id);
      if(!post){
         throw new Error('Post not found')
      } else {
        const postUpd = await postDao.updatePost(id, body)
        return postUpd;
      }
    } catch (error) {
      console.log(error);
    }
  };

  export const deletePost = async (id) => {
    try {
       const prodDel = await postDao.deletePost(id);
       return prodDel;
    } catch (error) {
      console.log(error);
    }
  };