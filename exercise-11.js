
 function balikKata2(kata2){
   var tampungan ='';
   for (var i = kata2.length - 1; i >= 0; i--) { 
    tampungan += kata2[i]; 
    }
    return tampungan
 }
 console.log(balikKata2('Hello World and Coders'))
 console.log(balikKata2('john doe'))
 console.log(balikKata2('i am a bookworn'))
 console.log(balikKata2('coding is my hobby'))
 console.log(balikKata2('super'))
