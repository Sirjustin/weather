$(document).ready(function(){
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {
$("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);

 var api ='http://api.openweathermap.org/data/2.5/weather?lat='+position.coords.latitude+'&lon='+position.coords.longitude +'&appid=8976cb1c546f89e8fbab98f7024fae8c';
console.log(api);

  $.getJSON(api, function(data){
    var weatherType = data.weather[0].description;
    var city = data.name;
    var temp = data.main.temp;
    var fahr= temp*9/5-459.67 + " F";
var celsius = temp-273.15 + " C"


    $("#city").html(city);
    $("#weatherType").html(weatherType);
    $("#temp").html(temp);
    $(".message").html(fahr);
 

     $("#getMessage").click(function(){
      
      $(".message").html(fahr);
});
    });





});








}
});


   
  
 
