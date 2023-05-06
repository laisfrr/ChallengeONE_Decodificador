//=======Script para o Vlibras ======//
new window.VLibras.Widget('https://vlibras.gov.br/app')

var entradaTexto = document.querySelector('.entrada-textarea')
var textoRecebido = entradaTexto.value
var criptografiaBotao = document.querySelector('.button-cripto')

//=======Função do botão criptografia ======//
function criptografar() {
  var textoRecebido = entradaTexto.value.toLowerCase()
  textoCripto = textoRecebido
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat')
  if (validar(entradaTexto.value)) {
    var erroValidacao = document.querySelector('.icon-texto')
    erroValidacao.style.border = '1px dashed red'
    clear()
  } else {
    var erroValidacao = document.querySelector('.icon-texto')
    erroValidacao.style.border = 'none'
    var img = document.querySelector('.img-container')
    var copy = document.querySelector('.button-copy')
    var texto = document.querySelector('.container-texto')
    document.querySelector('.container-texto').innerHTML = textoCripto
    img.style.visibility = 'hidden'
    copy.style.visibility = 'inherit'
    texto.style.display = 'block'
  }
  return
}

//=======Função com REGEX para validar o texto digitado ======//
function validar(entradaTexto) {
  var regex = /[A-Zà-ú@#$%^&*()+=!~:/]/g
  return regex.test(entradaTexto)
}
console.log(validar(entradaTexto.value))

//=======Função do botão descriptografar ======//
function descriptografar() {
  var textoRecebido = entradaTexto.value.toLowerCase()
  textoCripto = textoRecebido
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u')
  if (validar(entradaTexto.value)) {
    var erroValidacao = document.querySelector('.icon-texto')
    erroValidacao.style.border = '1px dashed red'
    clear()
  } else {
    var erroValidacao = document.querySelector('.icon-texto')
    erroValidacao.style.border = 'none'
    var img = document.querySelector('.img-container')
    var copy = document.querySelector('.button-copy')
    var texto = document.querySelector('.container-texto')
    document.querySelector('.container-texto').innerHTML = textoCripto
    img.style.visibility = 'hidden'
    copy.style.visibility = 'inherit'
    texto.style.display = 'block'
  }
  return
}

//=======Função do botão copiar ======//

function copiar() {
  var copy = navigator.clipboard.writeText(textoCripto)
  alert('Texto copiado: ' + textoCripto)
  clear()
}

//=======Função para limpar ======//
function clear() {
  var img = document.querySelector('.img-container')
  var copy = document.querySelector('.button-copy')
  var texto = document.querySelector('.container-texto')
  document.querySelector('.container-texto').innerHTML = textoCripto
  img.style.visibility = 'visible'
  copy.style.visibility = 'hidden'
  texto.style.display = 'none'
  document.querySelector('.container-texto').innerHTML = ''
  entradaTexto.select()
  entradaTexto.setSelectionRange(0, 99999)
}
