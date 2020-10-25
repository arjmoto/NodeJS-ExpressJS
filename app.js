const express = require('express');

const userRoutes = require('./routes/user.route');
const authRoutes = require('./routes/auth.route');

const port = 5000;
const app = express();
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.render('index')
})

app.use('/users', userRoutes);
app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})