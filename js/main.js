$(document).ready(function(){
	$('.paises').hide();
	$('button').click(function() {
		$('.paises').show();
	});
	$('#cerrar').click(function() {
		$('.paises').hide();
	});
	horaLocal();
	setInterval(horaLocal, 1000);
	// fechalocal(); // funcion anterior borrar 
});
function horaLocal(){
	var fecha = new Date();
	var min = fecha.getMinutes();
	var hrs = fecha.getHours();
	var seg = fecha.getSeconds();
	var hora = document.getElementById('hora');
	var minutos = document.getElementById('minutos');
	var segundos = document.getElementById('segundos');
	var dia = document.getElementById('dia');
	hora.textContent = hrs;
	minutos.textContent = min;
	segundos.textContent = seg;
}
function arregloFechas(){
   	var dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
   	var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
   	"Septiembrer", "Octubre", "Noviembre", "Diciembre"]
   	var fechaActual = new Date();
   	document.getElementById('mes').innerHTML= meses[fechaActual.getMonth()];
   	document.getElementById('dia').innerHTML= dias[fechaActual.getDay()];
   	document.getElementById('anno').innerHTML= fechaActual.getFullYear();
 //   	dia.textContent = day;
	// mes.textContent = meses;
	// anno.textContent = annos;

}
arregloFechas();

var capitales = ["Chicago", "Sao Paulo", "Santiago", "Mexico D.F", "Caracas", "Brasilia", "Quito", "Guayaquil", "Santa Marta", "Bogota"];






// function fechalocal(){
// 	var fecha = new Date();
// 	var day = fecha.getDay();
// 	var meses = fecha.getMonth();
// 	var annos = fecha.getFullYear();
// 	var dia = document.getElementById('dia');
// 	var mes = document.getElementById('mes');
// 	var anno = document.getElementById('anno');
// 	dia.textContent = day;
// 	mes.textContent = meses;
// 	anno.textContent = annos;
// }
// var mundoMundial  [

// ]