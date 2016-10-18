Handlebars.registerHelper('negrita', function(opciones){
	return '<strong>'+opciones.fn(this)+'</strong>';
});

Handlebars.registerHelper('historico', function(contexto, opciones)
{
	var i;
	var max;
	var respuesta = '';

	max = contexto.length;
	respuesta = '<dl class="dl-horizontal">';
	for (i=0; i<max; i++)
	{
		respuesta += opciones.fn(contexto[i]);
	}
	respuesta += '</dl>';

	return respuesta;
});
