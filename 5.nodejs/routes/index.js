var express = require('express');
var router = express.Router();
var srv = require('../domain/articlesService')
var mongoose = require('mongoose');
var articleSchema = require('../repo/articleSchema')


/* GET home page. */
router.get('/', function(req, res, next) {
  //get data
  //generate markup
  //  
  res.render('index', { title: 'Express' });
});

router.get('/getNews', function(req, res, next){
  srv.getAll(function(content){
    res.render(content);//as markuos todo
  });
  res.end();
});

router.post('/newArticle', function(req, res, next){
  srv.createArticle(req.body)
  res.end();
});

module.exports = router;
