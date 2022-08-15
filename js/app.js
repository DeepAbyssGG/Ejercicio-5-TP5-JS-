let contadorHoras = 0;
let contadorSegundos = 0;
let contadorMinutos = 0;
let Parrafocronometro = document.querySelector("#cronometro");
Parrafocronometro.innerHTML = `
<p>${contadorHoras} horas </p> 
<p>${contadorMinutos} minutos </p> 
<p>${contadorSegundos} segundos </p>`
;
function cronometro() {
  if (contadorSegundos == 60) {{
    contadorSegundos = 0;
    contadorMinutos++;
    if (contadorMinutos == 60) {
      contadorMinutos = 0;
      contadorHoras++;
    }
  }
//   no pude agregarle el 0 al contador de segundos cuando sea menor a 10
}
  contadorSegundos++;
  Parrafocronometro.innerHTML = `
  <p>${contadorHoras} horas </p> 
  <p>${contadorMinutos} minutos </p> 
  <p>${contadorSegundos} segundos </p>`;
    
}

function iniciar() {
  identificador = setInterval(cronometro, 0.003); // lo deje en este tiempo para probar como actualizaba
}
function parar() {
  clearInterval(identificador);
}
function reset() {
  clearInterval(identificador);
  contadorHoras = 0;
  contadorMinutos = 0;
  contadorSegundos = 0;
  Parrafocronometro.innerHTML = `
  <p>${contadorHoras} horas </p> 
  <p>${contadorMinutos} minutos </p> 
  <p>${contadorSegundos} segundos </p>`;
}