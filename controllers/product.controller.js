// const { v4: uuidv4 } = require('uuid');
const db = require('../db');

module.exports.index = (req, res) => {
    res.render('products/index', {
        users: db.get('products').value()
    })
};