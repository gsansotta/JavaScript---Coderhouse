
/* CREO LOS CRUCES PARA LAS PRIMERAS 3 FECHAS DE LA FASE DE GRUPO MEDIANTE EL USO DE DOM 
SOLO UTILIZARÉ EL GRUPO DE ARGENTINA (GRUPO C)
*/


const cruces = document.getElementById('fixture')


/* CREO TRES FUNCIONES PARA DISPUTAR LAS TRES FECHAS DE LAS FASES DE GRUPO. GENERO CON INNER HTML LAS CARDS PARA LOS CRUCES.
PARA QUE COINCIDAN EN EL ORDEN REAL APUNTÉ A LA POSICION DE LOS OBJETOS EQUIPOS DENTRO DEL ARRAY GRUPO C.

CADA FECHA TIENE AL FINAL UN BOTON GUARDAR FECHA PARA QUE LUEGO DE INGRESAR LOS RESULTADOS SE REFLEJEN EN LA TABLA DE POSICIONES, LA CUAL ESTÁ
CREADA AL FINAL MEDIANTE LA FUNCION genera_tabla

*/

/* FECHA 1 DEL GRUPO */
function jugarFecha1(grupo) {


    let sectionFechaUno = document.createElement('section')
    sectionFechaUno.className = 'fechaUno'
    sectionFechaUno.innerHTML = `

                               <h1>FECHA 1</h1> 

            

            <div class="encuentros">
            <div class="card" style="width: 18rem;">
            <img src="${grupo[0]['bandera']}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[0]['nombre']}</h5> <input type="number" min="0" max="9" id="primerResultado${grupo[0]['id']}"> </div>
            
            </div>    

            <h1>VS</h1>  

            <div class="card" style="width: 18rem;">
            <img src="${grupo[1]['bandera']}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[1]['nombre']}</h5><input type="number" min="0" max="9" id="primerResultado${grupo[1]['id']}"> </div>
            </div>
            </div>            


            <div class="encuentros">
            <div class="card" style="width: 18rem;">
            <img src="${grupo[2]['bandera']}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[2]['nombre']}</h5> <input type="number" min="0" max="9" id="primerResultado${grupo[2]['id']}"> </div>
            </div>    

            <h1>VS</h1>  
                      
            <div class="card" style="width: 18rem;">
            <img src="${grupo[3]['bandera']}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[3]['nombre']}</h5> <input type="number" min="0" max="9" id="primerResultado${grupo[3]['id']}"> </div>
            </div></div>
            
            
            <button type="button" class="btn btn-danger" onclick="guardarFecha1('fecha1')"  >Guardar Fecha 1</button>

           
            
            `


    cruces.appendChild(sectionFechaUno);

}


/* FECHA 2 DEL GRUPO */

function jugarFecha2(grupo) {


    let sectionFechaDos = document.createElement('section')
    sectionFechaDos.className = 'fechaDos'
    sectionFechaDos.innerHTML = `
                                      <h1>FECHA 2</h1>  
                    

            <div class="encuentros">
            <div class="card" style="width: 18rem;">
            <img src="${grupo[0]['bandera']}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[0]['nombre']}</h5> <input type="number" min="0" max="9" id="segundoResultado${grupo[0]['id']}"> </div>
            </div>    

            <h1>VS</h1>  

            <div class="card" style="width: 18rem;">
            <img src="${grupo[2]['bandera']}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[2]['nombre']}</h5> <input type="number" min="0" max="9" id="segundoResultado${grupo[2]['id']}"> </div>
            </div>
            </div>


            <div class="encuentros">
            <div class="card" style="width: 18rem;">
            <img src="${grupo[1]['bandera']}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[1]['nombre']}</h5> <input type="number" min="0" max="9" id="segundoResultado${grupo[1]['id']}"> </div>
            </div>    

            <h1>VS</h1>  
                      
            <div class="card" style="width: 18rem;">
            <img src="${grupo[3]['bandera']}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[3]['nombre']}</h5> <input type="number" min="0" max="9" id="segundoResultado${grupo[3]['id']}"> </div>
            </div></div>
            <button type="button" class="btn btn-danger" onclick="guardarFecha2('fecha2')">  Guardar Fecha 2</button>
            `



    cruces.appendChild(sectionFechaDos);




}

