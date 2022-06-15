/* 

DESAFIO COMPLEMENTARIO - INCORPORAR ARRAYS

CREO LA CLASE EQUIPO PARA LUEGO INSTANCIAR LOS 30 EQUIPOS CLASIFICADOS. AÚN FALTAN DOS REPECHAJES 

PARA ESTE DESAFIO, SOLO UTILIZARE EL ATRIBUTO NOMBRE. LOS DEMAS LOS UTILIZARÉ PARA LA PRIMER ENTREGA FINAL.

*/


class Equipo{
    constructor(id, nombre, resultado, golesFavor, golesContra){
        this.id = id;
        this.nombre = nombre;
        this.resultado = resultado;
        this.golesFavor = golesFavor;
        this.golesContra = golesContra;
    }
}

//INSTANCIO LOS OBJETO EQUIPOS Y LOS INCORPORO EN SUS GRUPOS (CADA GRUPO ES UN ARRAY)


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
const arabiaSaudita = new Equipo ("sau", "Arabia Saudita", "", "", "");
const mexico = new Equipo ("mex", "Mexico", "", "", "");
const polonia = new Equipo ("pol", "Polonia", "", "", "");

const grupoC = [argentina, arabiaSaudita, mexico, polonia];

//GRUPO D - OBJETOS Y ARRAY DE GRUPO CON LOS OBJETOS DE LA CLASE EQUIPO. FALTA JUGARSE UN REPECHAJE.
const francia = new Equipo ( "fra", "Francia", "", "", "");
const dinamarca = new Equipo ("din", "Dinamarca", "", "", "");
const tunez = new Equipo ("tun", "Tunez", "", "", "");

const grupoD = [francia, dinamarca, tunez];

//GRUPO E - OBJETOS Y ARRAY DE GRUPO CON LOS OBJETOS DE LA CLASE EQUIPO. FALTA JUGARSE UN REPECHAJE.
const españa = new Equipo ("esp", "España", "", "", "");
const alemania = new Equipo ( "ale", "Alemania", "", "", "");
const japon = new Equipo ("jap", "Japon", "", "", "");

const grupoE = [españa, alemania, japon];

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

//MUESTRO POR CONSOLA LOS 8 GRUPOS CON LOS 30 EQUIPOS CLASIFICADOS HASTA EL MOMENTO
console.log([grupoA, grupoB, grupoC, grupoD, grupoE, grupoF, grupoG, grupoH])


//AGREGO CON FUNCION PUSH AL EQUIPO GANADOR DE REPECHAJE PARA EL GRUPO D
const australia = new Equipo ("aus", "Australia", "", "", "");
grupoD.push(australia);

//AGREGO CON FUNCION AL PUSH EQUIPO GANADOR DE REPECHAJE PARA EL GRUPO E
const costaRica = new Equipo ("ric", "Costa Rica", "", "", "");
grupoE.push(costaRica);

//////////////////////////////////   FINALIZO CARGA DE GRUPOS Y EQUIPOS QUE LOS COMPONEN   ////////////////////////////////// 

//CREO UN ARRAY CON TODOS LOS ARRAY DE CADA GRUPO PARA PODER ACCEDER A LOS 32 OBJETOS EQUIPO

const equiposClasificados = [...grupoA, ...grupoB,...grupoC,...grupoD,...grupoE,...grupoF,...grupoG,...grupoH]


//CON FUNCION FOR EACH MUESTRO LOS 32 EQUIPOS CLASIFICADOS AL MUNDIAL
console.log("Los 32 equipos clasificados para el mundial son:")
equiposClasificados.forEach( (equipo) => {
    console.log(equipo.nombre)
} )



//MEDIANTE LA FUNCION SOME LE PERMITO AL USUARIO BUSCAR SI UN EQUIPO CLASIFICÓ O NO AL MUNDIAL ACCEDIENDO AL ATRIBUTO NOMBRE DE LOS OBJETOS

let consulta =  prompt ("Ingrese el pais que desea saber si está clasificado al mundial").toUpperCase();


if(equiposClasificados.some((equipo) => (equipo.nombre).toUpperCase() === consulta )){
    alert (`${consulta} se ha clasificado al Mundial de Qatar 2022.`);
 } else{
    alert (`${consulta} no se ha clasificado al Mundial de Qatar 2022.`);
 }


 

 