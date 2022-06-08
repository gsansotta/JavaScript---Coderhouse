//CONVIERTO EN CLASE EL DESAFIO 1 Y LE AGREGO SUS METODOS PARA QUE MANTENGA LA FUNCIONALIDAD//

//CONSTANTES//
const ganar = "GANO";
const empatar = "EMPATO";
const perder = "PERDIO";
const finalizar = "FIN";
const ptsGanar = 3;
const ptsEmpatar = 1;
const ptsPerder = 0;

//DECLARO LA CLASE, SUS ATRIBUTOS Y SUS MÉTODOS//
class Fixture{
    constructor(nombreEquipo, resultado, partidosJugados = 0, partidosGanados = 0, partidosEmpatados = 0, partidosPerdidos = 0, puntos = 0 )
    {
        this.nombreEquipo = nombreEquipo;
        this.resultado = resultado;
        this.partidosJugados = partidosJugados;
        this.partidosGanados = partidosGanados;
        this.partidosEmpatados = partidosEmpatados;
        this.partidosPerdidos = partidosPerdidos;
        this.puntos = puntos

    }
}