const solPeruano = 400; 
const reales = 300;
const dolares = 1300;
const euro = 1400;
const yen = 100;

function suma(){
    event.preventDefault();
    let pais = document.getElementById("opcion").value;
    let dias = parseFloat(document.getElementById("dias")).value;

    let costoViaje = 100 * dias; 
    let costoPesos = 0;
    if(pais == "Cusco") {
         costoPesos = costoViaje * solPeruano;
    }if(pais == "Rio"){
         costoPesos = costoViaje * reales;
    }if(pais == "Miami"){
         costoPesos = costoViaje * dolares;
    }if(pais == "Barcelona"){
         costoPesos = costoViaje * euro;
    }if(pais == "Tokyo"){
         costoPesos = costoViaje * yen;
    }

    document.getElementById("costoFinal").textContent =
    "El numero es: " + costoPesos;

   return;
}