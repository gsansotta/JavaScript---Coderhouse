const ptsGanar = 3;
const ptsEmpatar = 1;
const ptsPerder = 0;
let primerClasificado;
let segundoClasificado;


class Equipo {
    constructor(id, nombre, partidosJugados = 0, resultado, golesFavor, golesContra, bandera) {
        this.id = id;
        this.nombre = nombre;
        this.partidosJugados = partidosJugados;
        this.resultado = resultado;
        this.golesFavor = golesFavor;
        this.golesContra = golesContra;
        this.bandera = bandera;
    }
}


//GRUPO A - OBJETOS Y ARRAY DE GRUPO CON LOS OBJETOS DE LA CLASE EQUIPO
const catar = new Equipo("cat", "Qatar", "", "", "", "", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Catar-Bandera-Asia.png");
const ecuador = new Equipo("ecu", "Ecuador", "", "", "", "", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Ecuador-Bandera-America.png");
const senegal = new Equipo("sen", "Senegal", "", "", "", "", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Senegal-Bandera-Africa.png");
const holanda = new Equipo("hol", "Holanda", "", "", "", "", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Pa%C3%ADses-Bajos-Bandera-Europa.png");
const grupoA = [catar, ecuador, senegal, holanda];

//GRUPO B - OBJETOS Y ARRAY DE GRUPO CON LOS OBJETOS DE LA CLASE EQUIPO
const inglaterra = new Equipo("ing", "Inglaterra", "", "", "", "", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/1920px-Flag_of_England.svg.png");
const iran = new Equipo("ira", "Iran", "", "", "", "", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Ir%C3%A1n-Bandera-Asia.png");
const estadosUnidos = new Equipo("eua", "Estados Unidos", "", "", "", "", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/EEUU-Bandera-America.png");
const gales = new Equipo("gal", "Gales", "", "", "", "", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Flag_of_Wales.svg/1920px-Flag_of_Wales.svg.png");

const grupoB = [inglaterra, iran, estadosUnidos, gales];

//GRUPO C - OBJETOS Y ARRAY DE GRUPO CON LOS OBJETOS DE LA CLASE EQUIPO
const argentina = new Equipo("arg", "Argentina", 1, 3, 3, 1 , "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Argentina-Bandera-America.png");
const arabiaSaudita = new Equipo("sau", "Arabia Saudita", 1, 0, 1, 3, "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Arabia-Saudita-Bandera-Asia.png");
const mexico = new Equipo("mex", "Mexico", "", "", "", "", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/M%C3%A9xico-Bandera-America.png");
const polonia = new Equipo("pol", "Polonia", "", "", "", "", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Polonia-Bandera-Europa.png");

const grupoC = [argentina, arabiaSaudita, mexico, polonia];



//GRUPO D - OBJETOS Y ARRAY DE GRUPO CON LOS OBJETOS DE LA CLASE EQUIPO. FALTA JUGARSE UN REPECHAJE.
const francia = new Equipo("fra", "Francia", "", "", "", "", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Francia-Bandera-Europa.png");
const dinamarca = new Equipo("din", "Dinamarca", "", "", "", "", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Dinamarca-Bandera-Europa.png");
const tunez = new Equipo("tun", "Tunez", "", "", "", "", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/T%C3%BAnez-Bandera-Africa.png");
const australia = new Equipo("aus", "Australia", "", "", "", "", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Australia-Bandera-Ocean%C3%ADa.png")

const grupoD = [francia, dinamarca, tunez, australia];

//GRUPO E - OBJETOS Y ARRAY DE GRUPO CON LOS OBJETOS DE LA CLASE EQUIPO. FALTA JUGARSE UN REPECHAJE.
const españa = new Equipo("esp", "España", "", "", "", "", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Espa%C3%B1a-Bandera-Europa.png");
const alemania = new Equipo("ale", "Alemania", "", "", "", "", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Alemania-Bandera-Europa.png");
const japon = new Equipo("jap", "Japon", "", "", "", "", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Jap%C3%B3n-Bandera-Asia.png");
const costaRica = new Equipo("ric", "Costa Rica", "", "", "", "", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Costa-Rica-Bandera-America.png");

const grupoE = [españa, alemania, japon, costaRica];

//GRUPO F - OBJETOS Y ARRAY DE GRUPO CON LOS OBJETOS DE LA CLASE EQUIPO
const belgica = new Equipo("bel", "Belgica", "", "", "", "", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/B%C3%A9lgica-Bandera-Europa.png");
const canada = new Equipo("can", "Canada", "", "", "", "", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Canad%C3%A1-Bandera-America.png");
const marruecos = new Equipo("mar", "Marruecos", "", "", "", "", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Marruecos-Bandera-Africa.png");
const croacia = new Equipo("croacia", "Croacia", "", "", "", "", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Croacia-Bandera-Europa.png");

const grupoF = [belgica, canada, marruecos, croacia];

//GRUPO G - OBJETOS Y ARRAY DE GRUPO CON LOS OBJETOS DE LA CLASE EQUIPO
const brasil = new Equipo("bra", "Brasil", "", "", "", "", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Brasil-Bandera-America.png");
const serbia = new Equipo("ser", "Serbia", "", "", "", "", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Serbia-Bandera-Europa.png");
const suiza = new Equipo("sui", "Suiza", "", "", "", "", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Suiza-Bandera-Europa.png");
const camerun = new Equipo("cam", "Camerun", "", "", "", "", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Camer%C3%BAn-Bandera-Africa.png");

const grupoG = [brasil, serbia, suiza, camerun];

//GRUPO H - OBJETOS Y ARRAY DE GRUPO CON LOS OBJETOS DE LA CLASE EQUIPO
const portugal = new Equipo("por", "Portugal", "", "", "", "", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Portugal-Bandera-Europa.png");
const ghana = new Equipo("gha", "Ghana", "", "", "", "", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Ghana-Bandera-Africa.png");
const uruguay = new Equipo("uru", "Uruguay", "", "", "", "", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Uruguay-Bandera-America.png");
const corea = new Equipo("cor", "Corea", "", "", "", "", "https://www.mundoprimaria.com/wp-content/uploads/2020/04/Corea-del-Sur-Bandera-Asia.png");

const grupoH = [portugal, ghana, uruguay, corea];


//CREO UN ARRAY CON TODOS LOS ARRAY DE CADA GRUPO PARA PODER ACCEDER A LOS 32 OBJETOS EQUIPO

const equiposClasificados = [...grupoA, ...grupoB, ...grupoC, ...grupoD, ...grupoE, ...grupoF, ...grupoG, ...grupoH]
