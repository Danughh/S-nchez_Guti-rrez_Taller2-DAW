
function calc2grad(a,b,c){
discriminante=Math.pow(b,2)-4*a*c;
  if(discriminante<0){
    document.getElementById("info").innerHTML="No tiene soluciones, las dos ra&iacute;ces son complejas y una es el cojugado de la otra [el discriminante es < 0]"
  }else if(discriminante==0){
    document.getElementById("info").innerHTML="Tiene una sola soluci&oacuten y es real con multiplicidad 2 (es una raíz doble) [el discriminante es == 0]"
    document.getElementById("x1").value=parseFloat((-b)/(2*a));
  }else{
    document.getElementById("info").innerHTML="Tiene dos soluciones y tiene dos ra&iacute;ces reales [el discriminante es > 0]"
    document.getElementById("x1").value=parseFloat(((-b)+Math.sqrt(discriminante))/(2*a));
    document.getElementById("x2").value=parseFloat(((-b)-Math.sqrt(discriminante))/(2*a));
  }
}
window.onload = function(){
var but = document.getElementById("calcularbuton");
but.addEventListener('click',function(){
    var a=parseFloat(document.getElementById("a").value);
    var b=parseFloat(document.getElementById("b").value);
    var c=parseFloat(document.getElementById("c").value);
    calc2grad(a,b,c);
},false);
}
