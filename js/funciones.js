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
 const clasificadosOctavos = []

 
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

/*  NUEVA VERSIÓN DEL PROYECTO FIXTURE MUNDIAL CATAR 2022

 EL USUARIO SELECCIONARÁ DOS EQUIPOS POR GRUPO (LOS DOS CLASIFICADOS DE LA FASE DE GRUPOS) Y AUTOMÁTICAMENTE
 SE IRÁN ARMANDO LOS CRUCES DINAMICAMENTE HASTA LLEGAR A LA FINAL.



*/



/* 

MEDIANTE USO DEL DOM RENDERIZO LOS GRUPOS QUE SE MUESTRAN EN PANTALLA.
* APLICO ONCLICK PARA DESPUES UTILIZAR EL BOTON PARA SELECCIONAR EL EQUIPO
*EL PARAMETRO FUNCION DINAMICA ME PERMITE AGRUPAR EN PARES LOS GRUPÓS PARA (AB, CD, EF, EG) PARA
LUEGO PODER ARMAR CORRECTAMENTE LOS CRUCES DE OCTAVOS DE FINAL SEGUN MI ESCTRUCTURA DE DESARROLLO

*/
const cruces = document.getElementById('fixture')

function mostrarEquipos(grupo, funcionDinamica) {

    let grupos = document.createElement('section')
    grupos.className = 'grupo'
    var i = 0;
    for (const Equipo of grupo) {


        grupos.innerHTML +=
            `              
         <div class="div">
         <div id="equipo">
            <img src="${Equipo.bandera}" class="img-thumbnail" alt="${Equipo.nombre}-error" >        
            <button type="button" class="btn btn-light" onclick="${funcionDinamica}('${Equipo.id}')"><p>${Equipo.nombre}</p></button>
         </div>`
        i++;
    }
    cruces.appendChild(grupos);

}



mostrarEquipos(grupoA,"primerCruce")
mostrarEquipos(grupoB,"primerCruce")
mostrarEquipos(grupoC,"segundoCruce")
mostrarEquipos(grupoD,"segundoCruce")
mostrarEquipos(grupoE,"tercerCruce")
mostrarEquipos(grupoF,"tercerCruce")
mostrarEquipos(grupoG,"cuartoCruce")
mostrarEquipos(grupoH,"cuartoCruce")



/* FUNCION PARA ARMAR LOS CRUCES DE OCTAVOS DE FINAL (GRUPO A CRUZA CON GRUPO B)

LA MISMA FUNCION VOY A REPLICAR PARA LOS DEMAS CRUCES.
CREO ARRAYS LOCALES PARA TRAER LOS EQUIPOS DEL LOCAL STORAGE Y LUEGP PUSHEARLOS A LOS ARRAY DECLARADOS EN EL ARCHIVO GRUPOS.JS

PARA TRAER LOS OBJETO EQUIPOS UTILIZO EN EL FOR OF LA MATRIZ EQUIPOS CLASIFICADOS YA QUE ALLÌ TENGO LOS 32 OBJETO EQUIPO

CON LOS IF Y LOS FILTER ENCUENTRO AL EQUIPO POR SU ID AL MOMENTO SE SELECCIONARLO Y ME ASEGURO QUE LA SELECCION CORTE CUANDO
YA SE ELIGEN LOS 4 EQUIPOS (2 DE CADA GRUPO SEGUN EL CRUCE) COMO ASI TAMBIEN ME ASEGURO DE QUE EL USUARIO NO PUEDA ELEGIR DOS VECES
EL MISMO EQUIPO.

MISMA LOGICA APLICO AL FILTER PARA QUE EL ALGORITMO SEPA CUANDO CORTAR EL PUSH EN LOS ARRAYS LOCALES.

CON LA VARIABLE LOCAL AJUSTO ELECCION ME ASEGURO QUE NO PUEDAN ELEGIR EN DESORDEN LOS GRUPOS PARA QUE LOS CRUCES QUEDEN ORDENADOS CORRECTAMENTE

*/


