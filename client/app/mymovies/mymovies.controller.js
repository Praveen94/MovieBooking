'use strict';

(function(){

class MymoviesComponent {
  constructor($scope,$http,socket) {
    this.message = 'Hello';
    this.$http = $http;
  this.mymoviesData=[];
  this.addedmovies=[];
  this.mymovieName='';
  this.mymovieYear='';
this.mymovieResponse=false;
   this.socket = socket;
    $scope.$on('$destroy', function() {
         socket.unsyncUpdates('mymoviesendpoint');
     });

$(document).ready(function(){
$('#searchmovie').click(function(){
// var movietitle='';
//
// movietitle=$('#title').val();
// console.log('movietitle: '+movietitle);
//
// if(movietitle!=''){
  $('#addmovie').prop('disabled', false);
//}
});
$('#cancelmovie').click(function(){
  $('#addmovie').prop('disabled', true);
});
////////////////////////

// $(':input[type="submit"]').prop('disabled', true);
//      $('input[type="text"]').keyup(function() {
//         if($(this).val() != '') {
//            $(':input[type="submit"]').prop('disabled', false);
//         }
//      });
//  });


////////////////////////////

});
}


SearchMovies() {
      console.log('Hello');
      this.$http.get('http://www.omdbapi.com/?t=' + this.mymovieName+'&y='+this.mymovieYear).then(response => {

        this.mymoviesData = response.data;
        console.log(response.data.Response);
        this.mymovieName='';
        this.mymovieYear='';
this.mymovieResponse=response.data.Response;
      });
    }
CancelMovie(){
  this.mymoviesData='';
}

RemoveMovie(movie){
  this.$http.delete('/api/mymoviesendpoints/'+movie._id);
}

AddMovies(t){
  if(this.mymovieResponse=='True')
  {

  this.$http.post('/api/mymoviesendpoints',{
    Poster:t.Poster,
    Title:t.Title,
    Genre:t.Genre,
    Actors:t.Actors,
    Year:t.Year,
    Language:t.Language,
    Director:t.Director,
    Duration:t.Runtime,
    Status:false
  });

this.mymoviesData='';
}
}
$onInit(){
  this.$http.get('/api/mymoviesendpoints').then(response=>{
    this.addedmovies=response.data;
this.socket.syncUpdates('mymoviesendpoint', this.addedmovies);
  });
}



}

angular.module('yoTemplateApp')
  .component('mymovies', {
    templateUrl: 'app/mymovies/mymovies.html',
    controller: MymoviesComponent,
    controllerAs: 'mymoviesCtrl',
   authenticate:'admin'
  });

})();
