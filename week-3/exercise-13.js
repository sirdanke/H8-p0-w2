// TEST CASES
function targetTerdekat(arr) {
 var jarak = arr.length; // deklarasi jarak maksimal
 var xIndex = []; // Deklarasi array xIndex u/ menghitung index tiap x
 var oIndex ;// Deklarasi oIndex  for (let i=0; i<arr.length ; i++){ Looping i 0 hingga kurang dari panjang array
 for (var i=0; i<arr.length ; i++){
   if (arr[i] === 'x'){ // Jika array sama denga x, maka input push i ke array xIndex
     xIndex.push(i)
     //console.log(xIndex)
   } else if (arr[i] === 'o'){ // Jika array sama dengan o, maka input push i ke array oIndex
     oIndex = i
   }
}
 //console.log(xIndex);
 // console.log(oIndex);
 for (var j = 0; j<xIndex.length; j++){ // Looping j 0 hingga kurang dari panjang array xIndex
   var tmp = Math.abs(xIndex[j] - oIndex); // Deklarasi nilai tmp yang menghitung tiap xIndex dikurangi oIndex
   
   if (tmp < jarak){ // Jika nilai tmp lebih kecil dari jarak, maka jarak diassign dengan nilai tmp
     jarak = tmp;
    
   }//console.log(tmp)
 }
 if (jarak === arr.length){ // Jika jarak masih sama saat deklarasi assign jarak maksimal
   return 0 // maka return 0
   
 } else return jarak // jika Bukan, maka return nilai jarak}
//Message Input
}
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2