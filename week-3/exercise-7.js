function hitungJumlahKata(str) {
  
   var result = 0;
   var kata = '';
       for (var i = 0; i < str.length; i ++){
         if(str[i] === ' ' && str != ''){
          result = result + 1;
          kata ='';
         }else {
           kata+=str[i]
         }
 
      }
      if(kata !=''){
        result = result+1
      }
      return result   
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')) //5