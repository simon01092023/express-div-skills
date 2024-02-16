// controllers/skills.js
const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    deleteSkill
};

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'All Skills'
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'Skill Details'
    });
}

function newSkill(req, res) {
    res.render('skills/new', {});
    //     // //keep same length as orginal skills array
    //     // const uniqueID = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    //     // //skill details from form
    //     // const { skill, done } = req.body;
    //     // //create new skill with unique ID 
    //     // const newSkill = new Skill(uniqueID, skill, done);
    //     // //add the new skill
    //     // skills.push(newSkill);
    //     // res.redirect('/skills');
}

function create(req, res) {
    console.log(req.body);
    //Models 
    // Skill.create(req.body);
    //redirect
    res.redirect('/skills');
}



function deleteSkill(req, res) {
    //skill ID from URL parameters
    const skillId = req.params.id;
    //find and remove from skills array
    const skillIndex = skills.findIndex((s) => skill.id === parseInt(skillId));
    if (skillIndex != -1) {
        skills.splice(skillIndex, 1);
    }
    //redirect to index view 
    res.redirect('/skills');
}
