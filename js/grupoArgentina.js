/* CREO LOS CRUCES PARA LAS PRIMERAS 3 FECHAS DE LA FASE DE GRUPO MEDIANTE EL USO DE DOM A PARTIR DE LA BASE DE DATOS SIMULADA
EN EL ACRHIVO EQUIPOS.JSON.
SOLO UTILIZARÉ EL GRUPO DE ARGENTINA (GRUPO C)
*/
const ptsGanar = 3;
const ptsEmpatar = 1;
const ptsPerder = 0;
const crucesArgentina = document.getElementById("fixture-C");
let primerClasificado;
let segundoClasificado;
let fechasJugadas = 0;
let paisArgentina;
let paisArabiaSaudita;
let paisMexico;
let paisPolonia;
let grupoArgentina = [];

/* TRAIGO LOS OBJETOS DEL ARCHIVO EQUIPOS.JSON Y LUEGO LOS CONVIERTO EN OBJETOS DE LA CLASE EquipoC */
async function recuperoEquiposGrupoC() {
  await fetch("../json/equipos.json")
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      for (const iterator of data) {
        if (iterator.pais.includes("Argentina")) {
          paisArgentina = new EquipoC(
            iterator.id,
            iterator.pais,
            iterator.partidosJugados,
            iterator.partidosGanados,
            iterator.partidosEmpatados,
            iterator.partidosPerdidos,
            iterator.golesFavor,
            iterator.golesContra,
            iterator.puntos,
            iterator.bandera
          );
        }
        if (iterator.pais.includes("A.Saudita")) {
          paisArabiaSaudita = new EquipoC(
            iterator.id,
            iterator.pais,
            iterator.partidosJugados,
            iterator.partidosGanados,
            iterator.partidosEmpatados,
            iterator.partidosPerdidos,
            iterator.golesFavor,
            iterator.golesContra,
            iterator.puntos,
            iterator.bandera
          );
        }
        if (iterator.pais.includes("Mexico")) {
          paisMexico = new EquipoC(
            iterator.id,
            iterator.pais,
            iterator.partidosJugados,
            iterator.partidosGanados,
            iterator.partidosEmpatados,
            iterator.partidosPerdidos,
            iterator.golesFavor,
            iterator.golesContra,
            iterator.puntos,
            iterator.bandera
          );
        }
        if (iterator.pais.includes("Polonia")) {
          paisPolonia = new EquipoC(
            iterator.id,
            iterator.pais,
            iterator.partidosJugados,
            iterator.partidosGanados,
            iterator.partidosEmpatados,
            iterator.partidosPerdidos,
            iterator.golesFavor,
            iterator.golesContra,
            iterator.puntos,
            iterator.bandera
          );
        }
      }
      /* CREO UN ARRAY QUE NO SE PISE CON EL YA EXISTENTE GRUPO C PARA INCORPORAR LOS EQUIPOS */
      grupoArgentina = [
        paisArgentina,
        paisArabiaSaudita,
        paisMexico,
        paisPolonia,
      ];
      jugarFecha1(data);
      jugarFecha2(data);
      jugarFecha3(data);
    });
  console.log(grupoArgentina);
}
/* CREO TRES FUNCIONES PARA DISPUTAR LAS TRES FECHAS DE LAS FASES DE GRUPO. GENERO CON INNER HTML LAS CARDS PARA LOS CRUCES.
PARA QUE COINCIDAN EN EL ORDEN REAL APUNTÉ A LA POSICION DE LOS OBJETOS EQUIPOS DENTRO DEL ARRAY GRUPO C.

CADA FECHA TIENE AL FINAL UN BOTON GUARDAR FECHA PARA QUE LUEGO DE INGRESAR LOS RESULTADOS SE REFLEJEN EN LA TABLA DE POSICIONES, LA CUAL ESTÁ
CREADA AL FINAL MEDIANTE LA FUNCION genera_tabla

*/

