'use strict';

import mongoose from 'mongoose';

var TheatreendpointSchema = new mongoose.Schema({
  TheatreName: String,
    PlaceName: String,
    City: String
  });

  export default mongoose.model('Theatre', TheatreendpointSchema);
