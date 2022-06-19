//DECLARO LAS CONTANTES Y VARIABLES NECESARIAS

const ptsGanar = 3;
const ptsEmpatar = 1;
const ptsPerder = 0;
let primerClasificado;
let segundoClasificado;

/* CREO LA CLASE EQUIPO CON LA QUE INSTANCIARÉ LOS OBJETOS EQUIPO. LOS ATRIBUTOS SON LOS QUE NECESITARÉ
   PARA LUEGO VER QUIEN CLASIFICA A OCTAVOS DE FINAL
*/

class Equipo {
    constructor(id, nombre, golesPorPartidos = 0, partidosJugados = 0, puntos = 0, golesFavor = 0, golesContra = 0) {
        this.id = id;
        this.nombre = nombre;        
        this.golesPorPartidos = golesPorPartidos;
        this.partidosJugados = partidosJugados;
        this.puntos = puntos;
        this.golesFavor = golesFavor;
        this.golesContra = golesContra;     
    }
    
}

//PARA EL SIMULADOR TOMARÉ EL GRUPO DE ARGENTINA

const argentina = new Equipo("arg", "Argentina", 0, 0, 0, 0, 0)
const arabiaSaudita = new Equipo("sau", "Arabia Saudita", 0, 0, 0, 0, 0);
const mexico = new Equipo("mex", "Mexico", 0, 0, 0, 0, 0);
const polonia = new Equipo("pol", "Polonia", 0, 0, 0, 0, 0);

const grupoC = [argentina, arabiaSaudita, mexico, polonia];

// FUNCION CON FOR OF ANIDADO PARA SIMULAR LOS TRES PARTIDOS QUE CADA EQUIPO TENDRÁ EN LA FASE DE GRUPOS.
    

const ejecutarPartidos = (grupo) => {
    for (const Equipo of grupo) { 

       // CON EL SEGUNDO FOR OF Y EL IF ME ASEGURO QUE NO RE REPITAN LOS CRUCES
        for (const equipo1 of grupo) {
            if ((Equipo != equipo1) && (equipo1.partidosJugados < 1)) {

                alert(`Ingrese el resultado del encuentro disputado entre ${Equipo.nombre} vs ${equipo1.nombre}`)

               //DE LA LÍNEA 49 A LA 57 PIDO LOS GOLES DE CADA EQUIPO POR PARTIDO Y ASIGNO LOS GOLES A FAVOR DE C/U QUE LUEGO USARÉ EN EL IF DE LA LÍNEA 60
                Equipo.golesPorPartidos = 0
                Equipo.golesPorPartidos = Number(prompt(`Ingrese los goles de ${Equipo.nombre}`));
                Equipo.golesFavor = + Equipo.golesFavor + Equipo.golesPorPartidos
                Equipo.partidosJugados++;


                equipo1.golesPorPartidos = 0
                equipo1.golesPorPartidos = Number(prompt(`Ingrese los goles de ${equipo1.nombre}`));
                equipo1.golesFavor = + equipo1.golesFavor + equipo1.golesPorPartidos

                //MEDIANTE ESTE IF ASIGNO LOS PUNTOS QUE LOS EQUIPOS OBTIENEN SEGUN EL RESULTADO, CON LOS CUALES LUEGO SE VERA QUIEN CLASIFICA A OCTAVOS 
                if (Equipo.golesPorPartidos == equipo1.golesPorPartidos) {
                    Equipo.puntos = + Equipo.puntos + ptsEmpatar;
                    equipo1.puntos = + equipo1.puntos + ptsEmpatar;
                } else if (Equipo.golesPorPartidos > equipo1.golesPorPartidos) {
                    Equipo.puntos = + Equipo.puntos + ptsGanar;
                } else {
                    equipo1.puntos = + equipo1.puntos + ptsGanar;
                }
            }
        }
    }
}



//CON ESTA FUNCION MUESTRO LAS ESTADISTICAS FINALES DE LA FASE DE GRUPOS
const devuelvoEstadisticas = (grupo) =>
grupo.forEach((equipo) => {
    console.log(`${equipo.nombre} obtuvo ${equipo.puntos} puntos e hizo ${equipo.golesFavor} goles`);
})

//CON ESTA FUNCION ORDENO LA TABLA FINAL SEGUN LA CANTIDAD DE PUNTOS, PARA LUEGO QUEDARME CON LOS DOS MAYORES
function devuelvoPosiciones(grupo){
    grupo.sort((Equipo, equipo1) => Equipo.puntos-equipo1.puntos);
    console.log(grupo)    
    primerClasificado = grupo[3];
    segundoClasificado = grupo[2];
    console.log(`Clasifican a octavos de final: En primer posición ${primerClasificado.nombre} y en segunda posición ${segundoClasificado.nombre}`);    
}


ejecutarPartidos(grupoC);
devuelvoEstadisticas (grupoC);
devuelvoPosiciones(grupoC);














