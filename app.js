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
    res.render('home');
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