function validar() {
 var nombre, denei, edad;
 nombre= document.getElementById("nombre").value;
 denei= document.getElementById("denei").value;
 edad= document.getElementById("edad").value;
 vValido = true;
	if(nombre==="" || denei==="" || edad===""){
		alert("complete los campos que se encuentran vacíos");
		vValido = false;
	}
	else if(nombre.length>30){
		alert("el nombre es muy largo");
		vValido = false;
	}
	else if(denei.length>8){
		alert("el numero ingresado no es un documento válido");
		vValido = false;
	}
	else if(parseInt(edad) >= 10){  
		alert("ESTE JUEGO ES RECOMENDADO PARA MENORES DE 10 AÑOS");
		vValido = false;
	}
	return vValido;

}
		
$(document).ready(inicio);
   		 	function inicio(){

				$("#fst").click(function(){
        		$("#fst").slideUp()
        		});
			
				$("#fst").click(function(){
        		$("#fst").hide(200).delay(2000).show(5000);      
      			});

			}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  //obtenerPalabra();
}

function obtenerPalabra(pValor){
	var vDivs = document.getElementsByClassName('div');
	var vPalabraFormada = "";
	for(var i=0;i<= vDivs.length-1;i++){
		if(vDivs[i].getElementsByTagName('img')[0] != null){
			var vSrc = vDivs[i].getElementsByTagName('img')[0].src;
			if(vSrc != undefined){
				vPalabraFormada += vSrc.substring(vSrc.length-5).replace(".png","");
			}
		}
	}
	if(vPalabraFormada.toUpperCase() == pValor){
		alert('GANASTE')

	}else{
		alert('INTENTALO DE NUEVO')
	}
}




