var db = require('../database.js');
var mongojs = require('mongojs');

exports.books = {};

exports.books.all =  function(req,res){
	db.books.find(function(err,books){
		if (err) return;
		res.json(books);
	});
};


exports.books.one = function(req,res){
	var bookId = db.ObjectId(req.params.id);
	console.log(bookId);
	db.books.findOne({ _id: bookId}, function(err,book){
		if (err) return;
		res.json(book);
	});
};