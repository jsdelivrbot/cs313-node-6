const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { Client } = require('pg');
const postageCalculator = require('./views/postageCalculator/postageCalculator');
const PORT = process.env.PORT || 5000;
const connectionString = process.env.DATABASE_URL;

const client = new Client({connectionString});
client.connect();

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
    .get('/physics/sim', (req, res) => {
        // SQL Query > Select Data
        client.query('SELECT * FROM trajectories;', (err, queryResult) => {
            if (err) throw err;
            return res.json(queryResult);
        });
    })
    .post('/physics/sim', (req, res) => {
        // Get results from the HTTP request
        const data = {text: req.body.text, complete: false};

        // SQL Query > Insert Data
        client.query('INSERT INTO trajectories (shot_angle, shot_velocity, duration, final_distance) VALUES (30, 100, 12, 300);', (err) => {
            if (err) throw err;

            client.query('SELECT * FROM trajectories;', (err, queryResult) => {
                if (err) throw err;
                return res.json(queryResult);
            });

        });
    })
    .put('/physics/sim', (req, res) => res.render('physics/sim'))
    .delete('/physics/sim', (req, res) => res.render('physics/sim'))
    .get('/physics/sim/highscores', (req, res) => res.render('physics/highscores'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
