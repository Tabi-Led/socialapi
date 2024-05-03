const express = require('express');
const Thought = require('../models/Thought');
const router = express.Router();

// Get all thoughts
router.get('/', async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a thought
router.post('/', async (req, res) => {
  const thought = new Thought(req.body);
  try {
    const newThought = await thought.save();
    res.status(201).json(newThought);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
