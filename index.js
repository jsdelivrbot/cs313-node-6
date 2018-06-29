const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const postageCalculator = require('./views/postageCalculator/postageCalculator');
const PORT = process.env.PORT || 5000;

express()
    .use(express.static(path.join(__dirname, 'public')))
    .use(bodyParser.json() )
    .use(bodyParser.urlencoded({
        extended: true}))
    .use(function calculate(req, res, next) {
        res.locals.calculateRate = postageCalculator;
        next();
    })
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('home/index'))
    .get('/postageCalculator', (req, res) => res.render('postageCalculator/index'))
    .get('/getRate', (req, res) => res.render('postageCalculator/getRate'))
    .post('/getRate', (req, res) => {
        console.log('Request: ', req.body);
        let itemWeight = req.body.itemWeight,
            itemType = req.body.itemType;
        res.render('postageCalculator/getRate', {
            itemWeight: itemWeight,
            itemType: itemType
        })
    })
    .get('/getPerson', (req, res) => res.render('teamActivity10/index'))
    .get('/physics', (req, res) => res.render('physics/index'))
    .get('/physics/quotes', (req, res) => res.render('physics/quotes'))
    .get('/physics/sim', (req, res) => res.render('physics/sim'))
    .get('/physics/sim/highscores', (req, res) => res.render('physics/highscores'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
