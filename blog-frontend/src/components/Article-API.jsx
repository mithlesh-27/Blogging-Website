// article-api.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/articleDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Define article schema
const articleSchema = new mongoose.Schema({
  title: String,
  content: String
});

// Create article model
const Article = mongoose.model('Article', articleSchema);

// Get all articles
router.get('/api/articles', async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching articles' });
  }
});

// Get article by ID
router.get('/api/article/:id', async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      res.status(404).json({ message: 'Article not found' });
    } else {
      res.json(article);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching article' });
  }
});

// Create new article
router.post('/api/article', async (req, res) => {
  try {
    const article = new Article(req.body);
    await article.save();
    res.json(article);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating article' });
  }
});

// Update article
router.put('/api/article/:id', async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!article) {
      res.status(404).json({ message: 'Article not found' });
    } else {
      res.json(article);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating article' });
  }
});

// Delete article
router.delete('/api/article/:id', async (req, res) => {
  try {
    await Article.findByIdAndRemove(req.params.id);
    res.json({ message: 'Article deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting article' });
  }
});

module.exports = router;