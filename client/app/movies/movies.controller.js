'use strict';

(function(){

class MoviesComponent {
  constructor($http, $scope, socket) {
    this.message = 'Hello';
    this.$http = $http;
     this.moviesData = [];

     this.socket = socket;
     $scope.$on('$destroy', function() {
       socket.unsyncUpdates('moviesendpoint');
     });
   }

   AddMovies() {
     this.$http.post('/api/moviesendpoints', {
       Name: this.Name,
       Year: this.Year,
       Genre: this.Genre
     });
     this.Name = '';
     this.Year = '';
     this.Genre = '';
   }

   $onInit() {
     this.$http.get('/api/moviesendpoints').then(response => {
       this.moviesData = response.data;
       this.socket.syncUpdates('moviesendpoint', this.moviesData);
     });
}
}

angular.module('yoTemplateApp')
  .component('movies', {
    templateUrl: 'app/movies/movies.html',
    controller: MoviesComponent,
    controllerAs: 'moviesCtrl'
  });

})();
