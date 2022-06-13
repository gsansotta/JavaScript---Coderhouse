//COMIENZO A PUNTEAR LO QUE VA A SER EL FIXTURE QATAR 2022. 


class Equipo{
    constructor(id, nombre, resultado, golesFavor, golesContra){
        this.id = id;
        this.nombre = nombre;
        this.resultado = resultado;
        this.golesFavor = golesFavor;
        this.golesContra = golesContra;
    }
}

//GRUPO A - OBJETOS Y ARRAY DE GRUPO CON LOS OBJETOS DE LA CLASE EQUIPO
const catar = new Equipo ("cat", "Qatar",  "",  "",  "");
const ecuador = new Equipo ("ecu", "Ecuador", "", "", "");
const senegal = new Equipo ("sen", "Senegal", "",  "",  "");
const holanda = new Equipo ("hol", "Holanda", "",  "",  "");
const grupoA = [catar, ecuador, senegal, holanda];

//GRUPO B - OBJETOS Y ARRAY DE GRUPO CON LOS OBJETOS DE LA CLASE EQUIPO
const inglaterra = new Equipo ("ing", "Inglaterra", "",  "",  "");
const iran = new Equipo ("ira", "Iran", "", "", "");
const estadosUnidos = new Equipo ( "eua", "Estados Unidos", "", "", "");
const gales = new Equipo ("gal", "Gales", "", "", "");

const grupoB = [inglaterra, iran, estadosUnidos, gales];

//GRUPO C - OBJETOS Y ARRAY DE GRUPO CON LOS OBJETOS DE LA CLASE EQUIPO
const argentina = new Equipo ("arg", "Argentina", "", "", "");
const ArabiaSaudita = new Equipo ("sau", "Arabia Saudita", "", "", "");
const mexico = new Equipo ("mex", "Mexico", "", "", "");
const polonia = new Equipo ("pol", "Polonia", "", "", "");


const grupoC = [argentina, ArabiaSaudita, mexico, polonia];

//GRUPO D - OBJETOS Y ARRAY DE GRUPO CON LOS OBJETOS DE LA CLASE EQUIPO
const francia = new Equipo ( "fra", "Francia", "", "", "");
const dinamarca = new Equipo ("din", "Dinamarca", "", "", "");
const tunez = new Equipo ("tun", "Tunez", "", "", "");

const grupoD = [francia, dinamarca, tunez];

//GRUPO E - OBJETOS Y ARRAY DE GRUPO CON LOS OBJETOS DE LA CLASE EQUIPO
const españa = new Equipo ("esp", "España", "", "", "");
const vacio = new Equipo ("",  "", "", "", "");
const alemania = new Equipo ( "ale", "Alemania", "", "", "");
const japon = new Equipo ("jap", "Japon", "", "", "");

const grupoE = [españa, vacio, alemania, japon];

//GRUPO F - OBJETOS Y ARRAY DE GRUPO CON LOS OBJETOS DE LA CLASE EQUIPO
const belgica = new Equipo ( "bel","Belgica", "", "", "");
const canada = new Equipo ( "can", "Canada", "", "", "");
const marruecos = new Equipo ("mar","Marruecos", "", "", "");
const croacia = new Equipo ( "croacia", "Croacia", "", "", "");

const grupoF = [belgica, canada, marruecos, croacia];

//GRUPO G - OBJETOS Y ARRAY DE GRUPO CON LOS OBJETOS DE LA CLASE EQUIPO
const brasil = new Equipo ( "bra", "Brasil", "", "", "");
const serbia = new Equipo ( "ser", "Serbia", "", "", "");
const suiza = new Equipo ( "sui", "Suiza", "", "", "");
const camerun = new Equipo ( "cam", "Camerun", "", "", "");

const grupoG = [brasil, serbia, suiza, camerun];

//GRUPO H - OBJETOS Y ARRAY DE GRUPO CON LOS OBJETOS DE LA CLASE EQUIPO
const portugal = new Equipo ("por", "Portugal", "", "", "");
const ghana = new Equipo ("gha", "Ghana", "", "", "");
const uruguay = new Equipo ("uru", "Uruguay", "", "", "");
const corea = new Equipo ("cor", "Corea", "", "", "");

const grupoH = [portugal, ghana, uruguay, corea];

console.log([grupoA, grupoB, grupoC, grupoD, grupoE, grupoF, grupoG, grupoH]);

//AGREGO EQUIPO GANADOR DE REPECHAJE PARA EL GRUPO D
const australia = new Equipo ("aus", "Australia", "", "", "");

grupoD.push(australia);
