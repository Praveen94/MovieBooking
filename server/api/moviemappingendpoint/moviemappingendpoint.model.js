'use strict';

import mongoose from 'mongoose';

var MoviemappingendpointSchema = new mongoose.Schema({
  MovieName:String,
  City:String,
  Theatres:Array,
  ShowTime:Array,
  ShowDate:Array,
  Status:Boolean
});

export default mongoose.model('Moviemapping', MoviemappingendpointSchema);
