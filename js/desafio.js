const ganar = "GANO";
const empatar = "EMPATO";
const perder = "PEDIO";
const finalizar = "FIN";
const ptsGanar = 3;
const ptsEmpatar = 1;
const ptsPerder = 0;
let puntos = 0;
let partidosJugados;
let resultado;

do{
partidosJugados = parseInt(prompt("Ingrese la cantidad de partidos Jugados, 0 para finalizar"));
} while(isNaN(partidosJugados));

for (let i = 0; i < partidosJugados; i++) {
   do{
    resultado = prompt("Ingrese resultado, GANO, EMPATO o PERDIO.").toUpperCase();  
   } while(resultado !==ganar && resultado !==empatar && resultado !==perder);
   
   switch (resultado) {
        case (ganar):
            puntos = puntos += ptsGanar;
            break;
        case (empatar):
            puntos = puntos += ptsEmpatar;
            break;
        default:
            puntos = puntos += ptsPerder;
            break;
    }
}

if (partidosJugados === 0) {
    console.log("No ha disputado ningun partido.")
} else {
    console.log("Ha finalizado la carga, disputó " + partidosJugados + " partidos y obtuvo " + puntos + " puntos");
}



