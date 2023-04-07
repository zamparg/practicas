const codigo = document.getElementById("reto1");
const contenido = document.getElementById("contenido1");
document.getElementById("reto1Content").addEventListener("click", mostrar())

function mostrar(){
    contenido.innerHTML=`
    <p>Este año los elfos han comprado una máquina que envuelve regalos. Pero… ¡no viene programada! Necesitamos crear un algoritmo que le ayude en la tarea.

    A la máquina se le pasa un array con los regalos. Cada regalo es un string. Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos.
    
    El papel de regalo es el símbolo * y para envolver un regalo se coloca el símbolo * de forma que rodee totalmente al string por todos los lados. Por ejemplo:</p>
    `
}
codigo.textContent = `

function wrapping(gifts) {
    let wrap = gifts.map((gift) =>
     
      ('*'.repeat(gift.length+2)) + '\\n*'+gift+'*\\n'+('*'.repeat(gift.length+2))
      )
  
    return wrap
  }
`

function wrapping(gifts) {

    let wrap = gifts.map((gift) =>
     
      ('*'.repeat(gift.length+2)) + '\n*'+gift+'*\n'+('*'.repeat(gift.length+2))
    )
  
    return wrap
  }
  