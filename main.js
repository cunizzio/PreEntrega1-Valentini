let nombrecliente = prompt("Hola! Ingresá tu nombre");

let pregunta = prompt("Hola " + nombrecliente + ", querés comprar algo? (si/no)");

while (pregunta === "si" || pregunta === "SI" || pregunta === "Si" || pregunta === "sI") {
    
    let productos = prompt("Cuál producto querés? A- iPhone 11 64 GB $695 // B- iPhone 12 64 GB $825 // C- iPhone 13 125 GB $1020 // D- Salir (Ingresa la opción deseada A, B, C o D)");

    let A = 695; 
    let B = 825;
    let C = 1020; 

    if (productos == "A" || productos == "a") {
        function precioFinalA(total, IVA) {
            valorFinalA = A *1.21
        }
        precioFinalA();
        parseInt(alert("El total de tu compra con IVA incluido es de $" + valorFinalA ));
    }

    else if (productos == "B" || productos == "b") {
        function precioFinalB(total, IVA) {
            valorFinalB = B *1.21
        }
        precioFinalB();
        parseInt(alert("El total de tu compra con IVA incluido es de $" + valorFinalB ));
    }

    else if (productos == "C" || productos == "c") {
        function precioFinalC(total, IVA) {
            valorFinalC = C *1.21
        }
        precioFinalC();
        parseInt(alert("El total de tu compra con IVA incluido es de $" + valorFinalC ));
    }

    else if (productos == "D" || productos == "d") {
        alert("Esperamos volver a verte") 
        break;
    }

    else {
        alert("No es una opción válida");
    }
}





