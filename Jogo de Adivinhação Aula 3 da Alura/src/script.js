var numeroSorteado = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSorteado) {
    numeroSorteado.innerHTML = "Acertou Mizeravi";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML =
      "Besta, você deve digitar um número de 0 a 10";
  } else {
    elementoResultado.innerHTML =
      "Errouuuuu, o número sorteado era " + numeroSorteado;
  }
}
