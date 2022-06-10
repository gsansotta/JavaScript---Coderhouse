/* CONVIERTO EN CLASE EL DESAFIO 1 Y LE AGREGO SUS METODOS PARA QUE MANTENGA LA FUNCIONALIDAD 
ALGORITMO PARA QUE SE INGRESE UN EQUIPO DE FUTBOL. EN FUNCIÓN DE LOS PARTIDOS JUGADOS Y EL RESULTADO, CALCULARÁ 
LOS PUNTOS OBTENIDOS Y BRINDARÁ LOS DATOS INGRESADOS PREVIAMENTE.
 */

//CONSTANTES//
const ganar = "GANO";
const empatar = "EMPATO";
const perder = "PERDIO";
const finalizar = "FIN";
const ptsGanar = 3;
const ptsEmpatar = 1;
const ptsPerder = 0;

//DECLARO LA CLASE, SUS ATRIBUTOS Y SUS MÉTODOS//
class Fixture {
    constructor(nombreEquipo, resultado, partidosJugados, partidosGanados = 0, partidosEmpatados = 0, partidosPerdidos = 0, puntos = 0) {
        this.nombreEquipo = nombreEquipo;
        this.resultado = resultado;
        this.partidosJugados = partidosJugados;
        this.partidosGanados = partidosGanados;
        this.partidosEmpatados = partidosEmpatados;
        this.partidosPerdidos = partidosPerdidos;
        this.puntos = puntos

    }

    //METODO PARA PEDIR EL NOMBRE DEL EQUIPO A INGRESAR
    pedirNombreEquipo() {
        this.nombreEquipo = prompt("Ingrese el nombre del equipo.");

        //VALIDACIÓN DEL DATO INGRESADO POR EL USUARIO
        while (this.nombreEquipo === "" || (!isNaN(this.nombreEquipo))) {
            this.nombreEquipo = prompt("Este casillero no puede quedar vacio ni puede contener únicamente numeros. Ingrese el nombre del equipo.")
        }
    }

    //METODO PARA PEDIR LA CANTIDAD DE PARTIDOS JUGADOS POR EL EQUIPÓ. OPCION DE OMITIR LA CARGA Y SALIR DEL ALGORITMO CON "0".
    pedirPartidosJugados() {
        this.partidosJugados = Number(prompt("Ingrese la cantidad de partidos Jugados por " + this.nombreEquipo + ". 0 si no disputo ningun partido"));


        //VALIDACIÓN DEL DATO INGRESADO POR EL USUARIO
        while (isNaN(this.partidosJugados) || this.partidosJugados < 0) {
            this.partidosJugados = Number(prompt("INGRESO INCORRECTO. Ingrese la cantidad de partidos Jugados, 0 si no disputo ningun partido"));
        }
    }

    //METODO QUE CALCULA LOS PUNTOS OBTENITOS Y ACUMULA LA CANTIDAD DE PARTIDOS GANADOS, EMPATADOS O PERDIDOS QUE LUEGO SERÁN MOSTRADOS AL USUARIO.
    //LAS COMPARACIONES SE HACEN CON LAS CONSTANTES GLOBALES DECLARADAS AL PRINCIPIO.

    calcularPuntos() {

        //MUESTRO EN CADA CARGA POR QUE Nº DE PARTIDO INGRESADO VA EL USUARIO.
        for (let i = 0; i < this.partidosJugados; i++) {
            this.resultado = prompt(`${this.nombreEquipo} ha jugado ${this.partidosJugados} partidos. Ingrese el resultado Nº ${i + 1}. GANO, EMPATO o PERDIO.`).toUpperCase();

            //VALIDACIÓN DEL DATO INGRESADO POR EL USUARIO
            while (this.resultado !== ganar && this.resultado !== empatar && this.resultado !== perder) {
                this.resultado = prompt(`INGRESO INCORRECTO. Ingrese el resultado Nº ${i + 1} .GANO, EMPATO o PERDIO.`).toUpperCase();
            }

            switch (this.resultado) {
                case (ganar):
                    this.puntos = this.puntos += ptsGanar;
                    this.partidosGanados++;
                    break;
                case (empatar):
                    this.puntos = this.puntos += ptsEmpatar;
                    this.partidosEmpatados++;
                    break;
                default:
                    this.puntos = this.puntos += ptsPerder;
                    this.partidosPerdidos++;
                    break;
            }
        }
    }

    //FUNCION QUE RETORNARÁ LOS PARTIDOS JUGADOS, LOS PUNTOS OBTENIDOS Y LA CANTIDAD DE VICTORIAS, EMPATES O DERROTAS SEGÚN EL CASO.

    devolverEstadisticas() {
        if (this.partidosJugados === 0) {
            return `${this.nombreEquipo} no ha disputado ningun partido.`;

        } else {
            return `Ha finalizado la carga. ${this.nombreEquipo} disputó ${this.partidosJugados} partidos y obtuvo ${this.puntos} puntos.
            Cantidad de victorias: ${this.partidosGanados}, cantidad de empates: ${this.partidosEmpatados} y cantidad de derrotas: ${this.partidosPerdidos}`;
        }
    }

}

//INSTANCIO EL OBJETO EQUIPO 1 Y UTILIZO LOS MÉTODOS CREADOS.
const equipo1 = new Fixture({nombreEquipo:"", resultado:"", partidosJugados:"", partidosGanados:"", partidosEmpatados:"", partidosPerdidos:"", puntos:""});
equipo1.pedirNombreEquipo();
equipo1.pedirPartidosJugados();
equipo1.calcularPuntos();
alert(equipo1.devolverEstadisticas());