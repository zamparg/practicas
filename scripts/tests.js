function createCube(size) {
    let a = ""
    for (i=1; i<=size; i++){
     let b = " ".repeat(size-i)+ `/\\`.repeat(i) + `_\\`.repeat(size)+"\n"
     a = a.concat(b)
    }
    for (i=size; i>0; i--){
        let b = " ".repeat(size-i)+ `\\/`.repeat(i) + `_/`.repeat(size)+"\n"
        a= a.concat(b)
    }
    console.log(a)
    return a.slice(0,-2)
  }

 createCube(4)

 const a1 = ['bici', 'coche', 'bici', 'bici']
 const a2 = ['coche', 'bici', 'muñeca', 'coche']
 const a3 = ['bici', 'pc', 'pc']

 function getGiftsToRefill(a1, a2, a3) {
    let result = []
    let control = Array.from(new Set([].concat(a1,a2,a3 )))
    control.forEach(gift =>{
        if (!(a1.some(el => el == gift) &&
            a2.some(el => el == gift) &&
            a3.some(el => el == gift))){
                result.push(gift)
        }
    })
    return result
  }

  getGiftsToRefill(a1, a2, a3)

let part ='zzzoonzzz'

function checkPart(part) {
    let splitString = part.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join(""); 

    if(part==joinArray){
        return true
    }else{
        for (i=0; i<=part.length; i++){
            let array = [...splitString]
            array.splice(i,1)
            
            let reverse = [...array].reverse()
            let Ajoin= array.join("")
            let Rjoin= reverse.join("")
            if(Ajoin==Rjoin){return true}
        }
    }
    return false
  }
  checkPart(part)
 
  function countTime(leds) {
    let tiempo = 0
    let ledsX =[...leds]
    while(ledsX.some(el => el==0)){
      let ledsZ =[...ledsX]
      for(let i = 0; i<ledsX.length; i++){
        if(ledsX[i-1]==1 || (i==0 && ledsX[ledsX.length-1]==1)){
              ledsZ[i]=1
            }
        }
        tiempo+=7

      ledsX=ledsZ
    }
  
  
    return tiempo
  }
const leds = [0, 0, 0, 0, 1]

const heights = [1, 3, 8, 5, 2]

function checkJump(heights) {
    let cima = Math.max(...heights)
    let iZ= heights.indexOf(cima)
    if((!(heights[iZ+1]))&& (heights[iZ+1]!=0)||
    (!(heights[iZ-1]) && (heights[iZ-1]!=0))){
      return false}

    for (let i = 0; i < iZ-1; i++) {
        if(heights[i]>heights[i+1]){
            return false
        }
    }
    for (let i = heights.length; i > iZ; i--) {
        if(heights[i]>heights[i-1]){
            return false
        }
    }
    
    return true
  }


  console.log(checkJump(heights))




// ejercicio 11

function getCompleted(part, total) {
    
    let P = part.split(':')
    
    for (let i = 2; i >= 0; i--) {
        P[i]=parseInt(P[i])*(60**(2-i))
    }
    let segundosP = P.reduce((acc,curr)=>{return acc+curr},0)
    
    let T = total.split(':')
    for (let i = 2; i >= 0; i--) {
        T[i]=parseInt(T[i])*(60**(2-i))
    }
    let segundosT = T.reduce((acc,curr)=>{return acc+curr},0)
    
    let control=true
    
    let segundosPDiv = [segundosP]
    for (let i = 1; i <= segundosP/2; i++) {
        if(segundosP%i==0){
            segundosPDiv.push(i)
        }
    }
    let segundosTDiv = [segundosT]
    for (let i = 1; i <= segundosT/2; i++) {
        if(segundosT%i==0){
            segundosTDiv.push(i)
        }
    }
    let divisores=[]
    segundosPDiv.forEach(num =>{
        if (segundosTDiv.includes(num)){
            divisores.push(num)
        }
    })
    segundosP=segundosP/Math.max(...divisores)
    segundosT=segundosT/Math.max(...divisores)
    // while(control){
    //     for (let i = 2; i <= 10; i++) {
    //         if(segundosP%i==0 && segundosT%i==0){
    //             segundosP=segundosP/i
    //             segundosT=segundosT/i
    //             break
    //         }else if(segundosT%segundosP==0 && segundosP!=1){
    //             segundosT=segundosT/segundosP
    //             segundosP=1

    //         }
    //         if(i==10 && segundosP%i!=0 && segundosT%i!=0){
    //             control=false
    //         }
    //     }
    // }
    return `${segundosP}/${segundosT}`
}

console.log(getCompleted('01:10:10', '03:30:30'))

function selectSleigh(distance, sleighs) {
    let result = sleighs.map(elem =>(
      {'name':elem.name,
      'consumption': elem.consumption*distance}
    ))
    let result2 = result.filter(sleigh => sleigh.consumption <= 20)
    let best = result2.pop()
    let name = best?best.name:null
    return name
  }

  const distance = 30
const sleighs = [
  { name: "Dasher", consumption: 10 },
  { name: "Dancer", consumption: 5 },
  { name: "Rudolph", consumption: 3 },
  { name: "Midu", consumption: 1 }
]





function getFilesToBackup(lastBackup, changes) {
    let files = changes.filter(change => change[1]>lastBackup)
    let solution = files.map(elem => elem[0])
    solution=Array.from(new Set(solution))
    solution.sort()
    return solution
      }

      const lastBackup = 1546300800
