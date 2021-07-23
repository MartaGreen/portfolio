var mongoose = require('mongoose');
var categoryName = new mongoose.Schema({
  name: { type: String },
  imgSrc: { type: String }
});

var categoryCard = new mongoose.Schema({
  category: { type: String },
  cardName: { type: String },
  translate: { type: String },
  imgSrc: { type: String },
  soundSrc: { type: String }
})

module.exports.categoryNameModel = mongoose.model("categryName", categoryName);
module.exports.categoryCardModel = mongoose.model("categoryCard", categoryCard);