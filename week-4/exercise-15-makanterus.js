
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