const db = require('../data/dbConfig.js');

module.exports ={
    add, 
    remove, 
    getTeamBy
}

function getTeamBy(filter){
    return db('teams')
        .where(filter)
        .returning('id')
}

function add(team){
    return db('teams')
        .insert(team)
        .then(ids => {
            const [id] = ids;

            return getTeamBy(id);
        })
}

function remove(id){
    return db('teams')
        .where({ id })
        .first()
        .del()
}