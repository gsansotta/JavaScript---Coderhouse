const ganar = "GANO";
const empatar = "EMPATO";
const perder = "PERDIO";
const finalizar = "FIN";
const ptsGanar = 3;
const ptsEmpatar = 1;
const ptsPerder = 0;


class Equipo {
    constructor(id, nombre, resultado, puntos = 0, golesFavor = 0, golesContra = 0) {
        this.id = id;
        this.nombre = nombre;        
        this.resultado = resultado;
        this.puntos = puntos;
        this.golesFavor = golesFavor;
        this.golesContra = golesContra;
    }
}


const argentina = new Equipo("arg", "Argentina", "", "", "", "");
const arabiaSaudita = new Equipo("sau", "Arabia Saudita", "", "", "", "");
const mexico = new Equipo("mex", "Mexico", "", "", "", "");
const polonia = new Equipo("pol", "Polonia", "", "", "", "");

const grupoC = [argentina, arabiaSaudita, mexico, polonia];



for (const Equipo of grupoC) {
    for (const equipo1 of grupoC) {

        if (Equipo != equipo1) {

            Equipo.resultado = prompt(` Ingrese resultado de ${Equipo.nombre}  "GANO", "EMPATO" o "PERDIO" .`).toUpperCase();

            //VALIDACIÓN DEL DATO INGRESADO POR EL USUARIO
            while (Equipo.resultado !== ganar && Equipo.resultado !== empatar && Equipo.resultado !== perder) {
                this.resultado = prompt(`INGRESO INCORRECTO. Ingrese resultado de ${Equipo.nombre}  "GANO", "EMPATO" o "PERDIO"`).toUpperCase();
            }

            Equipo.golesFavor = Number(prompt(`Ingrese el los goles a favor de ${Equipo.nombre}`));
            Equipo.golesFavor += Equipo.golesFavor
            Equipo.golesContra = Number(prompt(`Ingrese el los goles en contra de ${Equipo.nombre}`));
            Equipo.golesContra += Equipo.golesContra

            switch (Equipo.resultado) {
                case (ganar):
                    Equipo.puntos = + Equipo.puntos + ptsGanar;
                    break;
                case (empatar):
                    Equipo.puntos = + Equipo.puntos + ptsEmpatar;
                    break;
                default:
                    Equipo.puntos = + Equipo.puntos + ptsPerder;
                    break;
            }
        }

    }

}
