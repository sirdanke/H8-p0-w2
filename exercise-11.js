
 function balikKata2(kata2){
   var tampungan ='';
   for (var i = kata2.length - 1; i >= 0; i--) { 
    //  console.log(kata2[i])
    //console.log(i)
      if(i %2 === 0){
        tampungan = tampungan + kata2[i]
      }
    }
    return tampungan
 }
 console.log(balikKata2('Hello World and Coders'))
//  console.log(balikKata2('john doe'))
//  console.log(balikKata2('i am a bookworn'))
//  console.log(balikKata2('coding is my hobby'))
//  console.log(balikKata2('super'))
