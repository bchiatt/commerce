'use strict';

var Item = require('../models/item');

exports.init = function(req, res){
  res.render('items/init');
};

exports.index = function(req, res){
  Item.all(function(items){
    res.render('items/index', {items:items});
  });
};

exports.create = function(req, res){
  var item = new Item(req.body);
  item.save(function(){
    res.redirect('/items/');
  });
};

exports.show = function(req, res){
  Item.findByID(req.params.id, function(item){
    res.render('items/show', {item:item});
  });
};

exports.destroy = function(req, res){
  Item.deleteByID(req.params.id, function(){
    res.redirect('/items/');
  });
};

