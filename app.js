const express = require('express');
const app = express();
const userRoutes = require('./routes/user.route');


const port = 5000

app.set('view engine', 'pug');
app.set('views', './views')
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.render('index')
})

app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})