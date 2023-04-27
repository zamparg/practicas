function palindrome(str) {
    let word = str.replace(/[^a-z0-9]/gmi, "").replace(/\s+/g, "")
    console.log(word)
    let wordArray = word.split("");
    let wordArrayR = wordArray.reverse();
    let wordB = wordArrayR.join(""); 
    console.log(wordB)
    if(word.toLowerCase()==wordB.toLowerCase()){
          return true
    }
    return false;
}
  
console.log(palindrome("A man, a plan, a canal. Panama"))
// EJERCICIO 2
function convertToRoman(num) {
    let result = []
    let keys=[['I','II','III','IV','V','VI','VII','VIII','IX'],['X','XX','XXX','XL','L','LX','LXX','LXXX','XC'], ['C','CC','CCC','CD','D','DC','DCC','DCCC','CM'], ['M']]
    let iterator=num.toString().split('')
    for (let i = 0; i < iterator.length; i++) {
        let number = Number(iterator[i])
        result.push(keys[iterator.length-1-i][number-1])
    }
    return result.join("");
   }
   
console.log(convertToRoman(36))


//Ejercicio 3

//I<30?I:I-30


function rot13(str) {
    let keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let keysB = 'NOPQRSTUVWXYZABCDEFGHIJKLM'
    let result = str.split("")
for (let i = 0; i < result.length; i++) {
   if(keys.includes(result[i])){
    let key= keys.indexOf(result[i])
    result[i]=keysB[key]
   }    
}
    
    return result.join("");
  }
  
console.log(rot13("SERR PBQR PNZC"));

