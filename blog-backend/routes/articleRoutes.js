const express = require('express');
const { check } = require('express-validator');
const { createArticle, getArticles, getArticleById, updateArticle, deleteArticle } = require('../controllers/articleController');
const auth = require('../middlewares/authMiddleware');
const { validateArticle } = require('../validators/articleValidator');

const router = express.Router();

router.post('/', [auth, validateArticle], createArticle);
router.get('/', getArticles);
router.get('/:id', getArticleById);
router.put('/:id', [auth, validateArticle], updateArticle);
router.delete('/:id', auth, deleteArticle);

module.exports = router;
