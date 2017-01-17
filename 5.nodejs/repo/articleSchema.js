var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  author:  String,
  title: String,
  description:   String,
  url: String,
  imageUrl: String,
  datePublished: { type: Date, default: Date.now }
});

export {articleSchema};