function pasanganTerbesar(num) {
    var str = num.toString();
    var array = 0;
    var terbesar = 100;

        for(i = 0; i< str.length-1; i ++){
            var array = str[i]+ str[i +1];
        
            if(terbesar > array){
                terbesar = array;
              //  console.log(terbesar)
            }
            
        
        }return parseInt(terbesar)
        

  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99