var express = require('express');
var router = express.Router();

var passport = require('passport'); 

router.get('/', function(req, res, next) {
  res.render('index', { user : req.user});  
});


router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local', 
    {successRedirect: '/',
    failureRedirect: '/login',
    session: true})); // 編集

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

module.exports = router;