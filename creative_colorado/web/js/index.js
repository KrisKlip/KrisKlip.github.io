$( document ).ready(function() {
    console.log( "ready!" );

$("#getting-started")
   .countdown("2016/01/01", function(event) {
     $(this).text(
       event.strftime('%D days %H:%M:%S')
     );
   });















});