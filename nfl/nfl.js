// IMPORT DEPENDENCIES
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// IMPORT MODELS
const Teams = require('./nflModel');


router.post('/', (req, res) => {
    let team = req.body;
    
    Teams.add(team)
        .then(signUp => {
            res.status(201).json(signUp)
        })
        .catch(error => {
            res.status(500).json({ message: "Cannot add team"});
      });
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Teams.remove(id)
        .then(deleted => {
            if(deleted){
                res.json({ removed: deleted })
            } else {
                res.status(404).json({ message: "Could not find ID."})
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to delete scheme' });
          });
})

module.exports = router;