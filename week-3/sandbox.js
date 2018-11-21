
// //   function cariMedian(arr) {

// //     for (var i = 0; i < arr.length; i++) {
// //       for (var j = 0; j < arr.length; j++) {
// //         var bandingan = arr[j]
// //         if (arr[j - 1] > arr[j]) {
// //           arr[j] = arr[j-1]
// //           arr[j-1] = bandingan 
// //         }
// //       } 
// //     }
  
// //     return arr
  
// //   }
  
  
  
// //   // TEST CASES
  
// //   console.log(cariMedian([3, 10, 4, 7, 6])); // 7

//   /* 

// Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string. 

// Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z. 

// Contohnya, halo akan menjadi ahlo. Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut.

// */

// // function urutkanAbjad(str) {
// //  var bandingAbjad = '';
// //  var buatArr = [];
// //  for (var a=0; a<str.length; a++){
// //   buatArr.push(str[a])
// //  }
// //  console.log(buatArr)
// //  for(var i=0; i<buatArr.length; i++){
// //   for (var j=0; j<buatArr.length; j++){
// //    bandingAbjad = buatArr[j]
// //    if (buatArr[j - 1] > buatArr[j]) {
// //     buatArr[j] = buatArr[j-1]
// //     buatArr[j-1] = bandingAbjad
// //    }
// //   }
// //  }
// //  console.log(buatArr)
// // //  var hasil ='';
// // //  for (var b=0; b<buatArr.length; b++){
// // //   hasil += buatArr[b]
// // //  }
// // //  return hasil;
// // }
// // // TEST CASES

// // console.log(urutkanAbjad('hello')); // 'ehllo'

// // // console.log(urutkanAbjad('truncate')); // 'acenrttu'

// // // console.log(urutkanAbjad('developer')); // 'deeeloprv'

// // // console.log(urutkanAbjad('software')); // 'aeforstw'

// // // console.log(urutkanAbjad('aegis')); // 'aegis'
// // function urutkanAbjad(str){
// //     var indexstr = []
// //     var tampung = '';
// //    // indexstr.push(str[i])
// //     for(i=0; i < str.length; i ++){
        
// //         indexstr.push(str[i])
// //     }  
// //     for(j =0; j<indexstr.length; j++){
// //         tampung = indexstr[j];
// //         if(indexstr [j-1] > indexstr[j]){
// //             indexstr[j] = indexstr[j-1]
// //             indexstr[j-1] = tampung
// //         }
// //     }
// //     console.log(indexstr)
       
//     // var hasil =''
//     // for(k=0; k < indexstr.length; k ++){
//     //     hasil += indexstr[k]
//     // }
//     // return hasil
    

// // }

// // console.log(urutkanAbjad('hello')); // 'ehllo'
// // console.log(urutkanAbjad('truncate')); // 'acenrttu'

// // console.log(urutkanAbjad('developer')); // 'deeeloprv'

// // console.log(urutkanAbjad('software')); // 'aeforstw'

// // console.log(urutkanAbjad('aegis')); // 'aegis'
// // function urutkanAbjad(arr){
// // var unsorted = true;
// // var simpan ='';
// // while (unsorted) {

// //     unsorted = false
// //     for (var i = 0; 
// //         i < arr.length - 1; i++) {

// //         if (arr[i] > arr[i + 1]) {

// //             simpan = arr[i]

// //             arr[i] = arr[i + 1]

// //             arr[i + 1] = simpan
// //             unsorted = true
// //         }
// //     }
// //     // console.log(arr)
// //     }return arr
// // }
// function tukarBesarKecil(kalimat) {
//     var kamus = 'abcdefghijklmnopqrstuvwxyz';
//     var kamusBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     var result = '';
//     for(i =0 ;i<kalimat.length; i++){
//        // console.log (kalimat[i])
//     var cek1 = false
//     var cek2 =false
//         for(j=0; j <kamus.length; j ++){
//             if(kalimat[i] === kamus[j]){
//                 result += kamusBesar[j]
//                 cek1 = true             
//             }else if(kalimat[i] === kamusBesar[j]){
//                 result += kamus[j]
//                 cek2 = true
//             }
            
//         }if(cek1 == false && cek2 == false ){
//             result+=kalimat[i]
//         }
//     }
//   return result
// }
  
//   // TEST CASES
//   console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
//   console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
//   console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
//   console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
//   console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"

// recursive

// // function tambah (arr){
// //     var hasil = 0;
// //     for (i = arr; i > 0; i --){
// //         hasil += i
// //     }
// //     //console.log(hasil)
// //     var result = hasil.toString();
// //   //  console.log(result)
// //     var jumlah = 0;
// //     for(j = 0; j <= result.length; j++ ){
// //        //console.log(result[j])
// //         if( j >= 1){
// //         jumlah += result[j]
// //         //console.log(jumlah)
// //             }
// //         }
// //     console.log(jumlah)
// // }
// // console.log(tambah(10))

// function box(number){
//   let box = []
//   //let boxKecil = []
//   for (i =0; i < number; i ++){
//     let boxKecil = []  
//     if(i % 2 !== 0 ){
//         for(j= number; j >0; j --){
//           if((j+number) % number === 0){
//             boxKecil.push('#')
//             }
//           else 
//             boxKecil.push(j+(number*i))
//         }
//     } 
//     else
//     for(j=1 ;j <= number; j ++){
     
