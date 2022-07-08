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
            <button type="button" class="btn btn-light" onclick="${funcionDinamica}('${Equipo.id}')"><h6>${Equipo.nombre}</h6></button>
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

*/


function primerCruce(id) {
    let equiposGrupoA = [];
    let equiposGrupoB = [];
    let prueba = cruce1.filter(actual => actual.grupo == "A")
    for (const equipo of equiposClasificados) {
        if (equipo.id == id && !cruce1.includes(equipo)) {
            console.log(cruce1)
            if (cruce1.length < 4) {

                if (cruce1.filter(actual => actual.grupo == 'A').length < 2 && equipo.grupo == "A") {
                    equiposGrupoA.push(equipo) 
                }                


                if (cruce1.filter(actual => actual.grupo == 'B').length < 2 && equipo.grupo == "B" && prueba.length>1) {
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
    for (const equipo of equiposClasificados) {
        if (equipo.id == id && !cruce2.includes(equipo)) {
            console.log(cruce2)
            if (cruce2.length < 4) {

                if (cruce2.filter(actual => actual.grupo == 'C').length < 2 && equipo.grupo == "C") {
                    equiposGrupoC.push(equipo)

                }
                if (cruce2.filter(actual => actual.grupo == 'D').length < 2 && equipo.grupo == "D") {
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
    for (const equipo of equiposClasificados) {
        if (equipo.id == id && !cruce3.includes(equipo)) {
            console.log(cruce3)
            if (cruce3.length < 4) {

                if (cruce3.filter(actual => actual.grupo == 'E').length < 2 && equipo.grupo == "E") {
                    equiposGrupoE.push(equipo)

                }
                if (cruce3.filter(actual => actual.grupo == 'F').length < 2 && equipo.grupo == "F") {
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
    for (const equipo of equiposClasificados) {
        if (equipo.id == id && !cruce4.includes(equipo)) {
            console.log(cruce4)
            if (cruce4.length < 4) {

                if (cruce4.filter(actual => actual.grupo == 'G').length < 2 && equipo.grupo == "G") {
                    equiposGrupoG.push(equipo)

                }
                if (cruce4.filter(actual => actual.grupo == 'H').length < 2 && equipo.grupo == "H") {
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

// const primeroA = document.getElementById('1A')
// const segundoA = document.getElementById('2A')
/* const primeroC = document.getElementById('1C')
const segundoC = document.getElementById('2C')
const primeroD = document.getElementById('1D')
const segundoD = document.getElementById('2D')
const primeroE = document.getElementById('1E')
const segundoE = document.getElementById('2E')
const primeroF = document.getElementById('1F')
const segundoF = document.getElementById('2F')
const primeroG = document.getElementById('1G')
const segundoG = document.getElementById('2G')
const primeroH = document.getElementById('1H')
const segundoH = document.getElementById('2H') */

function cruzarEquipo(cruce,ubicacion){
const primeroA = document.getElementById(`1${ubicacion[0]}`);
const segundoA = document.getElementById(`2${ubicacion[1]}`);
const primeroB = document.getElementById(`1${ubicacion[2]}`)
const segundoB = document.getElementById(`2${ubicacion[3]}`)


    primeroA.innerHTML = `          
    <div class="div">
    <div id="equipo">
    <img src="${cruce[0]['bandera']}" class="img-thumbnail" alt="${cruce[0]['nombre']}-error" >        
    <button type="button" class="btn btn-light" onclick="('${cruce[0]['id']}')">${cruce[0]['nombre']}</button>
    </div>`

    segundoA.innerHTML = `          
    <div class="div">
    <div id="equipo">
    <img src="${cruce[1]['bandera']}" class="img-thumbnail" alt="${cruce[1]['nombre']}-error" >        
    <button type="button" class="btn btn-light" onclick="('${cruce[1]['id']}')">${cruce[1]['nombre']}</button>
    </div>`

    primeroB.innerHTML = `          
    <div class="div">
    <div id="equipo">
    <img src="${cruce[2]['bandera']}" class="img-thumbnail" alt="${cruce[2]['nombre']}-error" >        
    <button type="button" class="btn btn-light" onclick="('${cruce[2]['id']}')">${cruce[2]['nombre']}</button>
    </div>`

    segundoB.innerHTML = `          
    <div class="div">
    <div id="equipo">
    <img src="${cruce[3]['bandera']}" class="img-thumbnail" alt="${cruce[3]['nombre']}-error" >        
    <button type="button" class="btn btn-light" onclick="('${cruce[3]['id']}')">${cruce[3]['nombre']}</button>
    </div>`  


   
}

