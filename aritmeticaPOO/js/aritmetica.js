class Aritmetica {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  suma() {
    return parseFloat(this.x) + parseFloat(this.y);
  }

  resta() {
    return parseFloat(this.x) - parseFloat(this.y);
  }

  multiplicacion() {
    return parseFloat(this.x) * parseFloat(this.y);
  }

  division() {
    return parseFloat(this.x) / parseFloat(this.y);
  }

  mostrarResultado(operacion) {
    if ((isNaN(x) || isNaN(y)) || (x == "" || y == "")) {
      texto = "Es necesario escribir dos números";
    }
    else {
      texto = "Resultado: " + operacion;
    }
    document.getElementById("resultado").innerHTML = texto;
  }
}

var x,y,operacion,texto;

function obtenerDatos() {
  x = document.getElementById("num1").value;
  y = document.getElementById("num2").value; 
}

function sumar() {
  obtenerDatos();
  const aritmetica = new Aritmetica(x, y);
  aritmetica.mostrarResultado(aritmetica.suma());
}

function restar(){
  obtenerDatos();
  const aritmetica = new Aritmetica(x,y);
  aritmetica.mostrarResultado(aritmetica.resta());
}

function multiplicar(){
  obtenerDatos();
  const aritmetica = new Aritmetica(x,y);
  aritmetica.mostrarResultado(aritmetica.multiplicacion());
}

function dividir(){
  obtenerDatos();
  const aritmetica = new Aritmetica(x,y);
  aritmetica.mostrarResultado(aritmetica.division());
}