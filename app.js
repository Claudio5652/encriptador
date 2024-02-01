// Variable global para almacenar el texto original
let textoOriginalGlobal = '';

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function condicionesIniciales() {
  asignarTextoElemento('h1','Encriptador');
  asignarTextoElemento('p','Use solo minúsculas y sin acento');
}

condicionesIniciales();

function encriptar() {

  const textoOriginal = document.getElementById('textarea1').value;
  console.log('Texto encriptado:', textoOriginal);

  // Verificar si el texto contiene letras mayúsculas o acentos
  if (/[A-Záéíóú]/.test(textoOriginal)) {
    alert("El texto no debe contener letras mayúsculas o acentos. Modifica el texto antes de encriptar.");
    return;
  }

  textoOriginalGlobal = textoOriginal;

  const textoEncriptado = textoOriginal
  .replace(/e/g, 'enter')
  .replace(/i/g, 'imes')
  .replace(/a/g, 'ai')
  .replace(/o/g, 'ober')
  .replace(/u/g, 'ufat');

  document.getElementById('textarea2').value = textoEncriptado;

}

function desencriptar() {
  const textodesEncriptado = document.getElementById('textarea1').value
  .replace(/enter/g, 'e')
  .replace(/imes/g, 'i')
  .replace(/ai/g, 'a')
  .replace(/ober/g, 'o')
  .replace(/ufat/g, 'u');

  // Muestra el texto desencriptado en textarea2
  document.getElementById('textarea2').value = textodesEncriptado;
}

function copiar() {
  const textoDesencriptado = document.getElementById('textarea2').value;

  // Copiar al portapapeles
  navigator.clipboard.writeText(textoDesencriptado)
  .then(() => {
    // Limpiar textareas
    document.getElementById('textarea1').value = '';
    document.getElementById('textarea2').value = '';
  })
  .catch(err => {
    console.error('Error al copiar al portapapeles:', err);
  });


}
