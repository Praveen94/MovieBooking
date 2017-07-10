'use strict';

import mongoose from 'mongoose';

var MymoviesendpointSchema = new mongoose.Schema({
  Poster:String,
  Title: String,
  Genre: String,
  Actors:String,
  Year:Number,
  Director:String,
  Language:String,
  Duration:String,
  Status:Boolean
});

export default mongoose.model('mymoviedata', MymoviesendpointSchema);
