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
  db
    .find()
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      res.status(500).json({ error: "The posts information could not be retrieved." });
    })
});

// GET -> /api/posts/:id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  
  return (!db.findById(id)) // Not getting 404 message when requesting invalid id
    ? res.status(404).json({ message: "The post with the specified ID does not exist." })
    : db
      .findById(id)
      .then(post => {
        res.status(200).json(post);
      })
      .catch(err => {
        res.status(500).json({ error: "The post information could not be retrieved." });
      })
});

// DELETE -> /api/posts/:id
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  return (!db.findById(id)) // Not getting 404 message when requesting invalid id
    ? res.status(404).json({ message: "The post with the specified ID does not exist." })
    : db
      .remove(id)
      .then(post => {
        res.status(200).json(post);
      })
      .catch(err => {
        res.status(500).json({ error: "The post could not be removed." });
      })
});

// PUT -> /api/posts/:id
router.put('/:id', (req, res) => {
  // Do Stuff
});

module.exports = router;