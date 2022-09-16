import { Router } from "express";
import {createTable, insertPost, updatePost,selectPosts,selectPost,deletePost} from './Controller/Post.js';

const router = Router();

router.get('/',(req,res)=>{
        res.json({
                "status": 200
        });
});

router.get('/posts',selectPosts);
router.get('/post',selectPost);
router.post('/post',insertPost);
router.put('/post',updatePost);
router.delete('/post/:id',deletePost);


export default router;