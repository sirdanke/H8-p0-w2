
function sorting(arrNumber) {
    var unsorted = true
    while (unsorted ){
      unsorted = false 
      for(i = 0; i < arrNumber.length-1; i ++){
        if(arrNumber[i] > arrNumber[i+1]){
          tampung = arrNumber[i]
          arrNumber[i] = arrNumber[i+1]
          arrNumber[i+1] = tampung
          unsorted = true
         
        }
      }
    }return arrNumber
    
  }
  
  
  
  function getTotal(arrNumber) {
    if(arrNumber.length === 0)
    return "''"
    let hasil = 0
    var count = 0;
    for(i =0; i < arrNumber.length; i ++){
      if(hasil < arrNumber[i]){
        hasil = arrNumber[i]
      }
    }
    for(j = 0; j < arrNumber.length; j ++){
      if(hasil === arrNumber[j]){
        count +=1
      }
    }
    return count
  }
  
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''