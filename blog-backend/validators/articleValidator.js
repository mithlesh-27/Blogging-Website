const { check, validationResult } = require('express-validator');

exports.validateArticle = [
  check('title', 'Title is required').not().isEmpty(),
  check('content', 'Content is required').not().isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