//       if( j >= number && (j+number+i) % number === 0 || j % number === 0){
//         boxKecil.push('#')
//         }
//       else if (i > 1 && i % 2 ===0){
//         boxKecil.push(j+(number*i))
//         }
//       else
//       boxKecil.push(j)
//     }  
//     box.push(boxKecil) 
//   }
//   return box
// }
// console.log(box(5))

// function multiArray(num){
//   let result = []
//   for(i =0; i < num; i ++){
//     let box = []
//     for(j =1; j <=num; j ++){
//     if((j +num*i) % 3 === 0){
//       box.push('#')   
//       }
//       else if(i >0 ){
//         box.push(j+num*i)
//       }
//       else 
//       box.push(j)
//   }
//     result.push(box)
//   }return result
// }
// console.log(multiArray(7))
// console.log(multiArray(4))

// function xo(angka){
//   let result = []
//   var count = 1;
//   for(i=0; i < angka; i ++){
//     var arr = []
//     for
//   }
// }


// function naikangkot(
//     var hitung = false
//     var halte =  -1
//     for (j =0; j < rute.length; j ++){
//       if(person.nakdari === rute[j]){
//         hitung = true
//       }
//       if (hitung = true){
//         halte ++
//       }
//       if(person.naikdari === rute[j]){
//         person.bayar = halte 8 * 2000
//       }
//     }
// )


// function countProfit(shoppers) {
//   let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
//                      ['Baju Zoro', 500000, 2],
//                      ['Sweater Uniklooh', 175000, 1]
//                    ];
//   var result = []
//   for(i = 0; i < listBarang.length; i ++){
//       var obj = {}
//       obj.product = listBarang[i][0]
//       var tampung = []
//       obj.shoppers = tampung
//       stockBarang = listBarang[i][2]
//       if(stockBarang === listBarang[i][2]){
//         obj.leftOver = stockBarang
//         obj.totalProfit = 0
//       }
      

//       for (j = 0; j < shoppers.length; j ++){

//           if(obj.product === shoppers[j].product && stockBarang >= shoppers[j].amount){
//           tampung.push(shoppers[j].name)     
//           stockBarang = stockBarang - shoppers[j].amount
//           obj.leftOver = stockBarang
//           obj.totalProfit = (listBarang[i][2] - stockBarang)*listBarang[i][1]
//           }
          
//       } 
//       result.push(obj)
//   }
//   return result
// }

// // TEST CASES
// console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
// //[ { product: 'Sepatu Stacattu',
// //   shoppers: [ 'Windi', 'Vanessa' ],
// //   leftOver: 5,
// //   totalProfit: 7500000 },
// // { product: 'Baju Zoro',
// //   shoppers: [],
// //   leftOver: 2,
// //   totalProfit: 0 },
// // { product: 'Sweater Uniklooh',
// //   shoppers: [],
// //   leftOver: 1,
// //   totalProfit: 0 } ]

// //console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));

//


// function addValidationCode(users){
//   let result = []
  
//   for (i =0 ; i < users.length; i ++){
//     obj = {}
//     obj.name = users[i].name
//     var num = users[i]['join date']
//     let code = ''
//     for(j = 0; j < obj.name.length; j++){
//       if(j === obj.name.length-1 && j %2 === 0){
//         code += obj.name[j]
//       }
//       else if(j % 2 === 0 || j === 0){
//         code += obj.name[j+1]
//       }
//       else
//       code += obj.name[j-1]   
//     }
//     let code2 = ''
//     for(k = 0; k < num.length; k ++){
//       if(num[k] !== '-')
//       code2+= num[k]
//     }
//     obj.addValidationCode = code+code2
//     result.push(obj)
//   }
//   return result   
// }

// //Test case
// console.log(addValidationCode([
//   {
//     name: 'Antonio',
//     'join date': '09-08-2018'
//   },
//   {
//     name: 'Banderaz',
//     'join date': '10-08-2018'
//   },
// ]));
// /**
//  Hasil Output
//  [
//   {
//     name: 'Antonio',
//     validationCode: 'nAotino09082018'
//   },
//   {
//     name: 'Banderaz',
//     validationCode: 'aBdnreza10082018'
//   },
// ]
//  */
// console.log(addValidationCode([
//   {
//     name: 'Cecile',
//     'join date': '01-02-2018'
//   },
//   {
//     name: 'Dominique',
//     'join date': '10-09-2018'
//   },
// ]));
// /**
//  Hasil Output
//  [
//   {
//     name: 'Cecile',
//     validationCode: 'eCicel01022018'
//   },
//   {
//     name: 'Dominique',
//     validationCode: 'oDiminuqe10092018'
//   },
// ]
//  */
// // console.log(addValidationCode([]));
// /**
//  Hasil Output
//  []
//  */


function makanTerusRekursif(waktu) {
  var time = 15
  var hasil = 0
  if(waktu < 15 && waktu > 0 ){
    return 1
  }
  else {
   return  makanTerusRekursif(waktu-15)
  }
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0