
//$.getJSON("productos.json",function(producto){

$.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Caracas%2C%20VE%22)&format=json&diagnostics=true&callback=",function(producto){

console.log(producto);

var frase=producto.query.results.channel.description;
var humedad=producto.query.results.channel.atmosphere.humidity;
document.write(frase+"<br>")
document.write("Humedad: "+humedad )

})