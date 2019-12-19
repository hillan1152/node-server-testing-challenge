const db = require('../data/db.Config.js');

module.exports ={
    add, 
    remove
}

async function add(team){
    return db('teams')
        .insert(team)
        .returning("id")
}

async function remove(){
    return db('teams')
        .where('id', Number(id))
        .first()
        .then(team => {
            if(!team){
                return null
            } else {
                return db('teams')
                    .where({ id })
                    .del()
                    .then(() => {
                        return team
                    })
            }
        })
}