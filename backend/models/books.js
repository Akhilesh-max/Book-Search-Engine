//Filename: Posts.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = new Schema({
 title: {
  type: String
 },
 country: {
  type: String,
 },
 year: {
  type: Number,
 },
 author: {
  type: String,
 },
 laguage: {
  type: String,
 },
 pages:{
    type: Number
 },
imageLink: {
    type: String
},
link:{
    type: String
}
});
module.exports = mongoose.model('Book', bookSchema) //Book