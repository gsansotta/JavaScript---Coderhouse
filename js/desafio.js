/* ALGORITMO PARA QUE EL USAURIO INGRESE LA CANTIDAD DE PARTIDOS DISPUTADOS Y SUS RESULTADOS. 
DEVOLVERÁ LA TOTALIDAD DE PUNTOS OBTENIDOS E INFORMACIÓN DE LA CARGA */

const ganar = "GANO";
const empatar = "EMPATO";
const perder = "PERDIO";
const finalizar = "FIN";
const ptsGanar = 3;
const ptsEmpatar = 1;
const ptsPerder = 0;
let puntos = 0;
let partidosJugados;
let resultado;
let partidosGanados = 0;
let partidosEmpatados = 0;
let partidosPerdidos = 0;

partidosJugados = parseInt(prompt("Ingrese la cantidad de partidos Jugados, 0 si no disputo ningun partido"));

 while(isNaN(partidosJugados) || partidosJugados < 0){
    partidosJugados = parseInt(prompt("INGRESO INCORRECTO. Ingrese la cantidad de partidos Jugados, 0 si no disputo ningun partido"));
 }

for (let i = 0; i < partidosJugados; i++) {
    resultado = prompt("Ingrese resultado, GANO, EMPATO o PERDIO.").toUpperCase();  
   
    while(resultado !==ganar && resultado !==empatar && resultado !==perder){
        resultado = prompt(" INGRESO INCORRECTO. Ingrese resultado, GANO, EMPATO o PERDIO").toUpperCase();   
    }
   
   switch (resultado) {
        case (ganar):
            puntos = puntos += ptsGanar;
            partidosGanados++;
            break;
        case (empatar):
            puntos = puntos += ptsEmpatar;
            partidosEmpatados++;
            break;
        default:
            puntos = puntos += ptsPerder;
            partidosPerdidos++;
            break;
    }
}

if (partidosJugados === 0) {
    console.log("No ha disputado ningun partido.")
} else {
    console.log("Ha finalizado la carga, disputó " + partidosJugados + " partidos y obtuvo " + puntos + " puntos.");
    console.log(`Cantidad de victorias: ${partidosGanados}, cantida de empates: ${partidosEmpatados} y cantidad de derrotas: ${partidosPerdidos}`);
}



