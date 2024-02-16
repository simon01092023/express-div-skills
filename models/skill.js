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
    Skill
};

function getAll () {
    return skills;
};


function getOne (id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
};

