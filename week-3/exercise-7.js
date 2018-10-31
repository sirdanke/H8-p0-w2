function hitungJumlahKata(str) {
  
  //var str = kalimat.split(" ");
  //return str.length;
   var result = 1;
       for (var i = 0; i < str.length; i ++){
         if(str[i] === ' '){
          result = result + 1;
         }else if(str[i] === '' ){
           result = 'invalid'
         }
           
         
        //return result   
      }return result   
       
  
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')) //5