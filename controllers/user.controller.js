const { v4: uuidv4 } = require('uuid');
const db = require('../db');

module.exports.index = (req, res) => {
    res.render('users/index', {
        users: db.get('users').value()
    })
};
module.exports.search = ((req, res) => {
    const q = req.query.q;
    const matchedUsers = db.get('users').value().filter((user)=>{
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    // console.log(req.query)
    res.render('users/index', {
        users: matchedUsers
    })
})

module.exports.create = ((req, res) => {
    res.render('users/create')
})

module.exports.get = ((req, res)=>{
    const id = req.params.id;
    // console.log(id);
    const user = db.get('users').find({ id }).value();
    res.render('users/view', {
        user
    })
})

module.exports.postCreate = ((req, res) =>{
    req.body.id = uuidv4();
    console.log(res.locals);
    db.get('users').push(req.body).write();
    // console.log(req.body)
    res.redirect('/users')
})