/* FECHA 1 DEL GRUPO */
function jugarFecha1(grupo) {
  let sectionFechaUno = document.createElement("section");
  sectionFechaUno.className = "fechaUno";
  sectionFechaUno.innerHTML = `
                               <h1>FECHA 1</h1>             

            <div class="encuentros">
            <div class="card" style="width: 18rem;">
            <img src="${grupo[0]["bandera"]}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[0]["pais"]}</h5> <input type="number" min="0" max="9" id="primerResultado${grupo[0]["id"]}"> </div>            
            </div>    

            <h1>VS</h1>  

            <div class="card" style="width: 18rem;">
            <img src="${grupo[1]["bandera"]}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[1]["pais"]}</h5><input type="number" min="0" max="9" id="primerResultado${grupo[1]["id"]}"> </div>
            </div>
            </div>         

            <div class="encuentros">
            <div class="card" style="width: 18rem;">
            <img src="${grupo[2]["bandera"]}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[2]["pais"]}</h5> <input type="number" min="0" max="9" id="primerResultado${grupo[2]["id"]}"> </div>
            </div>    

            <h1>VS</h1>  
                      
            <div class="card" style="width: 18rem;">
            <img src="${grupo[3]["bandera"]}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[3]["pais"]}</h5> <input type="number" min="0" max="9" id="primerResultado${grupo[3]["id"]}"> </div>
            </div></div>
            <button type="button" class="btn btn-danger" onclick="guardarFecha1('fecha1')" id="btn-uno" >Guardar Fecha 1</button>
            
            `;

  crucesArgentina.appendChild(sectionFechaUno);
}

/* FECHA 2 DEL GRUPO */

function jugarFecha2(grupo) {
  let sectionFechaDos = document.createElement("section");
  sectionFechaDos.className = "fechaDos";
  sectionFechaDos.innerHTML = `
                                      <h1>FECHA 2</h1>  
                    
            <div class="encuentros">
            <div class="card" style="width: 18rem;">
            <img src="${grupo[0]["bandera"]}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[0]["pais"]}</h5> <input type="number" min="0" max="9" id="segundoResultado${grupo[0]["id"]}"> </div>
            </div>    

            <h1>VS</h1>  

            <div class="card" style="width: 18rem;">
            <img src="${grupo[2]["bandera"]}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[2]["pais"]}</h5> <input type="number" min="0" max="9" id="segundoResultado${grupo[2]["id"]}"> </div>
            </div>
            </div>

            <div class="encuentros">
            <div class="card" style="width: 18rem;">
            <img src="${grupo[1]["bandera"]}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[1]["pais"]}</h5> <input type="number" min="0" max="9" id="segundoResultado${grupo[1]["id"]}"> </div>
            </div>    

            <h1>VS</h1>  
                      
            <div class="card" style="width: 18rem;">
            <img src="${grupo[3]["bandera"]}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[3]["pais"]}</h5> <input type="number" min="0" max="9" id="segundoResultado${grupo[3]["id"]}"> </div>
            </div></div>
            <button type="button" class="btn btn-danger" onclick="guardarFecha2('fecha2')"  id="btn-dos">  Guardar Fecha 2</button>
            `;

  crucesArgentina.appendChild(sectionFechaDos);
}

/* FECHA 3 DEL GRUPO */

