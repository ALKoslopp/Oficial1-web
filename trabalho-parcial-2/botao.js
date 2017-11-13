
var click2;
var display;

function curtir(){
  var valorAtual = display.value;
  display.value = valorAtual =+ 1;
  display.value = valorAtual + 1;
}






window.onload = function() {
  var botaoCurtir = document.getElementById("curtir");
  botaoCurtir.addEventListener("click", curtir);


  display = document.getElementById("calculadora-display");
}
