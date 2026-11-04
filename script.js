
function fatorar(num) {
  let x = num;
  let resultado = 1;

  while (x > 1) {
      console.log(`${resultado} x ${x} = `);
      resultado *= x;
      console.log(resultado);

      x--;
  }

  return resultado;
}

function mostrarFatorial() {
  let numero = document.querySelector("#numero").value;

  let resultado = fatorar(numero);

  document.querySelector("#resultado").innerHTML =
      `Resultado: ${resultado}`;
}
