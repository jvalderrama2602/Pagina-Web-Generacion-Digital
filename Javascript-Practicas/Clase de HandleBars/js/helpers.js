Handlebars.registerHelper('salarioTotal', function(object) 
{
	var respuesta = 'TOTAL: '+(object.salario+object.extras);
	return new Handlebars.SafeString( respuesta );
});

Handlebars.registerHelper('salarioMaximo', function(salarios)
{
	var i;
	var max = 0;
	for (i=0; i<salarios.length; i++)
	{
		if (salarios[i]>max) { max = salarios[i]; }
	}

	return max.toFixed(2);
});

Handlebars.registerHelper('salarioMinimo', function(salarios)
{
	var i;
	var min = 0;

	for (i=0; i<salarios.length; i++)
	{
		if (i==0) { min = salarios[i]; }
		else if (salarios[i]<min) { min = salarios[i]; }
	}

	return min.toFixed(2);
});

Handlebars.registerHelper('salarioPromedio', function(salarios)
{
	var i;
	var total = 0;
	var periodos = salarios.length;

	for (i=0; i<periodos; i++)
	{
		total += salarios[i];
	}

	return (total/periodos).toFixed(2);
});