function jugarFecha3(grupo) {
  let sectionFechaTres = document.createElement("section");
  sectionFechaTres.className = "fechaTres";
  sectionFechaTres.innerHTML = `
                                      <h1>FECHA 3</h1>  
                    
            <div class="encuentros">
            <div class="card" style="width: 18rem;">
            <img src="${grupo[0]["bandera"]}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[0]["pais"]}</h5> <input type="number" min="0" max="9" id="tercerResultado${grupo[0]["id"]}"> </div>
            </div>    

            <h1>VS</h1>  

            <div class="card" style="width: 18rem;">
            <img src="${grupo[3]["bandera"]}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[3]["pais"]}</h5> <input type="number" min="0" max="9" id="tercerResultado${grupo[3]["id"]}"> </div>
            </div>
            </div>

            <div class="encuentros">
            <div class="card" style="width: 18rem;">
            <img src="${grupo[1]["bandera"]}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[1]["pais"]}</h5> <input type="number" min="0" max="9" id="tercerResultado${grupo[1]["id"]}"> </div>
            </div>    

            <h1>VS</h1>  
                      
            <div class="card" style="width: 18rem;">
            <img src="${grupo[2]["bandera"]}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[2]["pais"]}</h5> <input type="number" min="0" max="9" id="tercerResultado${grupo[2]["id"]}"> </div>
            </div></div>
            <button type="button" class="btn btn-danger" onclick="guardarFecha3('fecha3')"id="btn-tres">Guardar Fecha 3</button>`;

  crucesArgentina.appendChild(sectionFechaTres);
}


/* LOS TRES BOTONES GUARDAR FECHA CORERSPONDIENTES A CADA FECHA TIENEN EL EVENTO CLICK, A PARTIR DEL CUAL LE PASO LAS FUNCIONES DEVUELVO FECHA Y 
GENERA TABLA PARA QUE ENVÍE LOS DATOS EN FUNCION DE LOS RESULTADOS Y SE REFLEJEN EN LA TABLA DE POSICIONES */

function guardarFecha1() {
  devuelvoRdoFecha1();
  genera_tabla(grupoArgentina);
}

function guardarFecha2() {
  devuelvoRdoFecha2();
  genera_tabla(grupoArgentina);
}

function guardarFecha3() {
  devuelvoRdoFecha3();
  genera_tabla(grupoArgentina);
}

/* FUNCION PARA DEVOLVER LOS PUNTOS DE LA FECHA 1 */
/* TOMO EL VALOR MEDIANTE LOS ID DE LOS INPUTS DE LOS RESULTADOS */
function devuelvoRdoFecha1() {
  const resutlado1 = document.getElementById(`primerResultadoarg`).value;
  const resutlado2 = document.getElementById(`primerResultadosau`).value;
  const resutlado3 = document.getElementById(`primerResultadomex`).value;
  const resutlado4 = document.getElementById(`primerResultadopol`).value;
  const btn = document.getElementById('btn-uno');

  console.log(resutlado1);
  console.log(resutlado2);
  console.log(resutlado3);
  console.log(resutlado4);

  if (resutlado1 == "" || resutlado2 == "" || resutlado3 == "" || resutlado4 == "") {
    Swal.fire({
      title: 'NO PUEDEN QUEDAR RESULTADOS VACÍOS',
      background: ' #8a1538',
      color: 'white',
      imageUrl: 'https://cloudfront-us-east-1.images.arcpublishing.com/sdpnoticias/XUDGIXQ4TVGZDJ7KOQ2APWMKDI.jpg',
      icon: 'warning',
      imageWidth: 600,
      imageHeight: 200,
      confirmButtonText: 'OK'

    })
  }
  else {

    if (resutlado1 == resutlado2) {
      paisArgentina.puntos = +paisArgentina.puntos + ptsEmpatar;
      paisArgentina.partidosEmpatados++
      paisArabiaSaudita.puntos = +paisArabiaSaudita.puntos + ptsEmpatar;
      paisArabiaSaudita.partidosEmpatados++
    } else if (resutlado1 > resutlado2) {
      paisArgentina.puntos = +paisArgentina.puntos + ptsGanar;
      paisArgentina.partidosGanados++
      paisArabiaSaudita.partidosPerdidos++
    } else {
      paisArabiaSaudita.puntos = +paisArabiaSaudita.puntos + ptsGanar;
      paisArgentina.partidosPerdidos++
      paisArabiaSaudita.partidosGanados++
    }

    paisArgentina.golesFavor = + resutlado1;
    paisArgentina.golesContra = + resutlado2;
    paisArabiaSaudita.golesFavor = + resutlado2;
    paisArabiaSaudita.golesContra = + resutlado1;

    if (resutlado3 == resutlado4) {
      paisMexico.puntos = +paisMexico.puntos + ptsEmpatar;
      paisPolonia.puntos = +paisPolonia.puntos + ptsEmpatar;
      paisMexico.partidosEmpatados++
      paisPolonia.partidosEmpatados++
    } else if (resutlado3 > resutlado4) {
      paisMexico.puntos = +paisMexico.puntos + ptsGanar;
      paisMexico.partidosGanados++
      paisPolonia.partidosPerdidos++
    } else {
      paisPolonia.puntos = +paisPolonia.puntos + ptsGanar;
      paisMexico.partidosPerdidos++
      paisPolonia.partidosGanados++
    }

    paisMexico.golesFavor = + resutlado3;
    paisMexico.golesContra = + resutlado4;
    paisPolonia.golesFavor = + resutlado4;
    paisPolonia.golesContra = + resutlado3;


    for (const equipo of grupoArgentina) {
      equipo.partidosJugados++;
      console.log(
        `Los puntos finalizada la primer fecha de ${equipo.pais} son ${equipo.puntos}`
      );
    }

    Swal.fire({
      title: "Se han guradado los resultados de la fecha 1",
      background: " #8a1538",
      color: "white",
      imageUrl:
        "https://cloudfront-us-east-1.images.arcpublishing.com/sdpnoticias/XUDGIXQ4TVGZDJ7KOQ2APWMKDI.jpg",
      icon: "success",
      imageWidth: 600,
      imageHeight: 200,
      confirmButtonText: "OK",
    });

    fechasJugadas++;
    btn.style.display = 'none';
  }
}

