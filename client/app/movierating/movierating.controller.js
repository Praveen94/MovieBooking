'use strict';

(function(){

class MovieratingComponent {
  constructor($http, $scope, socket,$window,Auth) {
    this.message = 'Hello';
    this.$http= $http;
   this.socket= socket;
    this.moviedetails=[];
    this.movies=[];
    this.movierating=[];
    this.title='';
    this.moviename='';
    this.Rating=0;
    this.averageRating=0;
      this.totalRating=0;
    this.getCurrentUser=Auth.getCurrentUser;
  }

  StoreMovieDetails(moviename)
  {

      this.moviename=moviename;
      console.log(this.moviename);

}

  SaveRating(){
  this.$http.post('/api/movieratingendpoints',{
  MovieName:this.moviename,
  Rating:this.Rating,
  UserName:this.getCurrentUser().name,
  Email:this.getCurrentUser().email

  });
this.moviename='';
this.Rating=0;

  }

GetMovieDetails(title)
{
var a=0;
this.averageRating=0;
this.totalRating=0;
this.title=title;
this.$http.get('/api/movieratingendpoints/search/'+this.title).then(response =>{
this.movierating=response.data;
console.log(this.movierating);
a=this.movierating.length;
for(var i=0;i<this.movierating.length;i++){
  this.totalRating+=this.movierating[i].Rating;
}
this.averageRating=this.totalRating/a;

});

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


  }
  }

angular.module('yoTemplateApp')
  .component('movierating', {
    templateUrl: 'app/movierating/movierating.html',
    controller: MovieratingComponent,
    controllerAs: 'movieratingCtrl',
    authenticate:'user'

  });

})();
