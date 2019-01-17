'use strict';

import mongoose from 'mongoose';
const Schema=mongoose.Schema;

const myDB = 'mongodb://localhost/NekosDB';
mongoose.connect(NekosDB);

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  book: {
    type: String,
    required: true,
    unique: true,
    default:Date.now,
  }
  keywords: Array,
  published: Boolean,
  author{
    type: Schema.ObjectId,
    ref: 'User'
  }
  detail: {
    ModelNumber: Number,
    hardcover: Boolean,
    reviews:Number,
    rank: Number
  }
});
module.exports = mongoose.model('Book', BookSchema);
