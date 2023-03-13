function insert(num) {
    var numero = document.querySelector(".input").innerHTML;
    document.querySelector(".input").innerHTML = numero + num;
  }

  function clean() {
    document.querySelector(".input").innerHTML = "";
    document.querySelector(".result").innerHTML = "0"
  }

  function back() {
    var resultado = document.querySelector(".input").innerHTML;
    document.querySelector(".input").innerHTML = resultado.substring(
      0, resultado.length - 1
    );
  }
  
function calcular() {
  var resultado = document.querySelector(".input").innerHTML;
  if (resultado) {
    document.querySelector(".result").innerHTML = eval(resultado);
  } else {
    document.querySelector(".result").innerHTML = "NAA";
  }
}