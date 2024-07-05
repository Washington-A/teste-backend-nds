const { error } = require('console');
const findAll = require('../services/findAll');
const findById = require('../services/findById');

async function getAll(req, res) {
    try {
        const users = await findAll();
        res.json(users);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

async function getById(req, res) {
    try {
        const id = parseInt(req.params.id, 10);
        const user = await findById(id);
        res.json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

module.exports = {
    getAll,
    getById
};
