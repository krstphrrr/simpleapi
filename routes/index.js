// routes/index.js
const geoModel = require('./models/geoIndicators')
const Geo = geoModel(db,Sequelize)
const Sequelize = require('sequelize');
const db = require('./config/database');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
  });

/* GET json data. */
router.get('/mapjson/:name', function (req, res) {
    if (req.params.name) {
        Geo.findOne({ name: req.params.name },{}, function (err, docs) {
            res.json(docs);
        });
    }
});