/* FECHA 3 DEL GRUPO */


function jugarFecha3(grupo) {


    let sectionFechaTres = document.createElement('section')
    sectionFechaTres.className = 'fechaTres'
    sectionFechaTres.innerHTML = `
                                      <h1>FECHA 3</h1>  
                    

            <div class="encuentros">
            <div class="card" style="width: 18rem;">
            <img src="${grupo[0]['bandera']}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[0]['nombre']}</h5> <input type="number" min="0" max="9" id="tercerResultado${grupo[0]['id']}"> </div>
            </div>    

            <h1>VS</h1>  

            <div class="card" style="width: 18rem;">
            <img src="${grupo[3]['bandera']}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[3]['nombre']}</h5> <input type="number" min="0" max="9" id="tercerResultado${grupo[3]['id']}"> </div>
            </div>
            </div>


            <div class="encuentros">
            <div class="card" style="width: 18rem;">
            <img src="${grupo[1]['bandera']}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[1]['nombre']}</h5> <input type="number" min="0" max="9" id="tercerResultado${grupo[1]['id']}"> </div>
            </div>    

            <h1>VS</h1>  
                      
            <div class="card" style="width: 18rem;">
            <img src="${grupo[2]['bandera']}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[2]['nombre']}</h5> <input type="number" min="0" max="9" id="tercerResultado${grupo[2]['id']}"> </div>
            </div></div>
            <button type="button" class="btn btn-danger" onclick="guardarFecha3('fecha3')">Guardar Fecha 3</button>`



    cruces.appendChild(sectionFechaTres);

}

jugarFecha1(grupoC)
jugarFecha2(grupoC)
jugarFecha3(grupoC)


/* LOS TRES BOTONES GUARDAR FECHA CORERSPONDIENTES A CADA FECHA TIENEN EL EVENTO CLICK, A PARTIR DEL CUAL LE PASO LAS FUNCIONES DEVUELVO FECHA Y 
GENERA TABLA PARA QUE ENVÍE LOS DATOS EN FUNCION DE LOS RESULTADOS Y SE REFLEGEN EN LA TABLA DE POSICIONES */
function guardarFecha1() {
    devuelvoRdoFecha1()
    genera_tabla(grupoC);
}

function guardarFecha2() {
    devuelvoRdoFecha2()
    genera_tabla(grupoC);
}

function guardarFecha3() {
    devuelvoRdoFecha3()
    genera_tabla(grupoC);
}


/* FUNCION PARA DEVOLVER LOS PUNTOS DE LA FECHA 1 */
/* TOMO EL VALOR MEDIANTE LOS ID DE LOS INPUTS DE LOS RESULTADOS */
function devuelvoRdoFecha1() {
    const resutlado1 = document.getElementById(`primerResultadoarg`).value;
    const resutlado2 = document.getElementById(`primerResultadosau`).value;
    const resutlado3 = document.getElementById(`primerResultadomex`).value;
    const resutlado4 = document.getElementById(`primerResultadopol`).value;
    
    console.log(resutlado1)
    console.log(resutlado2)
    console.log(resutlado3)
    console.log(resutlado4)


    if (resutlado1 == resutlado2) {
        argentina.puntos = + argentina.puntos + ptsEmpatar;
        arabiaSaudita.puntos = + arabiaSaudita.puntos + ptsEmpatar;
    } else if (resutlado1 > resutlado2) {
        argentina.puntos = + argentina.puntos + ptsGanar;
    } else {
        arabiaSaudita.puntos = + arabiaSaudita.puntos + ptsGanar;
    }



     if (resutlado3 == resutlado4) {
        mexico.puntos = + mexico.puntos + ptsEmpatar;
        polonia.puntos = +  polonia.puntos + ptsEmpatar;
    } else if (resutlado3 > resutlado4) {
        mexico.puntos = + mexico.puntos + ptsGanar;
    } else {
        polonia.puntos = +  polonia.puntos + ptsGanar;
    } 
    
   for (const equipo of grupoC) {
    equipo.partidosJugados++;
    console.log(`Los puntos finalizada la primer fecha de ${equipo.nombre} son ${equipo.puntos}`)
   }
}

