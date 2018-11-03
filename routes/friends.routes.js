var Friends = require('../models/friends_model');
var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
    Friends.find({}).then(function(friends) {
        res.status(200).json(friends);
    });
});

router.post('/', function(req, res) {
    console.log(req.body);

    Friends.create(req.body).then(function(friend) {
        res.status(200).send(friend);
    });
});

router.put('/', function(req, res) {
    console.log(req.body);

    var query = {'_id' : req.body._id};
    
    Friends.findOneAndUpdate(query, req.body, {upsert:true}, function(err, friend){
        if (err) return res.send(500, { error: err });
        return res.status(200).send(friend);
    });
});

router.get('/:id', function(req, res){
    Friends.findById({_id : req.params.id}).then(function(friend) {
        res.status(200).json(friend);
    });
});

router.delete('/:id', function(req, res){
    Friends.findByIdAndDelete({_id : req.params.id}).then(function(friend) {
        res.status(200).json(friend);
    });
});

module.exports = router;