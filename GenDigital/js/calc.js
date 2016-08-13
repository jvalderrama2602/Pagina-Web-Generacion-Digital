 (function(){

                                        var calculo =function(){
                                            var curr=document.getElementById("dato1").value;
                                            var venta = document.getElementById("dato2").value;
                                            var trans = document.getElementById("dato3").value;
                                            var indus=document.getElementById("industry").value;
                                            if(venta=="" || trans==""){
                                                var msge=document.getElementById("MensajeError");
                                                    msge.setAttribute("class","t2_style editContent");
                                                    msge.setAttribute("style","color:#dd2c00");
                                                    msge.innerHTML= "Debe llenar los datos solicitados";  
                                            }else{
                                                if(venta<10000){
                                                    var msge=document.getElementById("MensajeError");
                                                    msge.setAttribute("class","t2_style editContent");
                                                    msge.setAttribute("style","color:#dd2c00");
                                                    msge.innerHTML= "Mensaje menos $10.000.";  
                                                }else{

                                                    if(venta>=10000 && venta<=20000){
                                                        var porc=0.12;
                                                        var cxt=0.12;
                                                        var mem=39;  
                                                    }
                                                    if(venta>=20001 && venta<=40000){
                                                        var porc=0.10;
                                                        var cxt=0.10;
                                                        var mem=59;  
                                                    }
                                                    if(venta>=40001){
                                                        var porc=0.07;
                                                        var cxt=0.07;
                                                        var mem=79; 
                                                    }

                                                    var valor1=venta*porc/100;
                                                    var valor2=trans*cxt;
                                                    var valor3=mem;    
                                                    var margin=valor1+valor2+valor3;


                                                    var promedio= venta/trans;
                                                    var valorp=document.getElementById("PromedioT");
                                                    valorp.innerHTML='$'+ promedio.toFixed(2);                                                   
                                                    switch (indus) {
                                                          case "Restaurant":
                                                            var valorI=document.getElementById("PorcentajeI");
                                                            valorI.innerHTML= "1.60%";
                                                            valor4=venta*1.6/100;
                                                            break;
                                                          case "Retail":
                                                            var valorI=document.getElementById("PorcentajeI");
                                                            valorI.innerHTML= "1.70%";
                                                            valor4=venta*1.7/100;
                                                            break;
                                                          case "Ecommerce":
                                                            var valorI=document.getElementById("PorcentajeI");
                                                            valorI.innerHTML= "1.90%";
                                                            valor4=venta*1.9/100;
                                                            break;
                                                          case "Card not present(MOTO)":
                                                            var valorI=document.getElementById("PorcentajeI");
                                                            valorI.innerHTML= "1.90%";
                                                            valor4=venta*1.9/100;
                                                            break;
                                                          
                                                          default:
                                                           var valorI=document.getElementById("PorcentajeI");
                                                            valorI.innerHTML= "1.60%";
                                                        }

                                                        var TrueCost=margin+valor4;
                                                        var Mensual =curr-TrueCost;
                                                        var Anual= Mensual*12;
                                                        var MAnual=Anual*4;
                                                        if(Mensual>0){
                                                        var current=document.getElementById("Actual");
                                                            current.innerHTML= ('$'+ parseFloat(curr).toFixed(2));
                                                        var club=document.getElementById("Membresia");
                                                            club.innerHTML=('$'+ TrueCost.toFixed(2));
                                                        var mes=document.getElementById("AhorroMensual");
                                                            mes.innerHTML=('$'+ Mensual.toFixed(2));
                                                        var ano=document.getElementById("AhorroAnual");
                                                            ano.innerHTML=('$'+ Anual.toFixed(2));
                                                        var mano=document.getElementById("MultiAnual");
                                                            mano.innerHTML=('$'+ MAnual.toFixed(2));
                                                        var res=document.getElementById("Resultado");
                                                            res.innerHTML=('$'+valor4.toFixed(2));
                                                        var msge=document.getElementById("MensajeError");
	                                                    msge.setAttribute("class","t2_style editContent");
	                                                    msge.setAttribute("style","color:#dd2c00");
	                                                    msge.innerHTML= "";
	                                                    }else{alert("Monto Negativo")} 
                                                }
                                                }                                               
                                            
                                                    return promedio,valorI;
                                               
                                        };

                                        var boton=document.getElementById('boton');
                                        boton.addEventListener("click", calculo);

                                }())           
                                




