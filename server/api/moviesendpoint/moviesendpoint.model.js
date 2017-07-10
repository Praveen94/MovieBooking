'use strict';

import mongoose from 'mongoose';

var MoviesendpointSchema = new mongoose.Schema({
  Name: String,
  Year: Number,
  Genre: String
});

export default mongoose.model('Movies', MoviesendpointSchema);
