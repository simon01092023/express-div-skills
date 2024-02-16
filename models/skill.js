const skills = [
    { id: 100000, skill: 'Learn HTML', done: true },
    { id: 200000, skill: 'Learn CSS', done: true },
    { id: 300000, skill: 'Learn Basic JS', done: true },
    { id: 400000, skill: 'Learn Node JS', done: false },
    { id: 500000, skill: 'Learn Express', done: false },
];

// easy to add a new Skill sam shape as array
class Skill {
    constructor(id, skill, done) {
        this.id = id;
        //id:id id 
        this.skill = skill;
        //skill:skill skill
        this.done = done;
        //done:done done
    }
}

//module.exports = skills; for testing

module.exports = {
    getAll,
    getOne,
    Skill,
    create,
    deleteOneSkill

};

function getAll() {
    return skills;
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
};

function create(skill) {
    //keep same length as orginal skills array
    skill.id = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    skill.done = false;
    skills.push(skill);
}

function deleteOneSkill(id) {
    id = parseInt(id);
    //find and remove
    const idex = skills.findIndex(skill => skill.id === id);
    skills.splice(idex, 1);
}