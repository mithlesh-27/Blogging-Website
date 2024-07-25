const Article = require('../models/Article');

exports.createArticle = async (req, res, next) => {
  const { title, content } = req.body;
  const userId = req.user.id;

  try {
    const article = new Article({ title, content, user: userId });
    await article.save();
    res.status(201).json(article);
  } catch (err) {
    next(err);
  }
};

exports.getArticles = async (req, res, next) => {
  try {
    const articles = await Article.find().populate('user', ['username']);
    res.status(200).json(articles);
  } catch (err) {
    next(err);
  }
};

exports.getArticleById = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.id).populate('user', ['username']);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.status(200).json(article);
  } catch (err) {
    next(err);
  }
};

exports.updateArticle = async (req, res, next) => {
  const { title, content } = req.body;

  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    article.title = title || article.title;
    article.content = content || article.content;

    await article.save();
    res.status(200).json(article);
  } catch (err) {
    next(err);
  }
};

exports.deleteArticle = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }

    await article.remove();
    res.status(200).json({ message: 'Article removed' });
  } catch (err) {
    next(err);
  }
};