const changes = [
  [ 3, 1546301100 ],
  [ 2, 1546300800 ],
  [ 1, 1546300800 ],
  [ 1, 1546300900 ],
  [ 1, 1546301000 ]
]
getFilesToBackup(lastBackup, changes) 



// function getOptimalPath(path) {

//     temporal = []

//         for (let i = path.length - 2; i >= 0; i--) {
//             temporal= path[i].map(el =>{
//                 let results =[]
//                 let pathP=path[i]
//                 let index = pathP.indexOf(el)
//                 let linea = temporal[0] ? temporal:path[i+1]

//                 let elem1= linea[index][0]?linea[index]:[linea[index]]
//                 let elem2=linea[index+1][0]?linea[index+1]:[linea[index+1]]
                
//                 elem1.forEach(elem=>results.push(el+elem))
//                 elem2.forEach(elem=>results.push(el+elem))
                
//                 console.log(results)
//                 return results
//             })


//         }
//         console.log(temporal)
//         console.log(Math.max(temporal))
//     return 0
//   }



Test: getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1]])


  function getOptimalPath(path) {

    let temporal = [path[0]]
    let temporal2= []

    for (let i = 0; i < path.length-1; i++) {
        let elemento = path[i+1]
        let control=0
        temporal2=elemento.map(el => {
            let index = control
            
            let array =[]
            
            if(temporal[index-1]){
            temporal[index-1].forEach(num =>{
                array.push(num+el)
            })}
            if(temporal[index]){
                temporal[index].forEach(num =>{
                array.push(num+el)
            })}
            control++
            return array
        })
        temporal=temporal2
    }     
    let result = temporal2.reduce((acc,curr)=>{
        return acc.concat(curr)
    })
    
    console.log(Math.min(...result));
    return Math.min(...result)
  }

  decorateTree('B P R P')

  function decorateTree(base) {
    let arbol = [base]
    let temporal = base.split(" ")
    let control = base.split(" ").length -1

    while(control>=1){
        let rama=[]
        for (let i = 0; i < temporal.length-1; i++) {
            let temp1= temporal[i][0]
            let temp2= temporal[i+1][0]
            if(temp1==temp2){rama.push(temporal[i])}else{
                let options = ['B', 'P', 'R']
                let filter = options.filter(
                  el => el!=temporal[i] && el!=temporal[i+1])
                rama.push(filter)
            }
        }
        temporal=rama
        arbol.unshift(rama.join(" "))
        control--
    }
    return arbol
  }

  // Ejercicio 16
  function fixLetter(letter) {
    let carta = letter.trim()
    let procesado = carta.replace(/\s+/g, ' ')
    
    if(!(procesado.endsWith(".")||procesado.endsWith("!")||procesado.endsWith("?"))){
      procesado+='.'
    }
    carta=procesado.replace(/\?+/g, '?')
    
    procesado = carta.charAt(0).toUpperCase() + carta.slice(1)
    
    carta=procesado.split('. ').join('.')
    procesado = carta.split(' .').join('.')
    carta=procesado.split('.').join('. ')
    procesado=carta.split(', ').join(',')
    carta=procesado.split(' ,').join(',')
    procesado=carta.split(',').join(', ')
    carta=procesado.split(' ?').join('?')
    procesado = carta.replaceAll('santa', 'Santa')
    carta = procesado.replaceAll('claus', 'Claus')
    procesado=carta.split('. ')
    carta= procesado.map(el=>
      el=el.charAt(0).toUpperCase() + el.slice(1)
    )
    procesado=carta.join('. ').split('? ')
    carta= procesado.map(el=>
      el=el.charAt(0).toUpperCase() + el.slice(1)
    )
    procesado=carta.join('? ').split('! ')
    carta= procesado.map(el=>
      el=el.charAt(0).toUpperCase() + el.slice(1)
    )
    procesado=carta.join('! ')

    carta= procesado.trimEnd()
    return carta
  }
  console.log(fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"))


//EJERCICIO 17

function carryGifts(gifts, maxWeight) {
  let result = []
  let temporal = [gifts[0]]
  let temporalNumber = temporal[0].length


  for(let index=1; index<gifts.length; index++){
    if(gifts[index].length > maxWeight){break}
    if(temporalNumber + (gifts[index].length) > maxWeight){
      result.push(temporal[0])
      temporal =[]
      temporalNumber=gifts[index].length
      temporal.push(gifts[index])
    }else{
      temporal.push(gifts[index])
      let temporal2 = temporal.join(' ')
      temporal=[temporal2]
      temporalNumber+=gifts[index].length
    }
  }
  result.push(temporal[0])
  return result
}

console.log(carryGifts(['toy', 'gamme', 'toy', 'bike'], 7))

function dryNumber(dry, numbers) {
  let result = []
  let seco = dry.toString()
  for(let i=0; i<=numbers; i++){
    let number = i.toString()
    if(number.includes(seco)){
      result.push(parseInt(number))
    }
  }
  return result
}

console.log(dryNumber(0, 8))


function sortToys(toys, positions) {
  let elem = toys.map(el =>{
    let index = toys.indexOf(el)
    let rta = {
      'toy': el,
      'pos':positions[index]
    }
    return rta
  })
  elem.sort((a,b)=> a.pos-b.pos)
  result = elem.map(el=> el.toy)
  return result
}

const toys = ['ball', 'doll', 'car', 'puzzle']
const positions = [2, 3, 1, 0]

console.log(sortToys(toys, positions))