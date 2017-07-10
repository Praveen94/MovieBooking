'use strict';

(function(){

class PaymentsuccessComponent {
  constructor($http,$window) {
    this.message = 'Hello';
      this.$http=$http;
    this.movie=[];
    this.poster='';
    this.moviename='';
    this.city='';
    this.location=[];
    this.theatreName='';
    this.time='';
    this.date='';
    this.tickets=0;
    this.class='';
    this.seats=[];
    this.total=0;
    this.bookingdate='';
    }



  $onInit(){
    if (typeof(Storage) !== "undefined") {

  this.poster=sessionStorage.getItem('poster');
  console.log(this.poster);
  this.moviename=sessionStorage.getItem('moviename');
  console.log(this.poster);
  this.city=sessionStorage.getItem('cityname');
  console.log(this.poster);
  this.theatreName=sessionStorage.getItem('theatreName');
  console.log(this.poster);
  this.time=sessionStorage.getItem('time');
  console.log(this.poster);
  this.date=sessionStorage.getItem('date');
  console.log(this.poster);
  this.tickets=sessionStorage.getItem('seats');
  console.log(this.poster);
  this.class=angular.uppercase(sessionStorage.getItem('class'));
  console.log(this.poster);
  this.seats=sessionStorage.getItem('seatid');
  console.log(this.poster);
  this.total=sessionStorage.getItem('total');
  console.log(this.poster);
  this.bookingdate=new Date();


}
this.$http.get('/api/theatreendpoints/getlocation/'+this.city+'/'+this.theatreName).then(response => {
   this.movie =response.data;
   console.log(this.movie);

});


}
generatePDF()
{

  kendo.drawing.drawDOM($("#exportthis")).then(function(group) {
    kendo.drawing.pdf.saveAs(group, "tickets.pdf");

});

}







}

angular.module('yoTemplateApp')
  .component('paymentsuccess', {
    templateUrl: 'app/paymentsuccess/paymentsuccess.html',
    controller: PaymentsuccessComponent,
    controllerAs: 'paymentsuccessCtrl',
    authenticate:'user'
  });

})();
