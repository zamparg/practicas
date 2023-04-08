const contenido = document.getElementById("hide1");
const boton = document.getElementById("change1")
boton.addEventListener("click", change)

function change(){
    contenido.classList.toggle('hide')
    if(boton.textContent=='Ver más'){
        boton.textContent= 'Ver Menos'
    } else{
        boton.textContent= 'Ver Más'
    }
}



function wrapping(gifts) {

    let wrap = gifts.map((gift) =>
     
      ('*'.repeat(gift.length+2)) + '\n*'+gift+'*\n'+('*'.repeat(gift.length+2))
    )
  
    return wrap
  }
  