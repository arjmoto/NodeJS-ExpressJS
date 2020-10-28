
const db = require('../db');

module.exports.index = (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const perPage  = 6;
    const start = (page - 1)* perPage;
    const end = page * perPage;
    const drop = (page - 1) * perPage;
    res.render('products/index', {
        // products: db.get('products').value().slice(start, end)
        products: db.get('products').drop(drop).take(perPage).value(),
        page: page
    })
};

