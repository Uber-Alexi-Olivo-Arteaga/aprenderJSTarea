class Ejercicios{
    ejer1(){
        let numero = document.getElementById("num1").value;
        let resp = document.getElementById("resp");
        if (numero % 2 === 0) {
            resp.innerHTML = `${ numero}  es par`;
        } else {
            resp.innerHTML = `${ numero}  es impar`;
        }
    }

    ejer2(){
        let edad = document.getElementById("edad").value;
        let resp = document.getElementById("resp");
        if (edad >= 18) {        
            resp.innerHTML = ` Eres mayor de edad`;
        } else {
            resp.innerHTML = `Eres menor de edad`;
        }
    }

    ejer3(){
        let numero = document.getElementById("numero").value;
        let resp = document.getElementById("resp");
        if (numero > 0) {        
            resp.innerHTML= ` ${numero} es positivo`;
        } else if (numero < 0) {
            resp.innerHTML= ` ${numero} es negativo`;
        } else {
            resp.innerHTML= ` ${numero} es cero`;
        }
    }

    ejer4(){
        let anio = document.getElementById("anio").value 
        let resp = document.getElementById("resp")
        if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
            resp.innerHTML=`${anio}  es un año bisiesto`;
        } else {
            resp.innerHTML= `${anio}  no es un año bisiesto`;
        }
    }

    ejer5(){
        let numero1 = parseInt(document.getElementById("numero1").value);
        let numero2 = parseInt(document.getElementById("numero2").value);
        let resp = document.getElementById("resp")
        if (numero1 > numero2) {
            resp.innerHTML=`${numero1} es mayor que ${numero2}`;
        } else if (numero1 < numero2) {
            resp.innerHTML=`${numero2}  es mayor que  ${numero1}`;
        } else {
            resp.innerHTML=`Ambos números son iguales`;
        }
    }

    // BUCLES

    ejer6(){
        let n = document.getElementById("n").value;
        let resp = document.getElementById("resp")
        for (let i = 1; i <= n; i++) {
            if (i % 2 === 0) {
                resp.innerHTML += `${i} es par   <br>`;
            }
        }
    }

    ejer7(){
        let numero = document.getElementById("numero").value;
        let resp = document.getElementById("resp")
        for (let i = 1; i <= numero; i++) {
            if (numero % i === 0) {
                resp.innerHTML += `${i} es un divisor de  ${numero}   <br>`;
            }
        }
    }

    ejer8(){
        let numero = document.getElementById("numero").value;
        let suma = 0;
        let resp = document.getElementById("resp")
        for (let i = 1; i < numero; i++) {        
            if (numero % i === 0) {
                suma += i;
            }
        }
        if (suma === numero) {
            resp.innerHTML= `${numero} es un número perfecto`;
        } else {
            resp.innerHTML= `${numero} no es un número perfecto`;
        }
    }

    ejer9(){
        let numero = document.getElementById("numero").value;
        let resp = document.getElementById("resp")
        let esPrimo = true;
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                esPrimo = false;
            }
        }
        if (esPrimo) {
            resp.innerHTML= ` ${numero} es un número primo`;
        } else {
            resp.innerHTML= ` ${numero} no es un número primo`;
        }
    }

    ejer10(){
        let numero = document.getElementById("numero").value;
        let resp = document.getElementById("resp");
        let invertido = 0;
        while (numero !== 0) {
            let digito = numero % 10; 
            invertido = invertido * 10 + digito; 
            numero = Math.floor(numero / 10);
        }
        resp.innerHTML= `El número invertido es  ${invertido}`;
    }

    ejer11(){
        let numero1 = parseInt(document.getElementById("numero1").value);
        let numero2 = parseInt(document.getElementById("numero2").value);
        let resultado = 0;
        let resp = document.getElementById("resp");
        for (let i = 0; i < numero2; i++) {
            resultado += numero1;
        }
        resp.innerHTML = `El resultado de la multiplicación es ${resultado}`;
    }

    ejer12(){
        let dividendo = parseInt(document.getElementById("dividendo").value);
        let divisor = parseInt(document.getElementById("divisor").value);
        let cociente = 0;
        let resp = document.getElementById("resp");
        while (dividendo >= divisor) {
            dividendo -= divisor;
            cociente++;
        }
        resp.innerHTML = `El cociente de la división es ${cociente}`;
    }

    ejer13(){
        let n = document.getElementById("n").value;
        let resp = document.getElementById("resp")
        let a = 0;
        let b = 1;
        resp.innerHTML= `${a}   <br>`;
        resp.innerHTML= `${b}   <br>`;
        for (let i = 2; i <= n; i++) {
            let c = a + b;
            resp.innerHTML+= `${c}   <br>`;
            a = b;
            b = c;
        }
    }

    ejer14() {
        let num = document.getElementById("num").value;
        let resp = document.getElementById("resp");
        let numeros = num.split(";");
        for (let i = 0; i < numeros.length; i++) {
            let numero = parseFloat(numeros[i]);
            if (!isNaN(numero)) {
                if (numero % 5 === 0) {
                    resp.innerHTML += `${numero} es múltiplo de 5 <br>`;
                } 
            }
        }
    }

    ejer15(){
        let num = document.getElementById("num").value;
        let resp = document.getElementById("resp");
        let numeros = num.split(";");
        let suma = 0;
        for (let i = 0; i < numeros.length; i++) {
            let numero = parseFloat(numeros[i]);
                if (!isNaN(numero)) {
                    suma += numero;
                } 
            }
            let promedio = suma / numeros.length;
            resp.innerHTML = `El promedio es ${promedio}`;
    }

    ejer16(){
        let num = document.getElementById("num").value;
        let resp = document.getElementById("resp");
        let numeros = num.split(";");
        let mayor = parseFloat(numeros[0]);
        for (let i = 1; i < numeros.length; i++) {
            let numero = parseFloat(numeros[i]);
            if (numero > mayor) {
                mayor = numero;
            }
        }
        resp.innerHTML = `El mayor número es ${mayor}`;
    }

    ejer17(){
        let nom = document.getElementById("nom").value
        let resp = document.getElementById("resp")
        let nombres = nom.split(";")
        for (let i = 0; i < nombres.length; i++) { 
            if (nombres[i] !== "Ana") {
                resp.innerHTML+= `${nombres[i]} <br>`;
            }
        }
    }

    ejer18(){
        let num = document.getElementById("num").value
        let resp = document.getElementById("resp")
        let numeros = num.split(";")
        for (let i = numeros.length - 1; i >= 0; i--) { 
            if (numeros[i] % 2 === 0) {
                resp.innerHTML += `${numeros[i]} es par <br>`;
            }
        }
    }

    // CADENAS

    ejer19(){
        let cad = document.getElementById("cad").value;
        let resp = document.getElementById("resp");
        let cadena = cad.split(";")
        for (let i = 0; i < cadena.length; i++) {
            resp.innerHTML = `${cadena[i]}`;
        }
    }

    ejer20(){
        let cadena = document.getElementById("cadena").value;
            let resp = document.getElementById("resp");
            let vocales = "aeiouAEIOU";
            let contador = 0;
            for (let i = 0; i < cadena.length; i++) { 
                for (let j = 0; j < vocales.length; j++) {
                    if (cadena[i] === vocales[j]) { 
                        contador++;
                    }
                }
            }
            resp.innerHTML = `Número de vocales: ${contador}`;
    }

    ejer21(){
        let cadena = document.getElementById("cadena").value; 
        let resp = document.getElementById("resp");
        let cadenaInvertida = "";
        for (let i = cadena.length - 1; i >= 0; i--) { 
            cadenaInvertida += cadena[i];
        }
        resp.innerHTML= `${cadenaInvertida}`;
    }

    ejer22(){
        let cadena = document.getElementById("cadena").value;
        let resp = document.getElementById("resp");
        let contadorPalabras = 1
        for (let i = 0; i < cadena.length; i++) {
            if(cadena[i] == " "){
                contadorPalabras++
            }
        }
        resp.innerHTML= `${contadorPalabras}`;
    }

    ejer23(){
        let cadena = document.getElementById("cadena").value
        let resp = document.getElementById("resp")
        let cadenaModificada = "";
        for (let i = 0; i < cadena.length; i++) {
            if (cadena[i] === " ") {
                cadenaModificada += "-";
            } else {
                cadenaModificada += cadena[i]; 
            }
        }
        resp.innerHTML = `${cadenaModificada}`;
        cadena= cadenaModificada;
        resp.innerHTML = `${cadena}`;
    }

    ejer24(){
        let cadena = document.getElementById("cadena").value;
        let resp = document.getElementById("resp");
        let caracter = "o";
        let contador = 0;
        for (let i = 0; i < cadena.length; i++) { 
            if (cadena[i] === caracter) {
                contador++;
            }
        }
        resp.innerHTML= `${contador}`;
    }

    ejer25(){
        let cadena = document.getElementById("cadena").value; 
        let resp = document.getElementById("resp")
        let caracter = "o";
        let nuevaCadena = "";
        for (let i = 0; i < cadena.length; i++) { 
            if (cadena[i] !== caracter) {
                nuevaCadena += cadena[i];
            }
        }
        resp.innerHTML= `${nuevaCadena}`;
        cadena=nuevaCadena;
    }

    ejer26(){
        let cadena = document.getElementById("cadena").value;
        let resp = document.getElementById("resp") 
        let nuevaCadena = "";
        for (let i = 0; i < cadena.length; i++) { 
            let char = cadena[i];
            if (char >= 'a' && char <= 'z') {
                nuevaCadena += String.fromCharCode(char.charCodeAt(0) - 32);
            } else if (char >= 'A' && char <= 'Z') {
                nuevaCadena += String.fromCharCode(char.charCodeAt(0) + 32);
            } else {
                nuevaCadena += char;
            }
        }
        resp.innerHTML= `${nuevaCadena}`;
    }

    ejer27(){
        let cadena = document.getElementById("cadena").value;
        let resp = document.getElementById("resp");
        let nuevaCadena = "";
        for (let i = 0; i < cadena.length; i++) { 
            if (cadena[i] !== " ") {
                nuevaCadena += cadena[i];
            }
        }
        resp.innerHTML = `${nuevaCadena}`;
    }

    ejer28(){
        let cadena = document.getElementById("cadena").value;
        let resp = document.getElementById("resp") 
        let palabraActual = "";
        let longitudMaxima = 0;
        for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === " " || i === cadena.length - 1) { 
            if (i === cadena.length - 1) {
                palabraActual += cadena[i];
            }
        if (palabraActual.length > longitudMaxima) { longitudMaxima = palabraActual.length;
        }
        palabraActual = "";
        } else {
        palabraActual += cadena[i];
        }
        }
        resp.innerHTML= `${longitudMaxima}`;
    }
}

const ejercicios = new Ejercicios();

function limpiarR() {
    document.getElementById("resp");
    resp.textContent = "RESPUESTA";
}