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