/* FUNCION PARA DEVOLVER LOS PUNTOS DE LA FECHA 2 */

function devuelvoRdoFecha2() {
  const resutlado1 = document.getElementById(`segundoResultadoarg`).value;
  const resutlado2 = document.getElementById(`segundoResultadomex`).value;
  const resutlado3 = document.getElementById(`segundoResultadosau`).value;
  const resutlado4 = document.getElementById(`segundoResultadopol`).value;
  const btn = document.getElementById('btn-dos');

  console.log(resutlado1);
  console.log(resutlado2);
  console.log(resutlado3);
  console.log(resutlado4);

  if (resutlado1 == "" || resutlado2 == "" || resutlado3 == "" || resutlado4 == "") {
    Swal.fire({
      title: 'NO PUEDEN QUEDAR RESULTADOS VACÍOS',
      background: ' #8a1538',
      color: 'white',
      imageUrl: 'https://cloudfront-us-east-1.images.arcpublishing.com/sdpnoticias/XUDGIXQ4TVGZDJ7KOQ2APWMKDI.jpg',
      icon: 'warning',
      imageWidth: 600,
      imageHeight: 200,
      confirmButtonText: 'OK'

    })
  }
  else {
    if (resutlado1 == resutlado2) {
      paisArgentina.puntos = +paisArgentina.puntos + ptsEmpatar;
      paisMexico.puntos = +paisMexico.puntos + ptsEmpatar;
    } else if (resutlado1 > resutlado2) {
      paisArgentina.puntos = +paisArgentina.puntos + ptsGanar;
    } else {
      paisMexico.puntos = +paisMexico.puntos + ptsGanar;
    }


    paisArgentina.golesFavor = + paisArgentina.golesFavor + Number(resutlado1);
    paisArgentina.golesContra = + paisArgentina.golesContra + Number(resutlado2);
    paisMexico.golesFavor = + paisMexico.golesFavor + Number(resutlado2);
    paisMexico.golesContra = + paisMexico.golesContra + Number(resutlado1);

    if (resutlado3 == resutlado4) {
      paisArabiaSaudita.puntos = +paisArabiaSaudita.puntos + ptsEmpatar;
      paisPolonia.puntos = +paisPolonia.puntos + ptsEmpatar;
    } else if (resutlado3 > resutlado4) {
      paisArabiaSaudita.puntos = +paisArabiaSaudita.puntos + ptsGanar;
    } else {
      paisPolonia.puntos = +paisPolonia.puntos + ptsGanar;
    }

    paisArabiaSaudita.golesFavor = +  paisArabiaSaudita.golesFavor + Number(resutlado3);
    paisArabiaSaudita.golesContra = + paisArabiaSaudita.golesContra + Number(resutlado4);
    paisPolonia.golesFavor = + paisPolonia.golesFavor + Number(resutlado4);
    paisPolonia.golesContra = + paisPolonia.golesContra + Number(resutlado3);

    for (const equipo of grupoArgentina) {
      equipo.partidosJugados++;
      console.log(
        `Los puntos finalizada la segunda fecha de ${equipo.nombre} son ${equipo.puntos}`
      );
    }
    Swal.fire({
      title: "Se han guradado los resultados de la fecha 2",
      background: " #8a1538",
      color: "white",
      imageUrl:
        "https://cloudfront-us-east-1.images.arcpublishing.com/sdpnoticias/XUDGIXQ4TVGZDJ7KOQ2APWMKDI.jpg",
      icon: "success",
      imageWidth: 600,
      imageHeight: 200,
      confirmButtonText: "OK",
    });
    fechasJugadas++;
    btn.style.display = 'none';
  }
}

