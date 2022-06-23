const cruces = document.getElementById('fixture')


function jugarFecha1(grupo) {


    let sectionFechaUno = document.createElement('section')
    sectionFechaUno.className = 'fechaUno'
    sectionFechaUno.innerHTML = `

                               <h1>FECHA 1</h1> 

            <div class="encuentros">
            <div class="card" style="width: 18rem;">
            <img src="${grupo[0]['bandera']}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[0]['nombre']}</h5> <input type="number" min="0" max="100" id="primerResultado${grupo[0]['id']}"> </div>
            
            </div>    

            <h1>VS</h1>  

            <div class="card" style="width: 18rem;">
            <img src="${grupo[1]['bandera']}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[1]['nombre']}</h5><input type="number" min="0" max="100" id="primerResultado${grupo[1]['id']}"> </div>
            </div>
            </div>            


            <div class="encuentros">
            <div class="card" style="width: 18rem;">
            <img src="${grupo[2]['bandera']}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[2]['nombre']}</h5> <input type="number" min="0" max="100" id="primerResultado${grupo[2]['id']}"> </div>
            </div>    

            <h1>VS</h1>  
                      
            <div class="card" style="width: 18rem;">
            <img src="${grupo[3]['bandera']}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[3]['nombre']}</h5> <input type="number" min="0" max="100" id="primerResultado${grupo[3]['id']}"> </div>
            </div></div>
            
            
            <button type="button" class="btn btn-danger">Guardar Fecha 1</button>
            `



    cruces.appendChild(sectionFechaUno);
    
    

    let inputRdo1 = document.getElementById(`primerResultado${grupo[0]['id']}`)
    console.log(inputRdo1);

  

    inputRdo1.onchange = () => 
    {console.log(`primerResultado${grupo[0]['id']}`)};


    inputRdo1.addEventListener('click', () => {
        console.log(grupo[0]['id'])


    })

    let inputRdo2 = document.getElementById(`primerResultado${grupo[1]['id']}`)
    console.log(inputRdo2)

    inputRdo2.addEventListener('click', () => {
        console.log(grupo[1]['id'])


    })

    let inputRdo3 = document.getElementById(`primerResultado${grupo[2]['id']}`)
    console.log(inputRdo3);

    inputRdo3.addEventListener('click', () => {
        console.log(grupo[2]['id'])


    })

    let inputRdo4 = document.getElementById(`primerResultado${grupo[3]['id']}`)
    console.log(inputRdo4)

    inputRdo4.addEventListener('click', () => {
        console.log(grupo[3]['id'])


    })


}



function jugarFecha2(grupo) {


    let sectionFechaDos = document.createElement('section')
    sectionFechaDos.className = 'fechaDos'
    sectionFechaDos.innerHTML = `
                                      <h1>FECHA 2</h1>  
                    

            <div class="encuentros">
            <div class="card" style="width: 18rem;">
            <img src="${grupo[0]['bandera']}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[0]['nombre']}</h5> <input type="number" min="0" max="100" id="segundoResultado${grupo[0]['id']}"> </div>
            </div>    

            <h1>VS</h1>  

            <div class="card" style="width: 18rem;">
            <img src="${grupo[2]['bandera']}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[2]['nombre']}</h5> <input type="number" min="0" max="100" id="segundoResultado${grupo[2]['id']}"> </div>
            </div>
            </div>


            <div class="encuentros">
            <div class="card" style="width: 18rem;">
            <img src="${grupo[1]['bandera']}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[1]['nombre']}</h5> <input type="number" min="0" max="100" id="segundoResultado${grupo[1]['id']}"> </div>
            </div>    

            <h1>VS</h1>  
                      
            <div class="card" style="width: 18rem;">
            <img src="${grupo[3]['bandera']}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[3]['nombre']}</h5> <input type="number" min="0" max="100" id="segundoResultado${grupo[3]['id']}"> </div>
            </div></div>
            <button type="button" class="btn btn-danger">Guardar Fecha 2</button>
            `



    cruces.appendChild(sectionFechaDos);

    let inputRdo1 = document.getElementById(`segundoResultado${grupo[0]['id']}`)
    console.log(inputRdo1);

    inputRdo1.addEventListener('click', () => {
        console.log(grupo[0]['id'])


    })

    let inputRdo2 = document.getElementById(`segundoResultado${grupo[1]['id']}`)
    console.log(inputRdo2)

    inputRdo2.addEventListener('click', () => {
        console.log(grupo[1]['id'])


    })

    let inputRdo3 = document.getElementById(`segundoResultado${grupo[2]['id']}`)
    console.log(inputRdo3);

    inputRdo3.addEventListener('click', () => {
        console.log(grupo[2]['id'])


    })

    let inputRdo4 = document.getElementById(`segundoResultado${grupo[3]['id']}`)
    console.log(inputRdo4)

    inputRdo4.addEventListener('click', () => {
        console.log(grupo[3]['id'])


    })

}



function jugarFecha3(grupo) {


    let sectionFechaTres = document.createElement('section')
    sectionFechaTres.className = 'fechaTres'
    sectionFechaTres.innerHTML = `
                                      <h1>FECHA 3</h1>  
                    

            <div class="encuentros">
            <div class="card" style="width: 18rem;">
            <img src="${grupo[0]['bandera']}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[0]['nombre']}</h5> <input type="number" min="0" max="100" id="tercerResultado${grupo[0]['id']}"> </div>
            </div>    

            <h1>VS</h1>  

            <div class="card" style="width: 18rem;">
            <img src="${grupo[3]['bandera']}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[3]['nombre']}</h5> <input type="number" min="0" max="100" id="tercerResultado${grupo[3]['id']}"> </div>
            </div>
            </div>


            <div class="encuentros">
            <div class="card" style="width: 18rem;">
            <img src="${grupo[1]['bandera']}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[1]['nombre']}</h5> <input type="number" min="0" max="100" id="tercerResultado${grupo[1]['id']}"> </div>
            </div>    

            <h1>VS</h1>  
                      
            <div class="card" style="width: 18rem;">
            <img src="${grupo[2]['bandera']}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title"> ${grupo[2]['nombre']}</h5> <input type="number" min="0" max="100" id="tercerResultado${grupo[2]['id']}"> </div>
            </div></div>
            <button type="button" class="btn btn-danger">Guardar Fecha 3</button>`



    cruces.appendChild(sectionFechaTres );
    let inputRdo1 = document.getElementById(`tercerResultado${grupo[0]['id']}`)
    console.log(inputRdo1);

    inputRdo1.addEventListener('click', () => {
        console.log(grupo[0]['id'])


    })

    let inputRdo2 = document.getElementById(`tercerResultado${grupo[1]['id']}`)
    console.log(inputRdo2)

    inputRdo2.addEventListener('click', () => {
        console.log(grupo[1]['id'])


    })

    let inputRdo3 = document.getElementById(`tercerResultado${grupo[2]['id']}`)
    console.log(inputRdo3);

    inputRdo3.addEventListener('click', () => {
        console.log(grupo[2]['id'])


    })

    let inputRdo4 = document.getElementById(`tercerResultado${grupo[3]['id']}`)
    console.log(inputRdo4)

    inputRdo4.addEventListener('click', () => {
        console.log(grupo[3]['id'])


    })

}

function partidoFecha1(grupo){
    
let resultado1 = document.getElementById(`primerResultado${grupo[0]['id']}`.value);


console.log(resultado1)
}
