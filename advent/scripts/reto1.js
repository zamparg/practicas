const contenido = document.getElementById("hide1");
const boton = document.getElementById("change1")
boton.addEventListener("click", change)

const codigo = document.getElementById("code1");
const botonCodigo = document.getElementById("view1")
botonCodigo.addEventListener("click", changeCodigo)

const botonTest = document.getElementById("test1")
botonTest.addEventListener("click", test)



function change(){
    contenido.classList.toggle('hide')
    if(boton.textContent=='Ver más'){
        boton.textContent= 'Ver Menos'
    } else{
        boton.textContent= 'Ver Más'
    }
}

function changeCodigo(){
    codigo.classList.toggle('hide')
    if(botonCodigo.textContent=='Ver Código'){
        botonCodigo.textContent= 'Ocultar Código'
    } else{
        botonCodigo.textContent= 'Ver Código'
    }
}

function test(){
    let ingress = document.getElementById("input1").value.replace(/ /g, "")
    let tester = ingress.split(',')
    let result= wrapping(tester)
    console.log(result)
    let screen=document.getElementById('screen1')
    screen.innerHTML=``

    result.forEach(element => {
        screen.innerHTML+=`
        <p class="text-center">${element}</p>
        `
    });

}


function wrapping(gifts) {

    let wrap = gifts.map((gift) =>
     
      ('*'.repeat(gift.length+2)) + '\n*'+gift+'*\n'+('*'.repeat(gift.length+2))
    )
  
    return wrap
  }
  