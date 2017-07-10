'use strict';

import mongoose from 'mongoose';

var PaymentendpointSchema = new mongoose.Schema({
  MovieName: String,
  TheatreName: String,
  CityName:String,
  SeatClass:String,
  Tickets:Number,
  MovieDate:String,
  ShowTime:String,
  Seats:Array,
  Language:String,
  ContactNumber:String,
  AmountPaid:Number,
  Email:String,
  CreditCard:String,
  BookingDateTime:Date
});

export default mongoose.model('Payment', PaymentendpointSchema);
