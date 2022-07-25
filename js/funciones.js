/*  NUEVA VERSIÓN DEL PROYECTO FIXTURE MUNDIAL CATAR 2022

EL USUARIO SELECCIONARÁ DOS EQUIPOS POR GRUPO (LOS DOS CLASIFICADOS DE LA FASE DE GRUPOS) Y AUTOMÁTICAMENTE
SE IRÁN ARMANDO LOS CRUCES DINAMICAMENTE HASTA LLEGAR A LA FINAL.



*/



/*

MEDIANTE USO DEL DOM RENDERIZO LOS GRUPOS QUE SE MUESTRAN EN PANTALLA.
* APLICO ONCLICK PARA DESPUES UTILIZAR EL BOTON PARA SELECCIONAR EL EQUIPO
*EL PARAMETRO FUNCION DINAMICA ME PERMITE AGRUPAR EN PARES LOS GRUPÓS (AB, CD, EF, EG) PARA
LUEGO PODER ARMAR CORRECTAMENTE LOS CRUCES DE OCTAVOS DE FINAL SEGUN MI ESCTRUCTURA DE DESARROLLO

*/


const cruces = document.getElementById('fixture')


function mostrarEquipos(grupo, funcionDinamica, letraGrupo) {

    let grupos = document.createElement('div')
    grupos.className = 'grupo'
    var i = 0;

    grupos.innerHTML = `<h1 id ="letra-grupo">${letraGrupo}</h1> `;

    for (const Equipo of grupo) {


        grupos.innerHTML +=
            `    
            <div data-aos="fade-right" class="div">     
            <div class="equipo" id="${Equipo.id}">
            <img src="${Equipo.bandera}" class="img-thumbnail" alt="${Equipo.nombre}-error" >        
            <button type="button" class="btn btn-light" onclick="${funcionDinamica}('${Equipo.id}')" id="boton-cruces"><p>${Equipo.nombre}</p></button>
         </div>`
        i++;
    }
    cruces.appendChild(grupos);

}



