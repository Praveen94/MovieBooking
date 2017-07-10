'use strict';

(function(){

class TheatreTimeComponent {
  constructor($http,$scope,socket,$window) {
    this.message = 'Hello';
    this.$http= $http;
   this.socket= socket;
   this.theatre=[];
    this.$window=$window;
this.theatreName='';
this.date='';
this.time='';
};

StoreTheatre(theatre,time)
{
    $(document).ready(function(){
    // $('.theatreName').click(function(){
    this.theatreName=theatre;
    this.time=time;
    console.log(this.theatreName);
    console.log(this.time);
if (typeof(Storage) !== "undefined") {
sessionStorage.setItem('theatreName',this.theatreName);
sessionStorage.setItem('time',this.time);
}
// });
});

}

StoreDate(date)
{
    $(document).ready(function(){
    // $('.theatreName').click(function(){
    this.date=date;
    console.log(this.date);

if (typeof(Storage) !== "undefined") {
sessionStorage.setItem('date',this.date);
}
// });
});

}





  $onInit(){
    if (typeof(Storage) !== "undefined") {

    var x=sessionStorage.getItem('moviename');
    console.log(x);
    var y=sessionStorage.getItem('cityname');
    console.log(y);
}

  this.$http.get(' /api/moviemappingendpoints/show/'+y+'/'+x).then(response =>{

  this.theatre = response.data;
  console.log(response.data);

});
}
}

angular.module('yoTemplateApp')
  .component('theatreTime', {
    templateUrl: 'app/theatreTime/theatreTime.html',
    controller: TheatreTimeComponent,
    controllerAs: 'theatreTimeCtrl',
    authenticate:'user'
  });

})();
