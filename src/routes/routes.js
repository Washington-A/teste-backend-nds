const express = require('express');
const routes = express.Router();
const userController = require('../controllers/userController');

routes.get('/', (req, res) => {
    res.send("AUTOBOTS, LET'S ROLL!");
});

routes.get('/users', userController.getAll);
routes.get('/users/:id', userController.getById);

module.exports = routes;