function primerCruce(id) {
    let equiposGrupoA = [];
    let equiposGrupoB = [];
    let ajustoEleccion = cruce1.filter(actual => actual.grupo == "A")
    for (const equipo of equiposClasificados) {
        if (equipo.id == id && !cruce1.includes(equipo)) {
            console.log(cruce1)
            if (cruce1.length < 4) {

                if (cruce1.filter(actual => actual.grupo == 'A').length < 2 && equipo.grupo == "A") {
                    equiposGrupoA.push(equipo) 
                }                


                if (cruce1.filter(actual => actual.grupo == 'B').length < 2 && equipo.grupo == "B" && ajustoEleccion.length>1) {
                    equiposGrupoB.push(equipo)
                } 
            }
        }

    }

    /* CUANDO SALGO DEL FOR OF CON LOS 4 QEQUIPOS, LOS PUSHEO AL ARRAY CRUCE1 Y LO SETEO EN EL LOCAL STORAGE PARA 
    PARA LUEGO TRAERLOS COMO OBJETO CON LA FUNCION RECUPERO CRUCE*/
    cruce1.push(...equiposGrupoA)
    cruce1.push(...equiposGrupoB)
    localStorage.setItem('cruce1', JSON.stringify(cruce1))
    
    /* mostrarEquiposOctavos(equiposGrupoA)
    mostrarEquiposOctavos(equiposGrupoB) */
    cruzarEquipo(cruce1,["A","A","B","B"])
    
}

const recuperoCruceUno = () => {
    let cruceUnoRecuperado = JSON.parse(localStorage.getItem("cruce1"));
    console.log(cruceUnoRecuperado)   

}
recuperoCruceUno();

//MUESTRO POR CONSOLA EL PRIMER CRUCE DEL LOCAL STORAGE//
console.log(JSON.parse(localStorage.getItem('cruce1')))



///////////////////////////////////////////////////////SEGUNDO CRUCE GRUPO C-D///////////////////////////////////////////////////////


function segundoCruce(id) {
    let equiposGrupoC = [];
    let equiposGrupoD = [];
    let ajustoEleccion = cruce2.filter(actual => actual.grupo == "C")
    for (const equipo of equiposClasificados) {
        if (equipo.id == id && !cruce2.includes(equipo)) {
            console.log(cruce2)
            if (cruce2.length < 4) {

                if (cruce2.filter(actual => actual.grupo == 'C').length < 2 && equipo.grupo == "C") {
                    equiposGrupoC.push(equipo)

                }
                if (cruce2.filter(actual => actual.grupo == 'D').length < 2 && equipo.grupo == "D" && ajustoEleccion.length>1) {
                    equiposGrupoD.push(equipo)
                }

            }
        }

    }

    cruce2.push(...equiposGrupoC)
    cruce2.push(...equiposGrupoD)
    localStorage.setItem('cruce2', JSON.stringify(cruce2))

   /*  mostrarEquiposOctavos(equiposGrupoC)
    mostrarEquiposOctavos(equiposGrupoD) */
    cruzarEquipo(cruce2,["C","C","D","D"])
}
const recuperoCruceDos = () => {
    let cruceDosRecuperado = JSON.parse(localStorage.getItem("cruce2"));
    console.log(cruceDosRecuperado)

}
recuperoCruceDos();

//MUESTRO POR CONSOLA EL SEGUNDO CRUCE DEL LOCAL STORAGE//
console.log(JSON.parse(localStorage.getItem('cruce2')))




///////////////////////////////////////////////////////TERCER CRUCE GRUPO E-F///////////////////////////////////////////////////////


function tercerCruce(id) {
    let equiposGrupoE = [];
    let equiposGrupoF = [];
    let ajustoEleccion = cruce3.filter(actual => actual.grupo == "E")
    for (const equipo of equiposClasificados) {
        if (equipo.id == id && !cruce3.includes(equipo)) {
            console.log(cruce3)
            if (cruce3.length < 4) {

                if (cruce3.filter(actual => actual.grupo == 'E').length < 2 && equipo.grupo == "E") {
                    equiposGrupoE.push(equipo)

                }
                if (cruce3.filter(actual => actual.grupo == 'F').length < 2 && equipo.grupo == "F"  && ajustoEleccion.length>1) {
                    equiposGrupoF.push(equipo)
                }

            }
        }

    }

    cruce3.push(...equiposGrupoE)
    cruce3.push(...equiposGrupoF)
    localStorage.setItem('cruce3', JSON.stringify(cruce3))

   /*  mostrarEquiposOctavos(equiposGrupoE)
    mostrarEquiposOctavos(equiposGrupoF) */
    cruzarEquipo(cruce3,["E","E","F","F"])
}
const recuperoCruceTres = () => {
    let cruceTresRecuperado = JSON.parse(localStorage.getItem("cruce3"));
    console.log(cruceTresRecuperado)

}
recuperoCruceTres();

