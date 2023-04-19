const contenido2 = document.getElementById("hide2");
const boton2 = document.getElementById("change2")
boton2.addEventListener("click", function(){change(contenido2,boton2)})

const codigo2 = document.getElementById("code2");
const botonCodigo2 = document.getElementById("view2")
botonCodigo2.addEventListener("click", function(){changeCodigo(codigo2, botonCodigo2)})

const botonTest2 = document.getElementById("test2")
botonTest2.addEventListener("click", function(){test2('input2', 'screen2')})


function test2(){
    let year=document.getElementById('input2').value
    let ingress = document.getElementById('input2b').value.replace(/ /g, "")
    let holidays = ingress.split(',')
    let feriados=holidays.length
    let result= countHours(year, holidays)
    let screen=document.getElementById('screen2')
    screen.innerHTML=``
    screen.innerHTML+=`
        <p class="text-center">El año ${year} tiene ${feriados} feriados y tendrán que hacer ${result} horas extra.</p>
        `

}


function countHours(year, holidays) {
    let fest = 0
    holidays.forEach(day =>{
      let date = (new Date (`${day}/${year}`)).getDay()
      if(date != 0 && date != 6){
              fest+=2
          }
    })
      return fest
    }