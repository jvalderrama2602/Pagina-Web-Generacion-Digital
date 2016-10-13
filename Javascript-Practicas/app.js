$.getJSON("productos.json",function(producto){


var totalProductos=producto.length;

for (var i=0;i<totalProductos;i++){

console.log(producto[i].nombre);

}

})