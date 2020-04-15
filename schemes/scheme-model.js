const db = require('../data/db-config')

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    findSteps,
    addStep
}

function find() {
    return db('schemes');
}


function findById(id) {
    return db('schemes').where({ id }).first()
}

function add(post) {
    return db("schemes")
    .insert(post)
    .then(([id]) => findById(id))
}

function update(update, id) {
    return db('schemes')
    .where('id', id)
    .update(update)
    .then(count => (count > 0 ? findById(id): null));
}


function remove(id) {
    return db('schemes')
    .where('id', id)
    .del()
}


function findSteps(id) {
    return db("steps")
    .where('scheme_id', id);
}


function addStep(stepData, id) {
    return db("steps")
    .where('scheme_id', id)
    .insert(stepData)
    .then(res => {
        return db('steps')
        .where('scheme_id', id)
    })
}
