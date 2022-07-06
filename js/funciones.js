
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
            <button type="button" class="btn btn-light" onclick="${funcionDinamica}('${Equipo.id}')">${Equipo.nombre}</button>
         </div>`
        i++;
    }
    cruces.appendChild(grupos);

}



mostrarEquipos(grupoA, "primerCruce")
mostrarEquipos(grupoB, "primerCruce")
mostrarEquipos(grupoC, "segundoCruce")
mostrarEquipos(grupoD, "segundoCruce")
mostrarEquipos(grupoE, "tercerCruce")
mostrarEquipos(grupoF, "tercerCruce")
mostrarEquipos(grupoG, "cuartoCruce")
mostrarEquipos(grupoH, "cuartoCruce")

function primerCruce(id) {
    let equiposGrupoA = [];
    let equiposGrupoB = [];
    for (const equipo of equiposClasificados) {
        if (equipo.id == id && !cruce1.includes(equipo)) {
            console.log(cruce1)
            if (cruce1.length < 4) {

                if (cruce1.filter(actual => actual.grupo == 'A').length < 2 && equipo.grupo == "A") {
                    equiposGrupoA.push(equipo)
                }
                if (cruce1.filter(actual => actual.grupo == 'B').length < 2 && equipo.grupo == "B") {
                    equiposGrupoB.push(equipo)
                }

            }
        }
       
    }
    
    cruce1.push(...equiposGrupoA)
    cruce1.push(...equiposGrupoB)
    localStorage.setItem('cruce1', JSON.stringify(cruce1))

    mostrarEquiposOctavos(cruce1)
}
const recuperoCruceUno = () => {
    let prueba = JSON.parse(localStorage.getItem("cruce1"));
    console.log(prueba)

}
recuperoCruceUno();

//MUESTRO POR CONSOLA EL PRIMER CRUCE DEL LOCAL STORAGE//
console.log(JSON.parse(localStorage.getItem('cruce1')))


function segundoCruce(id) {
    for (const equipo of equiposClasificados) {
        if (equipo.id == id) {
            console.log(cruce2)
            if (cruce2.length < 4) {
                cruce2.push(equipo)
                localStorage.setItem('cruce2', JSON.stringify(cruce2))
            }
        }

    }
}



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



