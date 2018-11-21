
function changeVocals (str) {
  
  var kamus = 'aiueoAIUEO';
  var kamusOutput = 'bjvfpBJVFP';
  var hasil = '';
  for(i = 0; i < str.length; i ++){
    var cek = false
    for(j= 0; j < kamus.length; j ++){
      if(str[i] === kamus[j]){
        hasil += kamusOutput[j]
        cek = true
        }
      }
    if(!cek){
      hasil +=str[i] 
    }  
  }return hasil
}


function reverseWord (str) {
  var hasil = ''
  for (i= str.length-1; i >=0; i --){
    hasil += str[i]
  }
  return hasil
}


function setLowerUpperCase (str) {
  let kamus = 'abcdefghijklmnopqrstuvwxyz';
  let hasil = '';
  for(i = 0; i < str.length; i ++){
    let cek = false 
    for(j=0; j <kamus.length; j ++){
      if(str[i] === kamus[j]){
        hasil += str[i].toUpperCase();
        cek = true
      }
    }
    if(!cek){
      hasil += str[i].toLowerCase();
    }
  } return hasil
}

function removeSpaces (str) {
  if(str.length < 5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
   let result = '';
   for(i=0; i < str.length; i ++){
     let cek = false
     if(str[i] === ' '){
       cek = true
     }
     if(!cek){
       result += str[i]
     }
   }
   return result
}


function passwordGenerator (name) {
  let inputName = changeVocals(name)
  let reverseName = reverseWord(inputName)
  let setName = setLowerUpperCase(reverseName)
  let result = removeSpaces(setName)
  return result
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'