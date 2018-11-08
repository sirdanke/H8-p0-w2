function digitPerkalianMinimum(angka) {
    var hasil = []
    var length = 0;
    for (i = 0; i <= angka; i++) {
        for (j = 0; j < angka; j++) {
            if (i * j === angka) {
                hasil.push(i + '' + j)
                if(length === 0 || length > (i+''+j).length){
                    length = (i+''+j).length
                
                }
            }
        }
    }
    if (angka < 9) {
        return 2
    } else 
    return length
}
// cara awal
//     var holder = 100; 
//     var cek = '';
//     for (k = 0; k < hasil.length; k++) {
//         var cek = hasil[k]
//         var hitung = 0;
//         // console.log(cek)
//         for (var l = 0; l <= cek.length; l++) {
//             hitung = l;
//         }
//         if (holder > hitung) {
//             holder = hitung
//         }

//     }
//     if (angka < 9) {
//         return 2
//     } else return holder
// }

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2