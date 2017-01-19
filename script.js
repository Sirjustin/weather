$(document).ready(function(){
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {
$("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);

 var api ='http://api.openweathermap.org/data/2.5/weather?lat='+position.coords.latitude+'&lon='+position.coords.longitude +'&appid=8976cb1c546f89e8fbab98f7024fae8c';
console.log(api);

  $.getJSON(api, function(data){
    var weatherType = data.weather[0].description;
    var city = data.name;
    var kelvin = data.main.temp;
    var fahr= kelvin*9/5-459.67 + " F";
    var celsius = kelvin-273.15 + " C"
    var temperature=true;



    $("#city").html(city);
    $("#weatherType").html(weatherType);
    $("#temp").html(temp);
    $(".message").html(temp);
    console.log(city);


  if (kelvin<280){
$('body').css('background-image', 'url(images/wl.jpg)');
}
else{$('body').css('background-image', 'url(images/sl.jpg)');}







     $("#getMessage").click(function(){
if(temperature===true){
   $(".message").html(celsius);
   temperature=false;
}
else{ $(".message").html(fahr);
temperature=true;

}

  
});



    });





});








}
});


   
  
 