mostrarEquipos(grupoA, "primerCruce", "A")
mostrarEquipos(grupoB, "primerCruce", "B")
mostrarEquipos(grupoC, "segundoCruce", "C")
mostrarEquipos(grupoD, "segundoCruce", "D")
mostrarEquipos(grupoE, "tercerCruce", "E")
mostrarEquipos(grupoF, "tercerCruce", "F")
mostrarEquipos(grupoG, "cuartoCruce", "G")
mostrarEquipos(grupoH, "cuartoCruce", "H")



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
    let ajustoEleccionA = cruce1.filter(actual => actual.grupo == "A")
    let ajustoEleccionB = cruce1.filter(actual => actual.grupo == 'B')

    for (const equipo of equiposClasificados) {
        if (equipo.id == id && !cruce1.includes(equipo)) {
            console.log(cruce1)
            let ocultoEquipo = document.getElementById(equipo.id)
            if (cruce1.length < 4) {

                if (ajustoEleccionA.length < 2 && equipo.grupo == "A") {
                    equiposGrupoA.push(equipo)
                    ocultoEquipo.style.display = 'none';
                }

                if (ajustoEleccionB.length < 2 && equipo.grupo == "B" && ajustoEleccionA.length > 1) {
                    equiposGrupoB.push(equipo)
                    ocultoEquipo.style.display = 'none';

                }


                if (equipo.grupo == "B" && ajustoEleccionA.length < 2) {
                    Swal.fire({
                        title: 'Primero debes elegir los dos equipos del grupo A',
                        background: ' #8a1538',
                        color: 'white',
                        imageUrl: 'https://cloudfront-us-east-1.images.arcpublishing.com/sdpnoticias/XUDGIXQ4TVGZDJ7KOQ2APWMKDI.jpg',
                        icon: 'warning',
                        imageWidth: 600,
                        imageHeight: 200,
                        confirmButtonText: 'OK'

                    })
                }

            }

        }
    }




    /* CUANDO SALGO DEL FOR OF CON LOS 4 QEQUIPOS, LOS PUSHEO AL ARRAY CRUCE1 Y LO SETEO EN EL LOCAL STORAGE PARA 
    PARA LUEGO TRAERLOS COMO OBJETO CON LA FUNCION RECUPERO CRUCE*/
    cruce1.push(...equiposGrupoA)
    cruce1.push(...equiposGrupoB)
    localStorage.setItem('cruce1', JSON.stringify(cruce1))
    cruzarEquipo(cruce1, ["A", "A", "B", "B"], "cuartos")
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
    let ajustoEleccionC = cruce2.filter(actual => actual.grupo == "C")
    let ajustoEleccionD = cruce2.filter(actual => actual.grupo == 'D')
    for (const equipo of equiposClasificados) {
        if (equipo.id == id && !cruce2.includes(equipo)) {
            console.log(cruce2)
            let ocultoEquipo = document.getElementById(equipo.id)
            if (cruce2.length < 4) {

                if (ajustoEleccionC.length < 2 && equipo.grupo == "C") {
                    equiposGrupoC.push(equipo)
                    ocultoEquipo.style.display = 'none';

                }
                if (ajustoEleccionD.length < 2 && equipo.grupo == "D" && ajustoEleccionC.length > 1) {
                    equiposGrupoD.push(equipo)
                    ocultoEquipo.style.display = 'none';
                }

                if (equipo.grupo == "D" && ajustoEleccionC.length < 2) {
                    Swal.fire({
                        title: 'Primero debes elegir los dos equipos del grupo C',
                        background: ' #8a1538',
                        color: 'white',
                        imageUrl: 'https://cloudfront-us-east-1.images.arcpublishing.com/sdpnoticias/XUDGIXQ4TVGZDJ7KOQ2APWMKDI.jpg',
                        icon: 'warning',
                        imageWidth: 600,
                        imageHeight: 200,
                        confirmButtonText: 'OK'
                    })
                }


            }
        }

    }

    cruce2.push(...equiposGrupoC)
    cruce2.push(...equiposGrupoD)
    localStorage.setItem('cruce2', JSON.stringify(cruce2))
    cruzarEquipo(cruce2, ["C", "C", "D", "D"], "cuartos")
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
    let ajustoEleccionE = cruce3.filter(actual => actual.grupo == "E")
    let ajustoEleccionF = cruce3.filter(actual => actual.grupo == 'F')
    for (const equipo of equiposClasificados) {
        if (equipo.id == id && !cruce3.includes(equipo)) {
            console.log(cruce3)
            let ocultoEquipo = document.getElementById(equipo.id)
            if (cruce3.length < 4) {

                if (ajustoEleccionE.length < 2 && equipo.grupo == "E") {
                    equiposGrupoE.push(equipo)
                    ocultoEquipo.style.display = 'none';

                }
                if (ajustoEleccionF.length < 2 && equipo.grupo == "F" && ajustoEleccionE.length > 1) {
                    equiposGrupoF.push(equipo)
                    ocultoEquipo.style.display = 'none';
                }

                if (equipo.grupo == "F" && ajustoEleccionE.length < 2) {
                    Swal.fire({
                        title: 'Primero debes elegir los dos equipos del grupo E',
                        background: ' #8a1538',
                        color: 'white',
                        imageUrl: 'https://cloudfront-us-east-1.images.arcpublishing.com/sdpnoticias/XUDGIXQ4TVGZDJ7KOQ2APWMKDI.jpg',
                        icon: 'warning',
                        imageWidth: 600,
                        imageHeight: 200,
                        confirmButtonText: 'OK'
                    })
                }

            }
        }

    }

    cruce3.push(...equiposGrupoE)
    cruce3.push(...equiposGrupoF)
    localStorage.setItem('cruce3', JSON.stringify(cruce3))
    cruzarEquipo(cruce3, ["E", "E", "F", "F"], "cuartos")
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
    let ajustoEleccionG = cruce4.filter(actual => actual.grupo == "G")
    let ajustoEleccionH = cruce4.filter(actual => actual.grupo == 'H')
    for (const equipo of equiposClasificados) {
        if (equipo.id == id && !cruce4.includes(equipo)) {
            console.log(cruce4)
            let ocultoEquipo = document.getElementById(equipo.id)
            if (cruce4.length < 4) {

                if (ajustoEleccionG.length < 2 && equipo.grupo == "G") {
                    equiposGrupoG.push(equipo)
                    ocultoEquipo.style.display = 'none';

                }
                if (ajustoEleccionH.length < 2 && equipo.grupo == "H" && ajustoEleccionG.length > 1) {
                    equiposGrupoH.push(equipo)
                    ocultoEquipo.style.display = 'none';
                }

                if (equipo.grupo == "H" && ajustoEleccionG.length < 2) {
                    Swal.fire({
                        title: 'Primero debes elegir los dos equipos del grupo G',
                        background: ' #8a1538',
                        color: 'white',
                        imageUrl: 'https://cloudfront-us-east-1.images.arcpublishing.com/sdpnoticias/XUDGIXQ4TVGZDJ7KOQ2APWMKDI.jpg',
                        icon: 'warning',
                        imageWidth: 600,
                        imageHeight: 200,
                        confirmButtonText: 'OK'
                    })
                }




            }
        }

    }

    cruce4.push(...equiposGrupoG)
    cruce4.push(...equiposGrupoH)
    localStorage.setItem('cruce4', JSON.stringify(cruce4))
    cruzarEquipo(cruce4, ["G", "G", "H", "H"], "cuartos")

    if (cruce4.length == 4) {
        let ocultoGrupos = document.getElementById('fixture')
        ocultoGrupos.style.display = 'none'
        let acomodoMain = document.getElementById('main-general')
        acomodoMain.style = "justify-content: center"
        let acomodoCruces = document.getElementById('cruces-interactivos')
        acomodoCruces.style = "margin-top: 0"
        let cambioTitulo = document.getElementById("titulo-indicativo")
        cambioTitulo.innerHTML = `<h1>Elegí los equipos que clasificarán a cuartos de final </h1>`
    }


}

