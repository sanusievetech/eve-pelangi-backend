const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


const port = process.env.PORT || 5000;

const app = express();

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//ROUTES
app.use('/api/users', require('./routes/users'));
app.use('/api/deposits', require('./routes/deposits'));
app.use('/api/customers', require('./routes/customers'));
app.use('/api/activities', require('./routes/activities'));
app.use('/api/gmap', require('./routes/gmap'));
// app.use('/api/whatsapp', require('./routes/whatsapp'));

app.get('/', (req, res) => {
    res.send('We are on home');
});

//connect to MongoDB
try {
    mongoose.connect(process.env.DB_CONNECTION, console.log('Monggo DB Connected !'));
} catch (error) {
    console.log('Monggo DB Not Connected :' + error);
}
//How we start listening to the server
app.listen(port, () => {
    console.log('Listening to port 5000;')
});