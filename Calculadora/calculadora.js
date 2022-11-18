let montoTotal = 0;

const suma = document.getElementById("suma");
const total = document.getElementById("total");
const pantalla = document.getElementById("idPantalla");
pantalla.value = "";

const num = document.getElementsByName("num");
for (let i = 0; i < num.length; i++) {
  num[i].onclick = function () {
    suma.innerHTML += num[i].innerHTML;
  };
}

const botonIgual = (document.getElementById("botonIgual").onclick = function () {
  primerCaracter = suma.innerHTML.charAt(0);
  if (isNumber(primerCaracter)) {
    montoTotal = 0;
    total.innerHTML = eval(suma.innerHTML) + montoTotal;
    montoTotal = eval(suma.innerHTML) + montoTotal;
    suma.innerHTML = "";
  } else {
    total.innerHTML = eval(montoTotal.toString() + suma.innerHTML);
    montoTotal = eval(montoTotal.toString() + suma.innerHTML);
    suma.innerHTML = "";
  }
});

const botonBorrar = (document.getElementById("botonBorrar").onclick = function () {
  suma.innerHTML = "";
});

const botonBorrarT = (document.getElementById("botonBorrarT").onclick = function () {
  suma.innerHTML = "";
  total.innerHTML = "";
  montoTotal = 0;
});

const botonDiv = (document.getElementById("botonDiv").onclick = function () {
  suma.innerHTML += "/";
});

const botonSumar = (document.getElementById("botonMas").onclick = function () {
  suma.innerHTML += "+";
});

const botonMenos = (document.getElementById("botonMenos").onclick = function () {
  suma.innerHTML += "-";
});

const botonMult = (document.getElementById("botonMult").onclick = function () {
  suma.innerHTML += "*";
});

const botonPIz = (document.getElementById("botonPIz").onclick = function () {
  suma.innerHTML += "(";
});

const botonPDe = (document.getElementById("botonPDe").onclick = function () {
  suma.innerHTML += ")";
});

const botonPi = (document.getElementById("botonPi").onclick = function () {
  suma.innerHTML += "3.14";
});

const botonPunto = (document.getElementById("botonPunto").onclick = function () {
  suma.innerHTML += ".";
});

function isNumber(n) {
  return Number(n) == n;
}