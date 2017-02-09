$(document).ready(function(){
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    $("#data").html("latitude: " +position.coords.latitude + "longitude: " +position.coords.longitude);
  });
}
}
  
  
  var api ="http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=8976cb1c546f89e8fbab98f7024fae8c";
  
  $.getJSON(api, function(data){
    var weatherType=data.weather[0].description;
    var city =data.name;
    
    console.log(city);
    alert(data.coord.lat)
  });
  
 
});