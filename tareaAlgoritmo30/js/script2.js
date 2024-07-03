class Arreglos {
  ejer1() {
    // Ingresar datos en un arreglo: Crea un programa que permita al usuario
    // ingresar 5 números en un arreglo y luego imprima todos los números.
    let nums = document.getElementById("num").value.split(";");
    let resp = document.getElementById("resp");
    resp.innerHTML = "";
    if (nums.length === 5) {
      resp.innerHTML = `Los números son: ${nums.join(", ")} <br>`;
    } else {
      resp.innerHTML = `Debe ingresar exactamente 5 números.`;
    }
  }
  
  ejer2(){
    // Números pares: Crea un programa que permita al usuario ingresar 10 números
    // en un arreglo y luego imprima solo los números pares.
    let cad = document.getElementById("num").value;
    let resp = document.getElementById("resp");
    resp.innerHTML = "";
    let m = 0;
    let n = cad.split(";");
    if (n.length == 10){
      while (m < n.length) {
        let num = parseInt(n[m]);
        if (!isNaN(num) && num % 2 === 0) {
            resp.innerHTML += `${num} <br>`;
        }
        m++;
      }
    } else {
        resp.innerHTML = `se a pasado o a ingresado menos de lo que se a pedido`
      }
  }
  
  ejer3() {
    // Suma de los elementos: Crea un programa que permita al usuario ingresar 8
    // números en un arreglo y luego imprima la suma de todos los números.
    let nums = document.getElementById("num").value.split(";");
    let resp = document.getElementById("resp");
    resp.innerHTML = "";
    let suma = 0;
    if (nums.length === 8){
      for (let i = 0; i < nums.length; i++) {
        let num = parseFloat(nums[i]);
        if (!isNaN(num)) {
          suma += num;
        }
      }
      resp.innerHTML = `La suma de los números es: ${suma} <br>`;
    }else{
      resp.innerHTML = `Debe ingresar exactamente 8 números.`
    }
  }
  
  ejer4(){
    // Promedio de los elementos: Crea un programa que permita al usuario ingresar
    // 6 números en un arreglo y luego imprima el promedio de los números.
    let num = document.getElementById("num").value;
    let resp = document.getElementById("resp");
    resp.innerHTML = "";
    let suma = 0
    let m = 0
    let n = num.split(";")
    if(n.length == 6){
      while (m < n.length) {
          let num = parseInt(n[m])
          suma += num
          m++
      }
      resp.innerHTML += `${suma/6}`
    } else{
        resp.innerHTML = `se a pasado o a ingresado menos de lo que se a pedido`
    }
  }
  
  ejer5() {
    // Mayor y menor número: Crea un programa que permita al usuario ingresar 7
    // números en un arreglo y luego imprima el mayor y el menor número.
    let nums = document.getElementById("num").value.split(";");
    let resp = document.getElementById("resp");
    resp.innerHTML = "";
    if (nums.length === 7){
      // Convertir el primer elemento y usarlo para inicializar mayor y menor
      let numInicial = parseFloat(nums[0]);
      let mayor = numInicial;
      let menor = numInicial;
      // Recorrer el arreglo desde el segundo elemento
      for (let i = 1; i < nums.length; i++) {
        let num = parseFloat(nums[i]);
        if (!isNaN(num)) {
          if (num > mayor) {
            mayor = num;
          }
          if (num < menor) {
            menor = num;
          }
        }
      }
      resp.innerHTML = `El mayor número es: ${mayor} <br> El menor número es: ${menor} <br>`;
      }else{
        resp.innerHTML = `Debe ingresar exactamente 7 números.`;
      }
  }
  
  ejer6(){
    // Números positivos y negativos: Crea un programa que permita al usuario
    // ingresar 10 números en un arreglo y luego imprima los números positivos y
    // negativos por separado. 
    let num = document.getElementById("num").value;
    let resp = document.getElementById("resp");
    resp.innerHTML = "";
    let positivos = [];
    let negativos = [];
    let n = num.split(";");
    let m = 0;
    if(n.length == 10){
      while (m < n.length) {
        let numero = parseInt(n[m]);
        if (numero > 0) {
          positivos.push(numero);
        } else if (numero < 0) {
          negativos.push(numero);
        }
        m++;
      }
      resp.innerHTML=`
      los numeros positivos son: ${positivos} <br>
      los numeros negativos son: ${negativos} <br>`
    }
    else{
      resp.innerHTML = `se a pasado o a ingresado menos de lo que se a pedido `
    }
  }
  
  ejer7() {
    // Contar ocurrencias de un número: Crea un programa que permita al usuario
    // ingresar 10 números en un arreglo y luego pregunte al usuario por un número
    // específico, e imprima cuántas veces aparece ese número en el arreglo.
    let nums = document.getElementById("num").value.split(";");
    let valor = parseInt(document.getElementById("valor").value);
    let resp = document.getElementById("resp");
    resp.innerHTML = "";
    if (nums.length === 10) {
      let ocurrencias = 0;
      for (let i = 0; i < nums.length; i++) {
        let num = parseFloat(nums[i]);
        if (!isNaN(num) && num === valor) {
          ocurrencias++;
        }
      }
      resp.innerHTML = `El número ${valor} aparece ${ocurrencias} veces <br>`;
    } else {
      resp.innerHTML = `Debe ingresar exactamente 10 números.`;
      }
  }
  
  ejer8(){
    // Números en orden inverso: Crea un programa que permita al usuario ingresar 5
    // números en un arreglo y luego imprima los números en orden inverso.
    let num = document.getElementById("num").value;
    let resp = document.getElementById("resp");
    resp.innerHTML = "";
    let n = num.split(";")
    if(n.length == 5){
      let re= n.reverse();
      resp.innerHTML = `${re}`
    }else{
      resp.innerHTML = `se a pasado o a ingresado menos de lo que se a pedido `
    }
  }
  
  ejer9() {
    // Elementos mayores que un valor dado: Crea un programa que permita al
    // usuario ingresar 8 números en un arreglo y luego pregunte al usuario por un
    // valor específico, e imprima todos los números en el arreglo que sean mayores
    // que ese valor
    let numsStr = document.getElementById("num").value.split(";");
    let valor = parseInt(document.getElementById("valor").value);
    let resp = document.getElementById("resp");
    resp.innerHTML = "";
    if (numsStr.length === 8) {
      let nums = [];
      for (let i = 0; i < numsStr.length; i++) {
        nums.push(parseFloat(numsStr[i]));
      }
      let mayores = [];
      for (let i = 0; i < nums.length; i++) {
        if (!isNaN(nums[i]) && nums[i] > valor) {
          mayores.push(nums[i]);
        }
      }
      resp.innerHTML = `Los números mayores que ${valor} son: ${mayores.join(", ")} <br>`;
    } else {
        resp.innerHTML = `Debe ingresar exactamente 8 números.`;
      }
  }
  
  ejer10(){
    // Encontrar duplicados: Crea un programa que permita al usuario ingresar 10
    // números en un arreglo y luego imprima todos los ceros.
    let num = document.getElementById("num").value;
    let resp = document.getElementById("resp");
    resp.innerHTML = "";
    let n = num.split(";").map(Number); // Convertir los valores a números
    if (n.length === 10) {
      let cuenta = {};
      let resultado =[];
      for (let i = 0; i < n.length; i++) {
        let numero = n[i];
        if(!cuenta[numero]){
            cuenta[numero] = 1;
            resultado.push(numero);
        }else {
            cuenta[numero]++
        }
      }
      resp.innerHTML = `${resultado}`
    } else{
        resp.innerHTML = `usted ingeso menos o mas de 10 datos`
    }
  }
}

const arreglos = new Arreglos();

function limpiarR() {
  document.getElementById("resp");
  resp.textContent = "RESPUESTA";
}