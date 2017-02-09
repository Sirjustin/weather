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
    var fahr= kelvin*9/5-459.67;
    fahr=Math.floor(fahr)+"F";
    var celsius = Math.round(kelvin-273.15)+" C";
    var temperature=true;



    $("#city").html(city);
    $("#weatherType").html(weatherType);
    $("#temp").html(fahr);
    $(".message").html(temp);
$("#system").html("In Celsius");



  if (kelvin<280){
$('body').css('background-image', 'url(images/winter.jpg)');
$("#sweater").html("Leo says throw on a Sweater");
}
else{$('body').css('background-image', 'url(images/summer.jpg)');
$("#sweater").html("Leo says birthday suits are ok today");
}

  if (kelvin<280){
$('#weatherdog').prepend('<img id="winterleo" src="images/wl.jpg"width="200" height="200"/>');}

else{$('#weatherdog').prepend('<img id="summerleo" src="images/sl.jpg" width="200" height="200"/>');}






     $("#getMessage").click(function(){
if(temperature===true){
   $("#temp").html(celsius);
      $("#system").html("In Fahrenheit");
   temperature=false;
}
else{ $("#temp").html(fahr);
  $("#system").html("In Celsius");
   
temperature=true;

}

  
});



    });





});








}
});


   
  
 
