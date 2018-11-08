
function angkaPrima(angka) {
    if( angka %2 !== 0 && angka % 3 !== 0 && angka % 5 !== 0){
      return true
    }else if (angka === 3){
      return true
    }else{
      return false
    }
 }
 
 // TEST CASES
 console.log(angkaPrima(3)); // true
 console.log(angkaPrima(7)); // true
 console.log(angkaPrima(6)); // false
 console.log(angkaPrima(23)); // true
 console.log(angkaPrima(33)); // false 
 
 function cariMedian(arr) {
   var result = '';
   var maxLength = Math.floor(arr.length/2) ;
   var evenLength = maxLength -1;
   var result = '';
   var result1= 0;
  // console.log(maxLength)
   if(arr.length % 2 !== 0){
     result = arr[maxLength]
   }else if(arr.length % 2 === 0){
     result1 = arr[maxLength] + arr[evenLength]
     result = result1 / 2
   }//console.log(arr[maxLength])
  return result
 }
 
 // TEST CASES
 console.log(cariMedian([1, 2, 3, 4, 5])); // 3
 console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
 console.log(cariMedian([3, 4, 7, 6, 10])); // 7
 console.log(cariMedian([1, 3, 3])); // 3
 console.log(cariMedian([7, 7, 8, 8])); // 7.5 */
 