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

//INGRESO DE LA CANTIDAD DE PARTIDOS
partidosJugados = parseInt(prompt("Ingrese la cantidad de partidos Jugados, 0 si no disputo ningun partido"));

//VALIDACIÓN DEL DATO INGRESADO POR EL USUARIO
while (isNaN(partidosJugados) || partidosJugados < 0) {
    partidosJugados = parseInt(prompt("INGRESO INCORRECTO. Ingrese la cantidad de partidos Jugados, 0 si no disputo ningun partido"));
}

//INGRESO DEL RESULTADO DE LOS PARTIDOS LAS Nº VECES EN FUNCIÓN DE LA CANTIDAD DE PARTIDOS INGRESADOS POR EL USUARIO
for (let i = 0; i < partidosJugados; i++) {
    resultado = prompt("Ingrese resultado, GANO, EMPATO o PERDIO.").toUpperCase();

    //VALIDACIÓN DEL DATO INGRESADO POR EL USUARIO
    while (resultado !== ganar && resultado !== empatar && resultado !== perder) {
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

//MENSAJE EN CONSOLA AL INGRESAR 0 O AL FINALIZAR LA CARGA
if (partidosJugados === 0) {
    console.log("No ha disputado ningun partido.")
} else {
    console.log(`Ha finalizado la carga, disputó ${partidosJugados} partidos y obtuvo ${puntos} puntos.`);
    console.log(`Cantidad de victorias: ${partidosGanados}, cantidad de empates: ${partidosEmpatados} y cantidad de derrotas: ${partidosPerdidos}`);
}



