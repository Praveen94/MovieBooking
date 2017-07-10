'use strict';

(function(){

class PaymentComponent {
  constructor($http, $scope, socket) {
    this.message = 'Hello';
    this.theatreName='';
    this.moviename='';
    this.Seats='';
    this.cityName='';
    this.seatclass=''
    this.tickets=0;
    this.movieDate='';
    this.showTime='';
    this.language='';
    this.seating=[];
    this.internet=0;
    this.subtotal=0;
    this.total=0;
    this.contactNumber='';
    this.amountPaid=0;
    this.email='';

    this.creditCard='';

this.$http = $http;
 this.socket = socket;

  }


  MakePayment() {
    console.log('hello');
    this.$http.post('/api/paymentendpoints', {
      MovieName:this.moviename,
      TheatreName:this.theatreName,
      CityName:this.cityName,
      SeatClass:this.seatclass,
      Tickets:this.tickets,
      MovieDate:this.movieDate,
      ShowTime:this.showTime,
      Seats:this.seating,
      Language:this.language,
      ContactNumber:this.contactNumber,
      AmountPaid:this.total,
      Email:this.email,
      CreditCard:this.creditCard,
      BookingDateTime:new Date()
    });

  }

$onInit(){
if (typeof(Storage) !== "undefined") {

this.theatreName=sessionStorage.getItem('theatreName');
console.log(this.theatreName);

this.moviename=sessionStorage.getItem('moviename');
console.log(this.moviename);


this.Seats=sessionStorage.getItem('seatid');
this.seating=this.Seats.split(",");
console.log(this.seating.length);


this.cityName=sessionStorage.getItem('cityname');
console.log(this.cityName);

this.seatclass=angular.uppercase(sessionStorage.getItem('class'));
console.log(this.seatclass);

this.tickets=sessionStorage.getItem('seats');
console.log(this.tickets);

this.movieDate=sessionStorage.getItem('date');
console.log(this.movieDate);

this.showTime=sessionStorage.getItem('time');
console.log(this.showTime);

this.language=sessionStorage.getItem('language');
console.log(this.language);

this.subtotal=sessionStorage.getItem('cost');
console.log(this.subtotal);

this.internet=sessionStorage.getItem('internet');
console.log(this.internet);

this.total=sessionStorage.getItem('total');
console.log(this.total);

}
}

}

angular.module('yoTemplateApp')
  .component('payment', {
    templateUrl: 'app/payment/payment.html',
    controller: PaymentComponent,
    controllerAs: 'paymentCtrl',
    authenticate:'user'
  });

})();
