'use strict';

(function(){

class Home2Component {
  constructor($http,$scope,socket) {
    this.message = 'Hello';
    this.$http= $http;
   this.socket= socket;
    this.moviedetails=[];
    this.movies=[];
    this.moviestatus=false;
    this.theatres=[];
    this.moviename='';
    this.city='';
    this.language='';
    this.poster='';

  }

  StoreMovieName(movie,language,poster)
  {
      $(document).ready(function(){
      // $('.theatreName').click(function(){
      this.moviename=movie;
      this.language=language;
      this.poster=poster;
      console.log(this.moviename);
      console.log(this.language);
      console.log(this.poster);
  if (typeof(Storage) !== "undefined") {
  sessionStorage.setItem('moviename',this.moviename);
  sessionStorage.setItem('language',this.language);
    sessionStorage.setItem('poster',this.poster);
  }
  // });


});
}

  StoreCityName()
  {
    console.log(this.city);

   if (typeof(Storage) !== "undefined") {
   sessionStorage.setItem('cityname',this.city);
   }


   }




 $onInit(){
  this.$http.get('/api/mymoviesendpoints').then(response =>{
    // console.log(response.data[i].Status);
    var j=0;
for(var i=0;i<response.data.length;i++)
{
if(response.data[i].Status===true){
console.log(response.data[i].Status);
this.movies[j] =response.data[i];
console.log(response.data[i]);
j++;
// console.log(response.data[i].Status);
}
else{
console.log(response.data[i].Status);
}
}
this.moviedetails=this.movies;
  this.socket.syncUpdates('mymoviesendpoint',this.moviedetails);


  });

  this.$http.get('/api/theatreendpoints').then(response => {
     this.theatres =response.data;
});
}
}
angular.module('yoTemplateApp')
  .component('home2', {
    templateUrl: 'app/home2/home2.html',
    controller: Home2Component,
    controllerAs: 'home2Ctrl',
    authenticate:'user'
  });

})();
