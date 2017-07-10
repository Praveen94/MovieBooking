'use strict';

(function(){

class TheatreComponent {
  constructor($http,$scope,socket) {
    this.message = 'Hello';
    this.$http= $http;
   this.socket= socket;
   this.theatre= [];

   $scope.$on('$destroy', function() {
     socket.unsyncUpdates('theatreendpoint');
   });
 }

     AddTheatre(){
     this.$http.post('/api/theatreendpoints',{
       TheatreName: this.TheatreName,
       PlaceName: this.PlaceName,
       City: this.City
     });
     this.TheatreName = '';
     this.PlaceName = '';
     this.City = '';

   }

   $onInit(){
   this.$http.get('/api/theatreendpoints').then(response =>{

   this.theatre = response.data;
   this.socket.syncUpdates('theatreendpoint',this.theatre);


   });


  }
}

angular.module('yoTemplateApp')
  .component('theatre', {
    templateUrl: 'app/theatre/theatre.html',
    controller: TheatreComponent,
    controllerAs: 'theatreCtrl',
    
    });

})();
