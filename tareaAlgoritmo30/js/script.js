class Numeros {
  ejer1() {
    // 1. Presentar un mensaje N veces
    let num = parseInt(document.getElementById("num1").value);
    let mensaje = document.getElementById("mensaje").value;
    let resp = document.getElementById("resp");
    resp.innerHTML = "";
    for (let i = 0; i < num; i++) {
      resp.innerHTML += `${mensaje} <br>`;
    }
  }

  ejer2() {
    // 2. Presentar números múltiplos del 7 de 1 a N
    let num = parseInt(document.getElementById("num").value);
    let resp = document.getElementById("resp");
    resp.innerHTML = "";

    if (isNaN(num) || num <= 0) {
      resp.innerHTML = "Por favor, ingresa un número válido.";
    } else {
      for (let n = 1; n <= num; n++) {
        if (n % 7 === 0) {
          resp.innerHTML += `${n} <br>`;
        }
      }
    }
  }

  ejer3() {
    // 3. Presentar números múltiplos de cualquier número hasta N
    let num = parseInt(document.getElementById("num3").value);
    let multiplo = parseInt(document.getElementById("multiplo").value);
    let resp = document.getElementById("resp");
    resp.innerHTML = "";

    if (isNaN(num) || num <= 0 || isNaN(multiplo) || multiplo <= 0) {
      resp.innerHTML = "Por favor, ingresa un número válido y un múltiplo válido.";
    } else {
      for (let n = 1; n <= num; n++) {
        if (n % multiplo === 0) {
          resp.innerHTML += `${n} <br>`;
        }
      }
    }
  }

  ejer4() {
    // 4. Presentar los números positivos de N números
    let num = document.getElementById("num4").value;
    let resp = document.getElementById("resp");
    resp.innerHTML = "";
    let numeros = num.split(";");
    for (let n of numeros) {
      let numero = parseInt(n);
      if (numero >= 0) {
        resp.innerHTML += `${numero} <br>`;
      }
    }
  }

  ejer5() {
    // 5. Presentar los números pares de N números
    let num = document.getElementById("num5").value;
    let resp = document.getElementById("resp");
    resp.innerHTML = "";
    let numeros = num.split(";");
    for (let n of numeros) {
      let numero = parseInt(n);
      if (numero % 2 === 0) {
        resp.innerHTML += `${numero} <br>`;
      }
    }
  }

  ejer6() {
    // 6. Presentar los divisores de cualquier número
    let num = parseInt(document.getElementById("num6").value);
    let resp = document.getElementById("resp");
    resp.innerHTML = "";

    if (isNaN(num) || num <= 0) {
      resp.innerHTML = "Por favor, ingresa un número válido.";
    } else {
      for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
          resp.innerHTML += `${i} <br>`;
        }
      }
    }
  }

  ejer7() {
    // 7. Presentar la tabla de sumar del 10 del 1 al 12
    let resp = document.getElementById("resp");
    resp.innerHTML = "";
    for (let i = 1; i <= 12; i++) {
      resp.innerHTML += `10 + ${i} = ${10 + i} <br>`;
    }
  }

  ejer8() {
    // 8. Presentar cualquier tabla de multiplicar desde un valor inicial a un valor final
    let tabla = parseInt(document.getElementById("tabla").value);
    let inicial = parseInt(document.getElementById("inicial").value);
    let final = parseInt(document.getElementById("final").value);
    let resp = document.getElementById("resp");
    resp.innerHTML = "";
    for (let i = inicial; i <= final; i++) {
      resp.innerHTML += `${tabla} x ${i} = ${tabla * i} <br>`;
    }
  }

  ejer9() {
    // 9. Presentar los números comprendidos entre dos números
    let num1 = parseInt(document.getElementById("num9_1").value);
    let num2 = parseInt(document.getElementById("num9_2").value);
    let resp = document.getElementById("resp");
    resp.innerHTML = "";
    for (let i = num1; i <= num2; i++) {
      resp.innerHTML += `${i} <br>`;
    }
  }

  ejer10() {
    // 10. Presentar los números pares comprendidos entre dos números
    let num1 = parseInt(document.getElementById("num10_1").value);
    let num2 = parseInt(document.getElementById("num10_2").value);
    let resp = document.getElementById("resp");
    resp.innerHTML = "";
    for (let i = num1; i <= num2; i++) {
      if (i % 2 === 0) {
        resp.innerHTML += `${i} <br>`;
      }
    }
  }
}

const numeros = new Numeros();

function limpiarR() {
  document.getElementById("resp");
  resp.textContent = "resultado";
}