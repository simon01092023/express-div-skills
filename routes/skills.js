var express = require('express');
var router = express.Router();
var skillsController = require('../controllers/skills');

// All actual paths starts with "/skills"

// GET /skills Index route 
router.get('/', skillsController.index);
// GET /skills/new 
router.get('/new', skillsController.new);
// GET /skills/:id Show route 
router.get('/:id', skillsController.show);
// POST Create new route
router.post('/', skillsController.create);
// POST /skills/:id Delete route 
router.delete('/:id', skillsController.delete);

module.exports = router;
