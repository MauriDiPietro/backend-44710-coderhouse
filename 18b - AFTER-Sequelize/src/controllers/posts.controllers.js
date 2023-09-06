import * as service from '../services/posts.services.js';

export const getAllPosts = async(req, res, next)=>{
    try {
        const posts  = await service.getAllPosts();
        res.json(posts)
    } catch (error) {
        next(error)
    }
};

export const getPostById = async (req, res, next)=>{
    try {
        const { id } = req.params;
        const post = await service.getPostById(id)
        res.json(post)
    } catch (error) {
        next(error)
    }
};

export const createPost = async (req, res, next)=>{
    try {
        const body = { ...req.body };
        const post = await service.createPost(body)
        res.json(post);
    } catch (error) {
        next(error)
    }
};

export const updatePost = async(req, res, next)=>{
    try {
        const { id } = req.params;
        const body = { ...req.body } 
        await service.updatePost(id, body)
        res.json({message: 'post updated successfully'})
    } catch (error) {
        next(error)
    }
};

export const deletePost = async(req, res, next)=>{
    try {
        const { id } = req.params;
        await service.deletePost(id)
        res.json({message: 'post deleted successfully'})
    } catch (error) {
        next(error)
    }
};