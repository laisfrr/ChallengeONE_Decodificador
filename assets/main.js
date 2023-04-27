var entradaTexto = document.querySelector('.entrada-textarea')
var textoRecebido = entradaTexto.value

var criptografiaBotao = document.querySelector('.button-cripto')

function criptografar() {
  var textoRecebido = entradaTexto.value.toLowerCase()
  textoCripto = textoRecebido
    .replace(/a/g, 'ai')
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat')
  var img = document.querySelector('.img-container')
  var copy = document.querySelector('.button-copy')
  var texto = document.querySelector('.container-texto')
  document.querySelector('.container-texto').innerHTML = textoCripto
  img.style.visibility = 'hidden'
  copy.style.visibility = 'inherit'
  texto.style.display = 'block'
  console.log(textoRecebido)
  return
}

function descriptografar() {
  var textoRecebido = entradaTexto.value.toLowerCase()
  textoCripto = textoRecebido
    .replace(/ai/g, 'a')
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u')
  var img = document.querySelector('.img-container')
  var copy = document.querySelector('.button-copy')
  var texto = document.querySelector('.container-texto')
  document.querySelector('.container-texto').innerHTML = textoCripto
  img.style.visibility = 'hidden'
  copy.style.visibility = 'inherit'
  texto.style.display = 'block'
  console.log(textoRecebido)
  return
}

function copiar() {
  var copy = navigator.clipboard.writeText(textoCripto)
  clear()
}

function clear() {
  var img = document.querySelector('.img-container')
  var copy = document.querySelector('.button-copy')
  var texto = document.querySelector('.container-texto')
  document.querySelector('.container-texto').innerHTML = textoCripto
  img.style.visibility = 'visible'
  copy.style.visibility = 'hidden'
  texto.style.display = 'none'
  document.querySelector('.container-texto').innerHTML = ''
}
