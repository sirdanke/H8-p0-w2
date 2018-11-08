
//   function cariMedian(arr) {

//     for (var i = 0; i < arr.length; i++) {
//       for (var j = 0; j < arr.length; j++) {
//         var bandingan = arr[j]
//         if (arr[j - 1] > arr[j]) {
//           arr[j] = arr[j-1]
//           arr[j-1] = bandingan 
//         }
//       } 
//     }
  
//     return arr
  
//   }
  
  
  
//   // TEST CASES
  
//   console.log(cariMedian([3, 10, 4, 7, 6])); // 7

  /* 

Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string. 

Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z. 

Contohnya, halo akan menjadi ahlo. Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut.

*/

// function urutkanAbjad(str) {
//  var bandingAbjad = '';
//  var buatArr = [];
//  for (var a=0; a<str.length; a++){
//   buatArr.push(str[a])
//  }
//  console.log(buatArr)
//  for(var i=0; i<buatArr.length; i++){
//   for (var j=0; j<buatArr.length; j++){
//    bandingAbjad = buatArr[j]
//    if (buatArr[j - 1] > buatArr[j]) {
//     buatArr[j] = buatArr[j-1]
//     buatArr[j-1] = bandingAbjad
//    }
//   }
//  }
//  console.log(buatArr)
// //  var hasil ='';
// //  for (var b=0; b<buatArr.length; b++){
// //   hasil += buatArr[b]
// //  }
// //  return hasil;
// }
// // TEST CASES

// console.log(urutkanAbjad('hello')); // 'ehllo'

// // console.log(urutkanAbjad('truncate')); // 'acenrttu'

// // console.log(urutkanAbjad('developer')); // 'deeeloprv'

// // console.log(urutkanAbjad('software')); // 'aeforstw'

// // console.log(urutkanAbjad('aegis')); // 'aegis'
// function urutkanAbjad(str){
//     var indexstr = []
//     var tampung = '';
//    // indexstr.push(str[i])
//     for(i=0; i < str.length; i ++){
        
//         indexstr.push(str[i])
//     }  
//     for(j =0; j<indexstr.length; j++){
//         tampung = indexstr[j];
//         if(indexstr [j-1] > indexstr[j]){
//             indexstr[j] = indexstr[j-1]
//             indexstr[j-1] = tampung
//         }
//     }
//     console.log(indexstr)
       
    // var hasil =''
    // for(k=0; k < indexstr.length; k ++){
    //     hasil += indexstr[k]
    // }
    // return hasil
    

// }

// console.log(urutkanAbjad('hello')); // 'ehllo'
// console.log(urutkanAbjad('truncate')); // 'acenrttu'

// console.log(urutkanAbjad('developer')); // 'deeeloprv'

// console.log(urutkanAbjad('software')); // 'aeforstw'

// console.log(urutkanAbjad('aegis')); // 'aegis'
// function urutkanAbjad(arr){
// var unsorted = true;
// var simpan ='';
// while (unsorted) {

//     unsorted = false
//     for (var i = 0; 
//         i < arr.length - 1; i++) {

//         if (arr[i] > arr[i + 1]) {

//             simpan = arr[i]

//             arr[i] = arr[i + 1]

//             arr[i + 1] = simpan
//             unsorted = true
//         }
//     }
//     // console.log(arr)
//     }return arr
// }
function tukarBesarKecil(kalimat) {
    var kamus = 'abcdefghijklmnopqrstuvwxyz';
    var kamusBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for(i =0 ;i<kalimat.length; i++){
       // console.log (kalimat[i])
    var cek1 = false
    var cek2 =false
        for(j=0; j <kamus.length; j ++){
            if(kalimat[i] === kamus[j]){
                result += kamusBesar[j]
                cek1 = true             
            }else if(kalimat[i] === kamusBesar[j]){
                result += kamus[j]
                cek2 = true
            }
            
        }if(cek1 == false && cek2 == false ){
            result+=kalimat[i]
        }
    }
  return result
}
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"