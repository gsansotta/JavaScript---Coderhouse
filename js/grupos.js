




/* function primerCruce(id){
    for (const equipo of equiposClasificados) {
        if(equipo.id == id){
            console.log(cruce1AB)
            if(cruce1AB.length<2){
                cruce1AB.push(equipo)
                localStorage.setItem('cruce1AB', JSON.stringify(cruce1AB))
            }else if(cruce2BA.length<2){
                cruce2BA.push(equipo)
                localStorage.setItem('cruce2BA', JSON.stringify(cruce2BA))
                console.log(cruce2BA)
            }
        }
    }
} */


/* function primerCruce(id){
    for (const equipo of equiposClasificados) {
        if(equipo.id == id && !cruce1.includes(equipo)){
            console.log(cruce1)
            if(cruce1.length<4){
                cruce1.push(equipo)
                localStorage.setItem('cruce1', JSON.stringify(cruce1))
            }
            
        }
        
    }

} 
 */
/* 

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



 */