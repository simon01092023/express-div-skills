var express = require('express');
var router = express.Router();
var skillsController = require('../controllers/skills');

// All actual paths starts with "/skills"

// GET /skills Index route 
router.get('/', skillsController.index);
// GET /skills/:id Show route 
router.get('/:id', skillsController.show);
// GET /skills Create route 
router.post('/', skillsController.create);
// GET /skills/:id Delete route 
router.delete('/:id', skillsController.deleteSkill);

module.exports = router;
