class EquipoC{
    constructor(id, pais, partidosJugados, partidosGanados, partidosEmpatados, partidosPerdidos, puntos, bandera){
        this.id = id;
        this.pais = pais;
        this.partidosJugados = partidosJugados;
        this.partidosGanados = partidosGanados;
        this.partidosEmpatados = partidosEmpatados;
        this.partidosPerdidos = partidosPerdidos;
        this.puntos = puntos;
        this.bandera = bandera;
    }

}


class Equipo {
    constructor(id, nombre, grupo, bandera) {
        this.id = id;
        this.nombre = nombre;     
        this.grupo = grupo;
        this.bandera = bandera;
    }
    

}

/* FASE GRUPOS */

//GRUPO A - OBJETOS Y ARRAY DE GRUPO CON LOS OBJETOS DE LA CLASE EQUIPO
const catar = new Equipo("cat", "Qatar", "A", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Catar-Bandera-Asia.png");
const ecuador = new Equipo("ecu", "Ecuador","A","https://www.mundoprimaria.com/wp-content/uploads/2020/04/Ecuador-Bandera-America.png");
const senegal = new Equipo("sen", "Senegal","A", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Senegal-Bandera-Africa.png");
const holanda = new Equipo("hol", "Holanda","A",  "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Pa%C3%ADses-Bajos-Bandera-Europa.png");
const grupoA = [catar, ecuador, senegal, holanda];

//GRUPO B - OBJETOS Y ARRAY DE GRUPO CON LOS OBJETOS DE LA CLASE EQUIPO
const inglaterra = new Equipo("ing", "Inglaterra", "B", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/1920px-Flag_of_England.svg.png");
const iran = new Equipo("ira", "Iran","B", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Ir%C3%A1n-Bandera-Asia.png");
const estadosUnidos = new Equipo("eua", "EE.UU", "B", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/EEUU-Bandera-America.png");
const gales = new Equipo("gal", "Gales","B", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Flag_of_Wales.svg/1920px-Flag_of_Wales.svg.png");

const grupoB = [inglaterra, iran, estadosUnidos, gales];

//GRUPO C - OBJETOS Y ARRAY DE GRUPO CON LOS OBJETOS DE LA CLASE EQUIPO
const argentina = new Equipo("arg", "Argentina", "C", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Argentina-Bandera-America.png");
const arabiaSaudita = new Equipo("sau", "Arabia","C", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Arabia-Saudita-Bandera-Asia.png");
const mexico = new Equipo("mex", "Mexico","C","https://www.mundoprimaria.com/wp-content/uploads/2020/04/M%C3%A9xico-Bandera-America.png");
const polonia = new Equipo("pol", "Polonia","C",  "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Polonia-Bandera-Europa.png");

const grupoC = [argentina, arabiaSaudita, mexico, polonia];
 


//GRUPO D - OBJETOS Y ARRAY DE GRUPO CON LOS OBJETOS DE LA CLASE EQUIPO. FALTA JUGARSE UN REPECHAJE.
const francia = new Equipo("fra", "Francia","D", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Francia-Bandera-Europa.png");
const dinamarca = new Equipo("din", "Dinamarca","D", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Dinamarca-Bandera-Europa.png");
const tunez = new Equipo("tun", "Tunez","D", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/T%C3%BAnez-Bandera-Africa.png");
const australia = new Equipo("aus", "Australia","D",  "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Australia-Bandera-Ocean%C3%ADa.png")

const grupoD = [francia, dinamarca, tunez, australia];

//GRUPO E - OBJETOS Y ARRAY DE GRUPO CON LOS OBJETOS DE LA CLASE EQUIPO. FALTA JUGARSE UN REPECHAJE.
const españa = new Equipo("esp", "España", "E", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Espa%C3%B1a-Bandera-Europa.png");
const alemania = new Equipo("ale", "Alemania","E",  "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Alemania-Bandera-Europa.png");
const japon = new Equipo("jap", "Japon", "E", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Jap%C3%B3n-Bandera-Asia.png");
const costaRica = new Equipo("ric", "C. Rica", "E", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Costa-Rica-Bandera-America.png");

const grupoE = [españa, alemania, japon, costaRica];

//GRUPO F - OBJETOS Y ARRAY DE GRUPO CON LOS OBJETOS DE LA CLASE EQUIPO
const belgica = new Equipo("bel", "Belgica", "F", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/B%C3%A9lgica-Bandera-Europa.png");
const canada = new Equipo("can", "Canada","F", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Canad%C3%A1-Bandera-America.png");
const marruecos = new Equipo("mar", "Marruecos","F",  "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Marruecos-Bandera-Africa.png");
const croacia = new Equipo("croacia", "Croacia","F",  "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Croacia-Bandera-Europa.png");

const grupoF = [belgica, canada, marruecos, croacia];

//GRUPO G - OBJETOS Y ARRAY DE GRUPO CON LOS OBJETOS DE LA CLASE EQUIPO
const brasil = new Equipo("bra", "Brasil", "G", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Brasil-Bandera-America.png");
const serbia = new Equipo("ser", "Serbia","G", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Serbia-Bandera-Europa.png");
const suiza = new Equipo("sui", "Suiza","G",  "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Suiza-Bandera-Europa.png");
const camerun = new Equipo("cam", "Camerun", "G","https://www.mundoprimaria.com/wp-content/uploads/2020/04/Camer%C3%BAn-Bandera-Africa.png");

const grupoG = [brasil, serbia, suiza, camerun];

//GRUPO H - OBJETOS Y ARRAY DE GRUPO CON LOS OBJETOS DE LA CLASE EQUIPO
const portugal = new Equipo("por", "Portugal", "H",  "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Portugal-Bandera-Europa.png");
const ghana = new Equipo("gha", "Ghana", "H", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Ghana-Bandera-Africa.png");
const uruguay = new Equipo("uru", "Uruguay", "H","https://www.mundoprimaria.com/wp-content/uploads/2020/04/Uruguay-Bandera-America.png");
const corea = new Equipo("cor", "Corea","H",  "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Corea-del-Sur-Bandera-Asia.png");

const grupoH = [portugal, ghana, uruguay, corea];


//CREO UN ARRAY CON TODOS LOS ARRAY DE CADA GRUPO PARA PODER ACCEDER A LOS 32 OBJETOS EQUIPO

 const equiposClasificados = [...grupoA, ...grupoB, ...grupoC, ...grupoD, ...grupoE, ...grupoF, ...grupoG, ...grupoH] 

/* OCTAVOS DE FINAL */
 const cruce1 = [];
 const cruce2 = [];
 const cruce3 = [];
 const cruce4 = [];
 
 
 localStorage.setItem('grupoB', grupoB)
 localStorage.setItem('grupoC', grupoC)
 localStorage.setItem('grupoD', grupoD)
 localStorage.setItem('grupoE', grupoE)
 localStorage.setItem('grupoF', grupoF)
 localStorage.setItem('grupoG', grupoG)
 localStorage.setItem('grupoH', grupoH)


let grupoAJSON = JSON.stringify(grupoA)
let grupoBJSON = JSON.stringify(grupoB)
let grupoCJSON = JSON.stringify(grupoC)
let grupoDJSON = JSON.stringify(grupoD)
let grupoEJSON = JSON.stringify(grupoE)
let grupoFJSON = JSON.stringify(grupoF)
let grupoGJSON = JSON.stringify(grupoG)
let grupoHJSON = JSON.stringify(grupoH)

localStorage.setItem('grupoA', grupoAJSON)
localStorage.setItem('grupoB', grupoBJSON)
localStorage.setItem('grupoC', grupoCJSON)
localStorage.setItem('grupoD', grupoDJSON)
localStorage.setItem('grupoE', grupoEJSON)
localStorage.setItem('grupoF', grupoFJSON)
localStorage.setItem('grupoG', grupoGJSON)
localStorage.setItem('grupoH', grupoHJSON)

let grupoAfromStorage = localStorage.getItem('grupoA')
let grupoBfromStorage = localStorage.getItem('grupoB')
let grupoCfromStorage = localStorage.getItem('grupoC')
let grupoDfromStorage = localStorage.getItem('grupoD')
let grupoEfromStorage = localStorage.getItem('grupoE')
let grupoFfromStorage = localStorage.getItem('grupoF')
let grupoGfromStorage = localStorage.getItem('grupoG')
let grupoHfromStorage = localStorage.getItem('grupoH')



let grupoAback = JSON.parse(grupoAfromStorage)
let grupoBback = JSON.parse(grupoBfromStorage)
let grupoCback = JSON.parse(grupoCfromStorage)
let grupoDback = JSON.parse(grupoDfromStorage)
let grupoEback = JSON.parse(grupoEfromStorage)
let grupoFback = JSON.parse(grupoFfromStorage)
let grupoGback = JSON.parse(grupoGfromStorage)
let grupoHback = JSON.parse(grupoHfromStorage)

console.log(grupoAback, grupoBback,grupoCback,grupoDback,grupoEback,grupoFback,grupoGback,grupoHback,) 

