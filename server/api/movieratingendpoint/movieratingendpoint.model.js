'use strict';

import mongoose from 'mongoose';

var MovieratingendpointSchema = new mongoose.Schema({
  MovieName: String,
  Rating:Number,
  UserName:String,
  Email:String

});

export default mongoose.model('Movieratingendpoint', MovieratingendpointSchema);
