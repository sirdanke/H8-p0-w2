function ubahHuruf(kata) {
    var huruf = 'abcdefghijklmnopqrstuvwxyz';
   // var result = '';
    var hasil = '' ;
    for(i=0; i<kata.length; i++){
        
    
      for(j=0; j<huruf.length; j ++){
            if(kata[i] === huruf[j]){
                hasil+=huruf[j+1]
            }
            //console.log(hasil)
        }//console.log(hasil)
    } return hasil
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu