const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


//Get back all posts
router.get('/', async (req, res) => {
    const posts =  await Post.find();
    res.json(posts);
});

//Submit a post
router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    post.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    });
});

//Specific post
router.get('/:postId', async (req,res) => {
    const post = await Post.findById(req.params.postId);
    res.json(post);
});


//Delete specific post
router.delete('/:postId', async (req,res) => {
    const removedPost = await Post.remove({_id: req.params.postId});
    res.json(removedPost);
});

//Update a post
router.patch('/:postId', async (req, res) => {
    try{
    const updatedPost = await Post.updateOne({ _id: req.params.postId }, {$set: {title: req.body.title} }
        );
        res.json(updatedPost);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;