/* FUNCION PARA DEVOLVER LOS PUNTOS DE LA FECHA 3 */
function devuelvoRdoFecha3() {
  const resutlado1 = document.getElementById(`tercerResultadoarg`).value;
  const resutlado2 = document.getElementById(`tercerResultadopol`).value;
  const resutlado3 = document.getElementById(`tercerResultadosau`).value;
  const resutlado4 = document.getElementById(`tercerResultadomex`).value;
  const btn = document.getElementById('btn-tres');


  console.log(resutlado1);
  console.log(resutlado2);
  console.log(resutlado3);
  console.log(resutlado4);

  if (resutlado1 == "" || resutlado2 == "" || resutlado3 == "" || resutlado4 == "") {
    Swal.fire({
      title: 'NO PUEDEN QUEDAR RESULTADOS VACÍOS',
      background: ' #8a1538',
      color: 'white',
      imageUrl: 'https://cloudfront-us-east-1.images.arcpublishing.com/sdpnoticias/XUDGIXQ4TVGZDJ7KOQ2APWMKDI.jpg',
      icon: 'warning',
      imageWidth: 600,
      imageHeight: 200,
      confirmButtonText: 'OK'

    })
  }
  else {
    if (resutlado1 == resutlado2) {
      paisArgentina.puntos = +paisArgentina.puntos + ptsEmpatar;
      paisPolonia.puntos = +paisPolonia.puntos + ptsEmpatar;
    } else if (resutlado1 > resutlado2) {
      paisArgentina.puntos = +paisArgentina.puntos + ptsGanar;
    } else {
      paisPolonia.puntos = +paisPolonia.puntos + ptsGanar;
    }

    paisArgentina.golesFavor = + paisArgentina.golesFavor + Number(resutlado1);
    paisArgentina.golesContra = + paisArgentina.golesContra + Number(resutlado2);
    paisPolonia.golesFavor = + paisPolonia.golesFavor + Number(resutlado2);
    paisPolonia.golesContra = + paisPolonia.golesContra + Number(resutlado1);

    if (resutlado3 == resutlado4) {
      paisArabiaSaudita.puntos = +paisArabiaSaudita.puntos + ptsEmpatar;
      paisMexico.puntos = +paisMexico.puntos + ptsEmpatar;
    } else if (resutlado3 > resutlado4) {
      paisArabiaSaudita.puntos = +paisArabiaSaudita.puntos + ptsGanar;
    } else {
      paisMexico.puntos = +paisMexico.puntos + ptsGanar;
    }

    paisArabiaSaudita.golesFavor = +  paisArabiaSaudita.golesFavor + Number(resutlado3);
    paisArabiaSaudita.golesContra = + paisArabiaSaudita.golesContra + Number(resutlado4);
    paisMexico.golesFavor = + paisMexico.golesFavor + Number(resutlado4);
    paisMexico.golesContra = + paisMexico.golesContra + Number(resutlado3);

    for (const equipo of grupoArgentina) {
      equipo.partidosJugados++;
      console.log(
        `Los puntos finalizada la tercer fecha de ${equipo.nombre} son ${equipo.puntos}`
      );
    }
    Swal.fire({
      title: "Se han guradado los resultados de la fecha 3",
      background: " #8a1538",
      color: "white",
      imageUrl:
        "https://cloudfront-us-east-1.images.arcpublishing.com/sdpnoticias/XUDGIXQ4TVGZDJ7KOQ2APWMKDI.jpg",
      icon: "success",
      imageWidth: 600,
      imageHeight: 200,
      confirmButtonText: "OK",
    });
    fechasJugadas++;
    btn.style.display = 'none';

  }
}