const recuperoCruceCuatro = () => {
    let cruceCuatroRecuperado = JSON.parse(localStorage.getItem("cruce4"));
    console.log(cruceCuatroRecuperado)

}
recuperoCruceCuatro();

//MUESTRO POR CONSOLA EL CUARTO CRUCE DEL LOCAL STORAGE//
console.log(JSON.parse(localStorage.getItem('cruce4')))



/* FUNCION PARA ARMAR DINAMICAMENTE LOS CRUCES DE OCTAVOS DE FINAL */

function cruzarEquipo(cruce, ubicacion, instancia = "") {
    let instanciasFinales = ""

    if (instancia != "") {
        if (instancia.includes("cuartos")) {
            instanciasFinales = "creoCuartos"
        }
    }

    const primeroA = document.getElementById(`pri${ubicacion[0]}`);
    const segundoA = document.getElementById(`seg${ubicacion[1]}`);
    const primeroB = document.getElementById(`pri${ubicacion[2]}`)
    const segundoB = document.getElementById(`seg${ubicacion[3]}`)


    primeroA.innerHTML = ` 

    
    <div class="team" id = "${cruce[0]['nombre']}">
    <img src="${cruce[0]['bandera']}" class="img-thumbnail" alt="${cruce[0]['nombre']}-error" >        
    <button type="button" class="btn btn-light" onclick="${instanciasFinales}('${cruce[0]['id']}')" id="boton-cruces"><p>${cruce[0]['nombre']}</p></button>   
    </div>  `

    segundoA.innerHTML = `          
   
    <div class="team">
    <img src="${cruce[1]['bandera']}" class="img-thumbnail" alt="${cruce[1]['nombre']}-error" >        
    <button type="button" class="btn btn-light" onclick="${instanciasFinales}('${cruce[1]['id']}')" id="boton-cruces"><p>${cruce[1]['nombre']}</p></button>
    </div>`

    primeroB.innerHTML = `          
    
    <div class="team">
    <img src="${cruce[2]['bandera']}" class="img-thumbnail" alt="${cruce[2]['nombre']}-error" >        
    <button type="button" class="btn btn-light" onclick="${instanciasFinales}('${cruce[2]['id']}')" id="boton-cruces"><p>${cruce[2]['nombre']}</p></button>
    </div>`

    segundoB.innerHTML = `          
   
    <div class="team">
    <img src="${cruce[3]['bandera']}" class="img-thumbnail" alt="${cruce[3]['nombre']}-error" >        
    <button type="button" class="btn btn-light" onclick="${instanciasFinales}('${cruce[3]['id']}')" id="boton-cruces"><p>${cruce[3]['nombre']}</p></button>
    </div>`


}

