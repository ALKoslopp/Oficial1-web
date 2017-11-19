function enviar(){
  var getTexto = document.getElementById("texto");
  var publicar = document.getElementById("insereTexto");
  publicar.innerText = getTexto.value;
  console.log("entrou aqui");
}









window.onload = function(){
  var btEnviar = document.getElementById("btSubmit");
  btEnviar.addEventListener("click", enviar);

}
