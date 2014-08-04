'use strict';

var Item = require('../models/item');

exports.init = function(req, res){
  res.render('items/init');
};

exports.create = function(req, res){
  var item = new Item(req.body);
  item.save(function(){
    res.redirect('/');
  });
};

exports.index = function(req, res){
  Item.all(function(items){
    res.render('items/index', {items:items});
  });
};