/* FUNCION PARA CREAR LOS CUARTOS DE FINAL. IMPLEMENTO LAS VARIABLES LEFT Y RIGTH PARA PODER LUEGO UBICAR LOS EQUIPOS EN EL CUADRO */
function creoCuartos(id) {

    let left, rigth = false;


    let equipoActual = equiposClasificados.filter(actual => actual.id == id)[0]

    if (equipoActual.grupo.includes("A") || equipoActual.grupo.includes("B")) {
        let cuartoAyB;
        let espacio = cruce1.map(e => e.id).indexOf(id);
        if (espacio == 0 || espacio == 3) {
            cuartoAyB = document.getElementById("cuartos-AB")
            left = true;

        }
        if (espacio == 1 || espacio == 2) {
            cuartoAyB = document.getElementById("cuartos-BA")
            rigth = true;
        }

        cuartoAyB.innerHTML = `
    
    <div class="team">
    <img src="${equipoActual.bandera}" class="img-thumbnail" alt="${equipoActual.nombre}-error" >        
    <button type="button" class="btn btn-light" onclick="creoSemis(${equipoActual.id},${left},${rigth})" id="boton-cruces"><p>${equipoActual.nombre}</p></button>   
    </div>     
   `
    }

    if (equipoActual.grupo.includes("C") || equipoActual.grupo.includes("D")) {

        let cuartoCyD;
        let espacio = cruce2.map(e => e.id).indexOf(id);
        if (espacio == 0 || espacio == 3) {
            cuartoCyD = document.getElementById("cuartos-CD")
            left = true;
        }
        if (espacio == 1 || espacio == 2) {
            cuartoCyD = document.getElementById("cuartos-DC")
            rigth = true;
        }
        cuartoCyD.innerHTML = `
        
        <div class="team">
        <img src="${equipoActual.bandera}" class="img-thumbnail" alt="${equipoActual.nombre}-error" >        
        <button type="button" class="btn btn-light" onclick="creoSemis(${equipoActual.id},${left},${rigth})" id="boton-cruces"><p>${equipoActual.nombre}</p></button>   
        </div>      
        `
    }

    if (equipoActual.grupo.includes("E") || equipoActual.grupo.includes("F")) {

        let cuartoEyF;
        let espacio = cruce3.map(e => e.id).indexOf(id);
        if (espacio == 0 || espacio == 3) {
            cuartoEyF = document.getElementById("cuartos-EF")
            left = true;
        }
        if (espacio == 1 || espacio == 2) {
            cuartoEyF = document.getElementById("cuartos-FE")
            rigth = true;

        }
        cuartoEyF.innerHTML = `
        
        <div class="team">
        <img src="${equipoActual.bandera}" class="img-thumbnail" alt="${equipoActual.nombre}-error" >        
        <button type="button" class="btn btn-light" onclick="creoSemis(${equipoActual.id},${left},${rigth})" id="boton-cruces"><p>${equipoActual.nombre}</p></button>   
        </div>      
        `
    }

    if (equipoActual.grupo.includes("G") || equipoActual.grupo.includes("H")) {

        let cuartoGyH;
        let espacio = cruce4.map(e => e.id).indexOf(id);
        if (espacio == 0 || espacio == 3) {
            cuartoGyH = document.getElementById("cuartos-GH")
            left = true;
        }
        if (espacio == 1 || espacio == 2) {
            cuartoGyH = document.getElementById("cuartos-HG")
            rigth = true;
        }
        cuartoGyH.innerHTML = `
        
        <div class="team">
        <img src="${equipoActual.bandera}" class="img-thumbnail" alt="${equipoActual.nombre}-error" >        
        <button type="button" class="btn btn-light" onclick="creoSemis(${equipoActual.id},${left},${rigth})" id="boton-cruces"><p>${equipoActual.nombre}</p></button>   
        </div>      
        `
    }

}

