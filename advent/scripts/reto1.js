const contenido = document.getElementById("hide1");
const boton = document.getElementById("change1")
boton.addEventListener("click", function(){change(contenido, boton)})

const codigo = document.getElementById("code1");
const botonCodigo = document.getElementById("view1")
botonCodigo.addEventListener("click",function(){
    changeCodigo(codigo, botonCodigo);
} )

const botonTest = document.getElementById("test1")
botonTest.addEventListener("click", test1)



function change(contenido, boton){
    contenido.classList.toggle('hide')

    if(boton.textContent=='Ver Más'){
        boton.textContent= 'Ver Menos'
    } else{
        boton.textContent='Ver Más'
    }
}

function changeCodigo(codigo, botonCodigo){
    codigo.classList.toggle('hide')
    if(botonCodigo.textContent=='Ver Código'){
        botonCodigo.textContent= 'Ocultar Código'
    } else{
        botonCodigo.textContent= 'Ver Código'
    }
}

function test1(){
    let ingress = document.getElementById('input1').value.replace(/ /g, "")
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
  