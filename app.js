const express = require('express')
const hbs = require('hbs');

const app = express()
const port = 4000;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials' );

//Servir contenido estático
app.use( express.static( 'public' ) )

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Juan David De la hoz',
        titulo: 'Curso de Node'
    })
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Juan David De la hoz',
        titulo: 'Curso de Node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Juan David De la hoz',
        titulo: 'Curso de Node'
    })
})

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})