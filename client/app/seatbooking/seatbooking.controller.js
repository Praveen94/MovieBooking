'use strict';

(function(){

class SeatbookingComponent {
  constructor($http, $scope, socket,$window) {
    this.message = 'Hello';
    this.$http = $http;
     this.socket = socket;
     this.$window=$window;
     window.seat=[];
     this.seating=[];
$(document).ready(function(){
var j,i=0;
var y,x=0;
var sclass='';//seat class from option
var ssclass='';//seat class of element
var gcost=0;
// var scost=0;
var internetfees=0;
var total=0;
var seats=0;
var seatid=[];
$('.silver').click(function(){
seats= $('#seatsnum option:selected').val();
sclass= $('#seatclass option:selected').val();
ssclass=$(this).attr('class');

// sclass=$(this).attr('class');
console.log(sclass);
var id=$(this).attr('id');
var $c=$(this).css("background-color");
if($c === 'rgb(0, 186, 40)' && sclass==ssclass ) //green
{

i--;
j--;
var index=seatid.indexOf(id);
seatid.splice(index,1);
$('#seatsid').html(seatid);
gcost-=50;
internetfees-=10;
total=gcost+internetfees;
$('#seatsnos').html(j);
$('#seatscost').html(gcost);
$('#internet').html(internetfees);
$('#totalamount').html(total);
$('#'+id).css('background-color','rgb(137, 140, 138)'); //grey
  console.log('\nSeats:'+j);
console.log(gcost);
console.log(internetfees);
console.log(i);
}
// if($c=== 'rgb(137, 140, 138)' && ssclass==sclass && myFuntion(id))//grey
if($c=== 'rgb(137, 140, 138)' && ssclass==sclass)//grey

{

  if(i<seats)
  {
    j=i+1;
    seatid.push(id);
    console.log(seatid);
    $('#seatsclass').html(ssclass);
    $('#seatsid').html(seatid);
    $('#seatsnos').html(j);
    gcost+=50;
    internetfees+=10;
    total=gcost+internetfees;
    $('#seatscost').html(gcost);
    $('#internet').html(internetfees);
    $('#totalamount').html(total);
    $('#'+id).css('background-color','rgb(0, 186, 40)');//green
    console.log('\nSeats:'+j);
    console.log(gcost);
    console.log(internetfees);
i++;
  }
console.log(i);
}

});
$('.gold').click(function(){
seats= $('#seatsnum option:selected').val();
sclass= $('#seatclass option:selected').val();
ssclass=$(this).attr('class');

// sclass=$(this).attr('class');
// console.log(sclass);
var id=$(this).attr('id');
var $c=$(this).css("background-color");
if($c === 'rgb(0, 186, 40)' && ssclass==sclass) //green
{

x--;
y--;
var index=seatid.indexOf(id);
seatid.splice(index,1);
$('#seatsid').html(seatid);
gcost-=200;
internetfees-=10;
total=gcost+internetfees;
$('#seatsnos').html(y);
$('#seatscost').html(gcost);
$('#internet').html(internetfees);
$('#totalamount').html(total);
$('#'+id).css('background-color','rgb(137, 140, 138)'); //grey
  console.log('\nSeats:'+y);
console.log(gcost);
console.log(internetfees);
console.log(x);
}
// if($c=== 'rgb(137, 140, 138)' && ssclass==sclass && myFuntion(id))//grey
if($c=== 'rgb(137, 140, 138)' && ssclass==sclass)
{

  if(x<seats)
  {

    y=x+1;
    seatid.push(id);
    console.log(seatid);
    $('#seatsclass').html(ssclass);
    $('#seatsid').html(seatid);
    $('#seatsnos').html(y);
    gcost+=200;
    internetfees+=10;
    total=gcost+internetfees;
    $('#seatscost').html(gcost);
    $('#internet').html(internetfees);
    $('#totalamount').html(total);
    $('#'+id).css('background-color','rgb(0, 186, 40)');//green
    console.log('\nSeats:'+y);
    console.log(gcost);
    console.log(internetfees);
x++;
  }
console.log(x);
}

});



$('#seatclass').change(function(){
  for(var n=0;n<seatid.length;n++){

    $('#'+seatid[n]).css('background-color','rgb(137, 140, 138)');
  }

for(var n=seatid.length;n>=0;n--){
console.log('\nn='+n);
console.log('\nSeat Popped:'+seatid.pop());
}
j=i=x=y=gcost=internetfees=total=seats=0;
$('#seatsclass').html('');
$('#seatsid').html('');
$('#seatsnos').html('');
$('#seatscost').html('');
$('#internet').html('');
$('#totalamount').html('');
});

$('#PaymentButton').click(function(){
seats= $('#seatsnum option:selected').val();
if(j!=seats&&y!=seats){
  console.log('\nj='+j+'\ny='+y);
  console.log('seats:'+seats);
  alert('Please select the right amount of seats');
return false;
}
else{
  console.log('Success');

  if (typeof(Storage) !== "undefined") {
  sessionStorage.setItem('seats',seats);
  sessionStorage.setItem('class',sclass);
  sessionStorage.setItem('seatid',seatid);
  sessionStorage.setItem('cost',gcost);
  sessionStorage.setItem('internet',internetfees);
  sessionStorage.setItem('total',total);
  }

return true;
}
});


// StoreTheatre(theatre,time)
// {
//     $(document).ready(function(){
//     // $('.theatreName').click(function(){
//     this.theatreName=theatre;
//     this.time=time;
//     console.log(this.theatreName);
//     console.log(this.time);
// if (typeof(Storage) !== "undefined") {
// sessionStorage.setItem('theatreName',this.theatreName);
// }
// // });
// });

// function myFuntion(x){
// console.log('function called');
// // var seats=["A1","B2","C2","B4","C4","D4"];
// var index=seats.indexOf(x);
// if(index>=0){
// return false;
// }
// else {
//   return true;
// }
// }

});
}


  $onInit(){
    if (typeof(Storage) !== "undefined") {

    var moviename=sessionStorage.getItem('moviename');
    // console.log(a);
    var cityname=sessionStorage.getItem('cityname');
    // console.log(b);

    var theatreName=sessionStorage.getItem('theatreName');
    var time=sessionStorage.getItem('time');

    var date=sessionStorage.getItem('date');
    console.log(moviename);
    console.log(cityname);
    console.log(theatreName);
    console.log(time);
    console.log(date);
}

  this.$http.get('/api/paymentendpoints/seats/'+cityname+'/'+moviename+'/'+time+'/'+date+'/'+theatreName).then(response =>{

  this.seating = response.data;

for(var i=0;i<this.seating.length;i++)
 {
 for(var j=0;j<this.seating[i].Seats.length;j++)
{
   this.$window.seat=this.$window.seat.concat(this.seating[i].Seats[j]);

}
}
console.log(this.$window.seat);

for(var i=0;i<this.$window.seat.length;i++)
{
$('#'+this.$window.seat[i]).css('background-color','red');
}




});
}



}

angular.module('yoTemplateApp')
  .component('seatbooking', {
    templateUrl: 'app/seatbooking/seatbooking.html',
    controller: SeatbookingComponent,
    controllerAs: 'seatbookingCtrl',
    authenticate:'user'
    });

})();
