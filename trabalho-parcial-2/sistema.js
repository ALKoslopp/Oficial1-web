
var click = false;

//var calculadora = document.getElementById("calculadora-display");

function curtir(){
  var curtir = document.getElementById("curtir1");
  if(click == false){
    curtir.innerText = "Voce curtiu isso";
    click = true;
  }
  else {
    curtir.innerText = "";
    click = false;
  }
  return click;
  //display.value = display.value + valorAtual;
}






window.onload = function() {
  var botaoCurtir = document.getElementById("btCurtir");
  botaoCurtir.addEventListener("click", curtir);


  //display = document.getElementById("calculadora-display");
}