//MUESTRO POR CONSOLA EL TERCER CRUCE DEL LOCAL STORAGE//
console.log(JSON.parse(localStorage.getItem('cruce3')))


///////////////////////////////////////////////////////CUARTO CRUCE GRUPO G-H///////////////////////////////////////////////////////


function cuartoCruce(id) {
    let equiposGrupoG = [];
    let equiposGrupoH = [];
    let ajustoEleccion = cruce4.filter(actual => actual.grupo == "G")
    for (const equipo of equiposClasificados) {
        if (equipo.id == id && !cruce4.includes(equipo)) {
            console.log(cruce4)
            if (cruce4.length < 4) {

                if (cruce4.filter(actual => actual.grupo == 'G').length < 2 && equipo.grupo == "G") {
                    equiposGrupoG.push(equipo)

                }
                if (cruce4.filter(actual => actual.grupo == 'H').length < 2 && equipo.grupo == "H" && ajustoEleccion.length>1) {
                    equiposGrupoH.push(equipo)
                }

            }
        }

    }

    cruce4.push(...equiposGrupoG)
    cruce4.push(...equiposGrupoH)
    localStorage.setItem('cruce4', JSON.stringify(cruce4))

  /*   mostrarEquiposOctavos(equiposGrupoG)
    mostrarEquiposOctavos(equiposGrupoH) */
    cruzarEquipo(cruce4,["G","G","H","H"])
}
const recuperoCruceCuatro = () => {
    let cruceCuatroRecuperado = JSON.parse(localStorage.getItem("cruce4"));
    console.log(cruceCuatroRecuperado)

}
recuperoCruceCuatro();

//MUESTRO POR CONSOLA EL CUARTO CRUCE DEL LOCAL STORAGE//
console.log(JSON.parse(localStorage.getItem('cruce4')))



/* FUNCION PARA IMPRIMIR EN PANTALLA MEDIANTE DOM LOS CRUCES DE OCTAVOS EN FUNCION DE LA SELECCION DEL USUARIO */

const crucesOctavos = document.getElementById('octavos')

function mostrarEquiposOctavos(cruce) {
    
    
    let crucesOct = document.createElement('section')
    crucesOct.className = 'octavosFinal'

    cruce.forEach(Equipo => {
        
       
        crucesOct.innerHTML =

            `          
        <div class="div">
        <div id="equipo">
        <img src="${Equipo.bandera}" class="img-thumbnail" alt="${Equipo.nombre}-error" >        
        <button type="button" class="btn btn-light" onclick="('${Equipo.id}')">${Equipo.nombre}</button>
        </div>`


        crucesOctavos.appendChild(crucesOct);
        

    });

}


function cruzarEquipo(cruce,ubicacion){
const primeroA = document.getElementById(`1${ubicacion[0]}`);
const segundoA = document.getElementById(`2${ubicacion[1]}`);
const primeroB = document.getElementById(`1${ubicacion[2]}`)
const segundoB = document.getElementById(`2${ubicacion[3]}`)


    primeroA.innerHTML = `          
    <div class="div">
    <div id="equipo" >
    <img src="${cruce[0]['bandera']}" class="img-thumbnail" alt="${cruce[0]['nombre']}-error" >        
    <button type="button" class="btn btn-light" onclick="('${cruce[0]['id']}')"><p>${cruce[0]['nombre']}</p></button>
    </div>`

    segundoA.innerHTML = `          
    <div class="div">
    <div id="equipo">
    <img src="${cruce[1]['bandera']}" class="img-thumbnail" alt="${cruce[1]['nombre']}-error" >        
    <button type="button" class="btn btn-light" onclick="('${cruce[1]['id']}')"><p>${cruce[1]['nombre']}</p></button>
    </div>`

    primeroB.innerHTML = `          
    <div class="div">
    <div id="equipo">
    <img src="${cruce[2]['bandera']}" class="img-thumbnail" alt="${cruce[2]['nombre']}-error" >        
    <button type="button" class="btn btn-light" onclick="('${cruce[2]['id']}')"><p>${cruce[2]['nombre']}</p></button>
    </div>`

    segundoB.innerHTML = `          
    <div class="div">
    <div id="equipo">
    <img src="${cruce[3]['bandera']}" class="img-thumbnail" alt="${cruce[3]['nombre']}-error" >        
    <button type="button" class="btn btn-light" onclick="('${cruce[3]['id']}')"><p>${cruce[3]['nombre']}</p></button>
    </div>`  

   
}