/* FUNCION PARA CREAR LAS SEMIFINALES, MISMA LOGICA QUE PARA LOS CUARTOS DE FINAL PARA ASEGURARME LOS CRUCES REALES */
function creoSemis(id, left, rigth) {
    let equipoActual = equiposClasificados.filter(actual => actual.id == id.id)[0]

    if (left) {
        if (equipoActual.grupo.includes("A") || equipoActual.grupo.includes("B") || equipoActual.grupo.includes("C") || equipoActual.grupo.includes("D")) {
            let semisUno = document.getElementById("izq-uno")
            semisUno.innerHTML = `
        
        <div class="team">
        <img src="${equipoActual.bandera}" class="img-thumbnail" alt="${equipoActual.nombre}-error" >        
        <button type="button" class="btn btn-light" onclick="creoFinal(${equipoActual.id},${left},${rigth})"id="boton-cruces"><p>${equipoActual.nombre}</p></button>   
        </div>      
        `
        } else {
            let semisDos = document.getElementById("izq-dos")
            semisDos.innerHTML = `
            
            <div class="team">
            <img src="${equipoActual.bandera}" class="img-thumbnail" alt="${equipoActual.nombre}-error" >        
            <button type="button" class="btn btn-light" onclick="creoFinal(${equipoActual.id},${left},${rigth})"id="boton-cruces"><p>${equipoActual.nombre}</p></button>   
            </div>      
            `

        }
    }

    if (rigth) {
        if (equipoActual.grupo.includes("A") || equipoActual.grupo.includes("B") || equipoActual.grupo.includes("C") || equipoActual.grupo.includes("D")) {
            let semisTres = document.getElementById("der-uno")
            semisTres.innerHTML = `
        
        <div class="team">
        <img src="${equipoActual.bandera}" class="img-thumbnail" alt="${equipoActual.nombre}-error" >        
        <button type="button" class="btn btn-light" onclick="creoFinal(${equipoActual.id},${left},${rigth})"id="boton-cruces"><p>${equipoActual.nombre}</p></button>   
        </div>      
        `
        } else {
            let semisCuatro = document.getElementById("der-dos")
            semisCuatro.innerHTML = `
            
            <div class="team">
            <img src="${equipoActual.bandera}" class="img-thumbnail" alt="${equipoActual.nombre}-error" >        
            <button type="button" class="btn btn-light" onclick="creoFinal(${equipoActual.id})"id="boton-cruces"><p>${equipoActual.nombre}</p></button>   
            </div>      
            `

        }
    }

}

/* FUNCION PARA CREAR LA FINAL */
function creoFinal(id, left) {
    let equipoActual = equiposClasificados.filter(actual => actual.id == id.id)[0]
    if (left) {
        let primerFinalista = document.getElementById("final-A")

        primerFinalista.innerHTML = `
        
            <div class="team" id="final${equipoActual.id}">
            <img src="${equipoActual.bandera}" class="img-thumbnail" alt="${equipoActual.nombre}-error" >        
            <button type="button" class="btn btn-light" onclick="campeon(${equipoActual.id})"id="boton-cruces"><p>${equipoActual.nombre}</p></button>   
            <input type ="button" value="X" id="btn-cerrar">
            </div>      
            `
    } else {
        let segundoFinalista = document.getElementById("final-B")
        segundoFinalista.innerHTML = `
            
            <div class="team" id="final${equipoActual.id}">
            <img src="${equipoActual.bandera}" class="img-thumbnail" alt="${equipoActual.nombre}-error" >        
            <button type="button" class="btn btn-light" onclick="campeon(${equipoActual.id})"id="boton-cruces"><p>${equipoActual.nombre}</p></button>  
            <input type ="button" value="X" id="btn-cerrar"> 
            </div>      
            `
    }

    let btnCerrar = document.getElementById("btn-cerrar")
    btnCerrar.addEventListener("click", () => {
        let ocultarEquipo = document.getElementById(`final${equipoActual.id}`)
        ocultarEquipo.innerHTML = ""
    })

    borrarEquipo()

}

/* FUNCION (POR AHORA DE PRUEBA) PARA ELIMINAR LOS EQUIPOS DE LA FINAL */
function borrarEquipo(id) {
    let borrarEquipo = equiposClasificados.filter(actual => actual.id == id.id)[0]
    let btnCerrar = document.getElementById("btn-cerrar")
    btnCerrar.addEventListener("click", () => {

        let ocultarEquipo = document.getElementById(`final${borrarEquipo.id}`)
        ocultarEquipo.style.display = "none"

    })
}