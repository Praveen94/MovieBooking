'use strict';

(function(){

class ManageTheatreComponent {
  constructor($http,$scope,socket,$window) {
    this.message = 'Hello';
    this.$http= $http;
   this.socket= socket;
   this.movie=[];
   this.movieTheatre=[];
   this.movieName='';
   this.theatreName='';
   this.cityName='';
   this.theatres=[];
   this.theatre= [];
   this.movietitle='';
     this.$window=$window;
     $scope.$on('$destroy', function() {
          socket.unsyncUpdates('moviemappingendpoint');
      });
      $scope.$on('$destroy', function() {
           socket.unsyncUpdates('theatreendpoint');
       });


     $(document).ready(function(){
     window.date=[];
     var datebuffer=[];
     var hours=0;
     var minutes=0;
     var day='';
     var time='';
     var removedate='';
     var removetime='';
     var removetheatre='';
     var showTimeBuffer=[];
     var theatre='';
     window.theatreLists=[];
     window.showTime=[];
     var theatreListsBuffer=[];
     var a=0;
     var b=0;
     var c=0;



     $('#addTheatre').on('click',function(){
     theatre=$('#theatreList option:selected').val();
     theatreLists.push(theatre);
     console.log(theatreLists);
     for(var j=0;j<theatreLists.length;j++)
      {
        theatreListsBuffer[j]=theatreLists[j];
      }
      var theatreselected=document.getElementById("theatreselected");
      theatreselected.innerHTML='';
      for (var i = 0; i <theatreLists.length; i++) {
        theatreselected.innerHTML+= '<p id="theatre'+i+'"><span class="glyphicon glyphicon-tag"></span><span id="theatrelist'+i+'"></span><span id="theatreclose'+i+'">&#10006;</span></p>';
     $('#theatrelist'+i).html(theatreListsBuffer.pop());
     $("#theatreclose0").on('click',function(){

       removetheatre=$('#theatrelist0').html()
     console.log(removetheatre);
     c = theatreLists.indexOf(removetheatre);
     theatreLists.splice(c,1);
     $('#theatre0').html("");
     console.log(theatreLists);
     });

     $("#theatreclose1").on('click',function(){

       removetheatre=$('#theatrelist1').html()
     console.log(removetheatre);
     c = theatreLists.indexOf(removetheatre);
     theatreLists.splice(c,1);
     $('#theatre1').html("");
     console.log(theatreLists);
     });

     $("#theatreclose2").on('click',function(){

       removetheatre=$('#theatrelist2').html()
     console.log(removetheatre);
     c = theatreLists.indexOf(removetheatre);
     theatreLists.splice(c,1);
     $('#theatre2').html("");
     console.log(theatreLists);
     });

     $("#theatreclose3").on('click',function(){

       removetheatre=$('#theatrelist3').html()
     console.log(removetheatre);
     c = theatreLists.indexOf(removetheatre);
     theatreLists.splice(c,1);
     $('#theatre3').html("");
     console.log(theatreLists);
     });

     $("#theatreclose4").on('click',function(){

       removetheatre=$('#theatrelist4').html()
     console.log(removetheatre);
     c = theatreLists.indexOf(removetheatre);
     theatreLists.splice(c,1);
     $('#theatre4').html("");
     console.log(theatreLists);
     });

     $("#theatreclose5").on('click',function(){

       removetheatre=$('#theatrelist5').html()
     console.log(removetheatre);
     c = theatreLists.indexOf(removetheatre);
     theatreLists.splice(c,1);
     $('#theatre5').html("");
     console.log(theatreLists);
     });

     $("#theatreclose6").on('click',function(){

       removetheatre=$('#theatrelist6').html()
     console.log(removetheatre);
     c = theatreLists.indexOf(removetheatre);
     theatreLists.splice(c,1);
     $('#theatre6').html("");
     console.log(theatreLists);
     });

     $("#theatreclose7").on('click',function(){

       removetheatre=$('#theatrelist7').html()
     console.log(removetheatre);
     c = theatreLists.indexOf(removetheatre);
     theatreLists.splice(c,1);
     $('#theatre7').html("");
     console.log(theatreLists);
     });
     }
     });





     $('#addTime').on('click',function(){
     var hours = $('#hourlist option:selected').val();
     var minutes=$('#minutelist option:selected').val();
     var day=$('#daylist option:selected').val();
     time=''+hours+':'+minutes+' '+day;

     showTime.push(time);
     console.log(showTime);
     for(var j=0;j<showTime.length;j++)
      {
        showTimeBuffer[j]=showTime[j];
      }
     var timeselected=document.getElementById("timeselected");
     timeselected.innerHTML='';
     for (var i = 0; i <showTime.length; i++) {
       timeselected.innerHTML += '<p id="time'+i+'"><span class="glyphicon glyphicon-time"></span><span id="timelist'+i+'"></span><span id="timeclose'+i+'">&#10006;</span></p>';

        $('#timelist'+i).html(showTimeBuffer.pop());
        $("#timeclose0").on('click',function(){

          removetime=$('#timelist0').html()
        console.log(removetime);
        b = showTime.indexOf(removetime);
        showTime.splice(a,1);
        $('#time0').html("");
     console.log(showTime);
        });
        $("#timeclose1").on('click',function(){

          removetime=$('#timelist1').html()
        console.log(removetime);
        b = showTime.indexOf(removetime);
        showTime.splice(a,1);
        $('#time1').html("");
     console.log(showTime);
        });

        $("#timeclose2").on('click',function(){

          removetime=$('#timelist2').html()
        console.log(removetime);
        b = showTime.indexOf(removetime);
        showTime.splice(a,1);
        $('#time2').html("");
     console.log(showTime);
        });

        $("#timeclose3").on('click',function(){

          removetime=$('#timelist3').html()
        console.log(removetime);
        b = showTime.indexOf(removetime);
        showTime.splice(a,1);
        $('#time3').html("");
     console.log(showTime);
        });

        $("#timeclose4").on('click',function(){

          removetime=$('#timelist4').html()
        console.log(removetime);
        b = showTime.indexOf(removetime);
        showTime.splice(a,1);
        $('#time4').html("");
     console.log(showTime);
        });

        $("#timeclose5").on('click',function(){

          removetime=$('#timelist5').html()
        console.log(removetime);
        b = showTime.indexOf(removetime);
        showTime.splice(a,1);
        $('#time5').html("");
     console.log(showTime);
        });

        $("#timeclose6").on('click',function(){

          removetime=$('#timelist6').html()
        console.log(removetime);
        b = showTime.indexOf(removetime);
        showTime.splice(a,1);
        $('#time6').html("");
     console.log(showTime);
        });
     }
     });

     $("[id^=time]").mouseover(function(){
     $("[id^=time]").css("color","red");
     });

     $("[id^=time]").mouseout(function(){
     $("[id^=time]").css("color","deepskyblue");
     });







     $('#dateAdd').on('click',function(){
     date.push($('#moviedate').val());

     console.log(date);
     for(var j=0;j<date.length;j++)
      {
        datebuffer[j]=date[j];
      }


     var dateselected=document.getElementById("dateselected");
     dateselected.innerHTML='';
     for (var i = 0; i <date.length; i++) {
        dateselected.innerHTML += '<p id="calendar'+i+'"><span class="glyphicon glyphicon-calendar"></span><span id="moviedatelist'+i+'"></span><span id="close'+i+'">&#10006;</span></p>';

        $('#moviedatelist'+i).html(datebuffer.pop());
        $("#close0").on('click',function(){

          removedate=$('#moviedatelist0').html()
        console.log(removedate);
        a = date.indexOf(removedate);
        date.splice(a,1);
        $('#calendar0').html("");
     console.log(date);
        });
        $("#close1").on('click',function(){

        removedate=$('#moviedatelist1').html();
         console.log(removedate);
         a = date.indexOf(removedate);
         date.splice(a,1);
         $('#calendar1').html("");
     console.log(date);
        });
        $("#close2").on('click',function(){

        removedate=$('#moviedatelist2').html();
         console.log(removedate);
         a = date.indexOf(removedate);
         date.splice(a,1);
     $('#calendar2').html("");
     console.log(date);
        });
        $("#close3").on('click',function(){

        removedate=$('#moviedatelist3').html();
      console.log(removedate);
      a = date.indexOf(removedate);
      date.splice(a,1);
     $('#calendar3').html("");
     console.log(date);
        });
        $("#close4").on('click',function(){

        removedate=$('#moviedatelist4').html();
      console.log(removedate);
      a = date.indexOf(removedate);
      date.splice(a,1);
     $('#calendar4').html("");
     console.log(date);
        });
        $("#close5").on('click',function(){

       removedate=$('#moviedatelist5').html();
      console.log(removedate);
      a = date.indexOf(removedate);
      date.splice(a,1);
     $('#calendar5').html("");
     console.log(date);
        });
        $("#close6").on('click',function(){

        removedate=$('#moviedatelist6').html();
      console.log(removedate);
      a = date.indexOf(removedate);
      date.splice(a,1);
     $('#calendar6').html("");
     console.log(date);
        });
        $("#close7").on('click',function(){

        removedate=$('#moviedatelist7').html();
      console.log(removedate);
      a = date.indexOf(removedate);
      date.splice(a,1);
     $('#calendar7').html("");
     console.log(date);
        });


     }
     });




     $("#moviedate").datepicker({
       showAnim: "fadeIn",

     numberOfMonths: 2,
       dateFormat: "dd MM yy",
       minDate: +0,
       maxDate: "+12M +10D",
     });


     $('#moviename').change(function(){

       for(var n=theatreLists.length;n>=0;n--){
       console.log('\nn='+n);
       console.log('\nTheatre Popped:'+theatreLists.pop());
       }

       for(var n=showTime.length;n>=0;n--){
       console.log('\nn='+n);
       console.log('\nshowTime Popped:'+showTime.pop());
       }

       for(var n=date.length;n>=0;n--){
       console.log('\nn='+n);
       console.log('\ndate Popped:'+date.pop());
       }




     });
     });





   $scope.$on('$destroy', function() {
     socket.unsyncUpdates('theatreendpoint');
   });
 };

 SaveMapping()
 {
   this.$http.post(' /api/moviemappingendpoints',{
     MovieName:this.MovieName,
     City:this.cityName,
     Theatres:this.$window.theatreLists,
     ShowTime:this.$window.showTime,
     ShowDate:this.$window.date

   });
   this.movietitle=this.MovieName;
this.MovieName='';
 this.cityName='';
document.getElementById('dateselected').innerHTML='';
document.getElementById('theatreselected').innerHTML='';
document.getElementById('timeselected').innerHTML='';
document.getElementById('theatreList').value='';
// window.theatreLists=[];
// window.showTime=[];
// window.date=[];

this.$http.put('/api/mymoviesendpoints/update/'+this.movietitle,{
      Status:true
});
 }

 RemoveTheatre(a){
   console.log('hello');
  // this.$http.get('/api/mymoviesendpoints').then(response => {
  //    this.movie =response.data;

this.$http.put('/api/moviemappingendpoints/searchTheatre/'+a.City+'/'+a.TheatreName,{

  });
this.$http.delete('/api/theatreendpoints/'+a._id);
this.socket.syncUpdates('theatreendpoint',this.theatre);
this.socket.syncUpdates('moviemappingendpoint',this.theatre);
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

   GetTheatre(){
     this.$http.get('/api/moviemappingendpoints/showTheatre/'+this.movieName).then(response =>{

     this.movieTheatre = response.data;
     console.log(this.movieTheatre);
      console.log(this.movieTheatre[1].Theatres.length);
     this.socket.syncUpdates('moviemappingendpoint',this.movieTheatre);


     });


   }

  RemoveMovie(theatre,city)
   {
     this.theatreName=theatre;
     this.cityName=city;

     this.$http.put('/api/moviemappingendpoints/searchTheatre/'+this.cityName+'/'+this.theatreName,{

       });
       this.socket.syncUpdates('moviemappingendpoint',this.theatreName);
   }

   $onInit(){
   this.$http.get('/api/theatreendpoints').then(response =>{

   this.theatre = response.data;
   this.socket.syncUpdates('theatreendpoint',this.theatre);


 });



   this.$http.get('/api/mymoviesendpoints').then(response => {
      this.movie =response.data;
});
      this.$http.get('/api/theatreendpoints').then(response => {
         this.theatres =response.data;
// this.socket.syncUpdates('moviemappingendpoint', this.movielist);
});

  }
}

angular.module('yoTemplateApp')
  .component('manageTheatre', {
    templateUrl: 'app/manageTheatre/manageTheatre.html',
    controller: ManageTheatreComponent,
    controllerAs: 'manageTheatreCtrl',
    authenticate:'admin'
  });

})();