/* GENERO TABLA MEDIANTE DOM QUE IRA MOSTRANDO Y RENDERIZANDO MEDIANTE EVENTOS.
 LAS POSICIONES SE MOSTRARAN EN FUNCION DE LOS PUNTOS MEDIANTE EL USO DE LA FUNCION SORT */

/* AGREGO UN IF PARA QUE CUANDO LOS PARTIDOS JUGADOS LLEGUEN A 3 INFORME POR ALERT QUIENES CLASIFICAN */
function genera_tabla(grupo) {
  const body = document.querySelector("#tabla-C");
  body.innerHTML = "";

  const tabla = `<tr>
    <th scope="row">@nombre</th>
    <td>@PJ</td>
    <td>@PG</td>
    <td>@PE</td>  
    <td>@PP</td>  
    <td>@GF</td>  
    <td>@GC</td>  
    <td>@PTS</td>      
    </tr>`;

  let tablaPosiciones = "";

  grupo.sort(function (a, b) {
    return b.puntos - a.puntos;
  });

  for (let i = 0; i < grupo.length; i++) {
    tablaPosiciones += tabla
      .replace(/@nombre/g, grupo[i].pais)
      .replace(/@PJ/g, grupo[i].partidosJugados)
      .replace(/@PG/g, grupo[i].partidosGanados)
      .replace(/@PE/g, grupo[i].partidosEmpatados)
      .replace(/@PP/g, grupo[i].partidosPerdidos)
      .replace(/@GF/g, grupo[i].golesFavor)
      .replace(/@GC/g, grupo[i].golesContra)
      .replace(/@PTS/g, grupo[i].puntos);
  }

  body.innerHTML = tablaPosiciones;

  if (fechasJugadas == 3) {
    let primero = grupo[0];
    let segundo = grupo[1];
    Swal.fire({
      title: `Clasifican a octavos de final: En primer posición ${primero.pais} y en segunda posición ${segundo.pais}`,
      background: " #8a1538",
      color: "white",
      imageUrl:
        "https://cloudfront-us-east-1.images.arcpublishing.com/sdpnoticias/XUDGIXQ4TVGZDJ7KOQ2APWMKDI.jpg",
      icon: "success",
      imageWidth: 600,
      imageHeight: 200,
      confirmButtonText: "OK",
    });
  }
}

recuperoEquiposGrupoC().then(() => {
  genera_tabla(grupoArgentina);
});