/* FUNCION PARA DEVOLVER LOS PUNTOS DE LA FECHA 2 */

function devuelvoRdoFecha2() {
    const resutlado1 = document.getElementById(`segundoResultadoarg`).value;
    const resutlado2 = document.getElementById(`segundoResultadomex`).value;
    const resutlado3 = document.getElementById(`segundoResultadosau`).value;
    const resutlado4 = document.getElementById(`segundoResultadopol`).value;
    
    console.log(resutlado1)
    console.log(resutlado2)
    console.log(resutlado3)
    console.log(resutlado4)


    if (resutlado1 == resutlado2) {
        argentina.puntos = + argentina.puntos + ptsEmpatar;
        mexico.puntos = + mexico.puntos + ptsEmpatar;      
    } else if (resutlado1 > resutlado2) {
        argentina.puntos = + argentina.puntos + ptsGanar;
    } else {
        mexico.puntos = + mexico.puntos + ptsGanar;
    }



     if (resutlado3 == resutlado4) {
        arabiaSaudita.puntos = + arabiaSaudita.puntos + ptsEmpatar;
        polonia.puntos = +  polonia.puntos + ptsEmpatar;
    } else if (resutlado3 > resutlado4) {
        arabiaSaudita.puntos = + arabiaSaudita.puntos + ptsGanar;
    } else {
        polonia.puntos = +  polonia.puntos + ptsGanar;
    } 
    
   for (const equipo of grupoC) {
    equipo.partidosJugados++;
    console.log(`Los puntos finalizada la segunda fecha de ${equipo.nombre} son ${equipo.puntos}`)
   }
}


/* FUNCION PARA DEVOLVER LOS PUNTOS DE LA FECHA 3 */
function devuelvoRdoFecha3() {
    const resutlado1 = document.getElementById(`tercerResultadoarg`).value;
    const resutlado2 = document.getElementById(`tercerResultadopol`).value;
    const resutlado3 = document.getElementById(`tercerResultadosau`).value;
    const resutlado4 = document.getElementById(`tercerResultadomex`).value;
    
    console.log(resutlado1)
    console.log(resutlado2)
    console.log(resutlado3)
    console.log(resutlado4)


    if (resutlado1 == resutlado2) {
        argentina.puntos = + argentina.puntos + ptsEmpatar;
        polonia.puntos = +  polonia.puntos + ptsEmpatar;           
    } else if (resutlado1 > resutlado2) {
        argentina.puntos = + argentina.puntos + ptsGanar;
    } else {
        polonia.puntos = +  polonia.puntos + ptsGanar;
    }


     if (resutlado3 == resutlado4) {
        arabiaSaudita.puntos = + arabiaSaudita.puntos + ptsEmpatar;
        mexico.puntos = + mexico.puntos + ptsEmpatar;  
    } else if (resutlado3 > resutlado4) {       
        arabiaSaudita.puntos = + arabiaSaudita.puntos + ptsGanar;
    } else {
        mexico.puntos = + mexico.puntos + ptsGanar;
    } 
    
   for (const equipo of grupoC) {
    equipo.partidosJugados++;
    console.log(`Los puntos finalizada la tercer fecha de ${equipo.nombre} son ${equipo.puntos}`)
   }
}

/* GENERO TABLA MEDIANTE DOM QUE IRA MOSTRANDO Y RENDERIZANDO LAS POSICIONES SEGUN LOS RESULTADOS */
function genera_tabla(grupo) {
    
    const body = document.querySelector("#tabla-grupos")
    body.innerHTML ="";
    
    const tabla = `<tr>
    <th scope="row">@nombre</th>
    <td>@partidosJugados</td>
    <td>@puntos</td>    
    </tr>`

    let tablaPosiciones = "";    
    
    grupo.sort(function (a, b) {
        return (b.puntos - a.puntos)
    }) 

    for (let i = 0; i < grupo.length; i++) {
        tablaPosiciones += tabla.replace(/@nombre/g, grupo[i].nombre)
            .replace(/@partidosJugados/g, grupo[i].partidosJugados)
            .replace(/@puntos/g, grupo[i].puntos)

    }

    body.innerHTML = tablaPosiciones;    
}

genera_tabla(grupoC)

