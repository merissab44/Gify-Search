// import dotenv so we can store api variables
require('dotenv').config();
//import node fetch
const fetch = require('node-fetch');
// import express
const express = require('express');
// create app variable to store the app
const app = express();

// import middleware
// middleware are like plugins

const { engine } = require('express-handlebars');

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
// set views to views folder
app.set('views', './views');
// create a route that responds to a get request

app.get('/',
(req, res) => {
    let term = "";
    if (req.query.term){
        term = req.query.term
    }
    fetch(`https://g.tenor.com/v1/search?q=${term}&key=${process.env.API_KEY}&limit=10`)
    .then(response => response.json())
    .then((data) => {
        const gifs = data.results;
        res.render('home', {gifs});
    })
}
);
// create a route that responds to a name input
app.get('/hello/:name', 
    (req, res) => {
    const name = req.params.name;

    res.send(`Hello, ${name}!`)
}
);

// create a listen port so the server can listen for requests

app.listen(3000, () => {
    console.log('Gif search listening on http://localhost:3000/')
}
);