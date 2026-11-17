var express = require('express');
var router = express.Router();

const Boards = require('../controllers/board.js');

// Create an instance of the Boards class
const boards = new Boards();

router.post('/', async (req, res) => {
    try {
        // TODO: Call the create method with the request body


        // TODO: Return status 201 with the created item


    } catch (error) {
        res.status(500).send();
    }
});

// PUT /boards/:id - Update the stage of a board item
router.put('/:id', async (req, res) => {
    try {
        // TODO: Get the ID from the request parameters

        // TODO: Call the update method with the ID and request body


        // TODO: If the returned item is null, respond with status 400


        // TODO: Otherwise, return status 200 with the updated item


    } catch (error) {
        res.status(500).send();
    }
});


module.exports = router;
