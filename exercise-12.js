function konversiMenit(menit) {
    j = Math.floor(menit / 60);
    m = menit % 60 ;
    if (j < 1){
        j =  ''; 
    }else if(j >= 1){
        j = j + ' menit '
    }

    if (m <1){
        m = ''
    }else if(m >= 1){
        m = m + ' detik'
    }
     return j + m
}
   
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00