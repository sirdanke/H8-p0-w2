// function digitPerkalianMinimum(angka) {
//     var hasil = []
//     var length = 0;
//     for (i = 0; i <= angka; i++) {
//         for (j = 0; j < angka; j++) {
//             if (i * j === angka) {
//                 hasil.push(i + '' + j)
//                 if(length === 0 || length > (i+''+j).length){
//                     length = (i+''+j).length
                
//                 }
//             }
//         }
//     }
//     if (angka < 9) {
//         return 2
//     } else 
//     return length
// }
// // cara awal
// //     var holder = 100; 
// //     var cek = '';
// //     for (k = 0; k < hasil.length; k++) {
// //         var cek = hasil[k]
// //         var hitung = 0;
// //         // console.log(cek)
// //         for (var l = 0; l <= cek.length; l++) {
// //             hitung = l;
// //         }
// //         if (holder > hitung) {
// //             holder = hitung
// //         }

// //     }
// //     if (angka < 9) {
// //         return 2
// //     } else return holder
// // }

// // TEST CASES
// console.log(digitPerkalianMinimum(24)); // 2
//   console.log(digitPerkalianMinimum(90)); // 3
//   console.log(digitPerkalianMinimum(20)); // 2
//   console.log(digitPerkalianMinimum(179)); // 4
//   console.log(digitPerkalianMinimum(1)); // 2


//   while (unsorted) {

//     unsorted = false



//     for (var i = 0; i < arr.length - 1; i++) {

//         if (arr[i] > arr[i + 1]) {

//             simpan = arr[i]

//             arr[i] = arr[i + 1]

//             arr[i + 1] = simpan



//             unsorted = true



//         }



//     }

//     // console.log(arr)

// }


function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
    var result = []
    for(i = 0; i < listBarang.length; i ++){
        var obj = {}
        obj.product = listBarang[i][0]
        var tampung = []
        obj.shoppers = tampung
        stockBarang = listBarang[i][2]
        if(stockBarang === listBarang[i][2]){
          obj.leftOver = stockBarang
          obj.totalProfit = 0
        }
        

        for (j = 0; j < shoppers.length; j ++){

            if(obj.product === shoppers[j].product && stockBarang >= shoppers[j].amount){
            tampung.push(shoppers[j].name)     
            stockBarang = stockBarang - shoppers[j].amount
            obj.leftOver = stockBarang
            obj.totalProfit = (listBarang[i][2] - stockBarang)*listBarang[i][1]
            }
            
        } 
        result.push(obj)
    }
    return result
  }
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  //console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));