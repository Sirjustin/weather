$(document).ready(function(){
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {
$("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);

});
}

 $("#getMessage").on("click", function(){
      
      $(".message").html("The Weather Is");
});

 

});


   
  
 
