const express = require('express');
const mongoose = require('mongoose');
const app = express();



//Routes
app.get('/', (req, res) => {
    res.send('We are at home');
});



//Connect to DB
const mongoose_url = 'mongodb+srv://reservationdb:kwENGj6AdHYIeDJA@cluster0.4kvam.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoose_url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log('DB connected');
    app.listen(3000);
});

//https://www.youtube.com/watch?v=vjf774RKrLc

//URL: mongodb+srv://reservationdb:kwENGj6AdHYIeDJA@cluster0.4kvam.mongodb.net/test?retryWrites=true&w=majority