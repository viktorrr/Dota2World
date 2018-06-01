 // set up ========================
var express  = require('express');
var fs = require('fs');
var path = require('path');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('underscore');

// configuration =================

app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(express.static(__dirname));
app.use(methodOverride());

function readFile(name) {
    var filename = path.join(__dirname, "db", name);
    var content = fs.readFileSync(filename, "utf8");

    return JSON.parse(content);
}

function getArticles() {
    return readFile("articles.json");
}

function getMatches() {
    return readFile("matches.json");
}

function getTeams() {
    return readFile("teams.json");
}

function getHeroes() {
    return readFile("heroes.json");
}

function getPlayers() {
    return readFile("players.json");
}

var router = express.Router()
    .get('/articles', function(req, res) {
        res.json(getArticles());
    })
    .get('/articles/:id', function(req, res) {
        var articles = getArticles();
        var article = _.find(getArticles(), function(a) {
            return a.id == req.params.id;
        });

        res.json(article);
    })
    .get('/matches', function(req, res) {
        res.json(getMatches());
    })
    .get('/players', function(req, res) {
        res.json(getPlayers());
    })
    .get('/players/:id', function(req, res) {
        var player = _.find(getPlayers(), function(p) {
            return p.id == req.params.id;
        });
        res.json(player);
    })
    .get('/teams', function(req, res) {
        res.json(getTeams());
    })
    .get('/teams/:id', function(req, res) {
        var team = _.find(getTeams(), function(t) {
            return t.id == req.params.id;
        });

        res.json(team);
    })
    .get('/heroes', function(req, res) {
        res.json(getHeroes());
    })
    .get('/heroes/:id', function(req, res) {
        var hero = _.find(getHeroes(), function(h) {
            return h.id == req.params.id;
        });

        res.json(hero);
    })
    .get('/teams/:id/players', function(req, res) {
        var players = _.filter(getPlayers(), function(p) {
            return p.teamId == req.params.id;
        });

        res.json(players);
    })
    ;


app.use('/api', router);

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");
