const express = require('express');

const db = require('../data/db.js');

const router = express.Router();

// POST -> /api/posts
router.post('/', (req, res) => {
  const newPost = req.body;

  return (!newPost.title || !newPost.contents)
  ? res.status(400).json({ errorMessage: "Please provide title and contents for the post." })
  : db
    .insert(newPost)
    .then(post => {
      // return res.status(201).json(post); <-- Necessary return?
      res.status(201).json(post);
    })
    .catch(err => {
      res.status(500).json({ error: "There was an error while saving the post to the database" });
    });

});

// GET -> /api/posts
router.get('/', (req, res) => {
  // Do Stuff
});

// GET -> /api/posts/:id
router.get('/:id', (req, res) => {
  // Do Stuff
});

// DELETE -> /api/posts/:id
router.delete('/:id', (req, res) => {
  // Do Stuff
});

// PUT -> /api/posts/:id
router.put('/:id', (req, res) => {
  // Do Stuff
});

module.exports = router;