function calcular() {
var primeiraNota = parseInt(document.getElementById("primeiraNota").value)
var segundaNota = parseInt(document.getElementById("segundaNota").value)
var terceiraNota = parseInt(document.getElementById("terceiraNota").value)
var quartaNota = parseInt(document.getElementById("quartaNota").value)
var resultadoFinal = (primeiraNota + segundaNota + terceiraNota + quartaNota) /4

var resultadoMedia = document.getElementById("resultadoMedia")   
var mediaFinal = "sua media final é " + resultadoFinal
resultado.innerHTML = mediaFinal

console.log(primeiraNota);
console.log(segundaNota);
console.log(terceiraNota);
console.log(quartaNota);
console.log(resultadoFinal);
}