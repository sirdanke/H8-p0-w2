function tentukanDeretGeometri(arr) {
    
    for(var i = 0; i <= arr.length-1; i ++);{
        for (var j = 0; j <= arr.length-1; j ++){
            if(arr[j+1]/arr[j] == arr[j+2]/arr[j+1]){
                return true   
            }else {
                return false
        }
        }
    }
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false

  /*algoritma

  1. buat fungsi tetukan derat algoritma
  2. buatlah variable penampung hasil dengan value string kosong (tidak terpakai)
  3. buatlah for loop dengan awal 0 berhenti ketika parameter.length -1 lalu increment
  4. buat lah kondisonal if arr[i+1]/arr[i] bernilai sama dengan arr[i+2]/ arr[i+1] tampilan true
  5. jika tidak tampilkan false
  6. buatlah return hasil untuk mengeluarkan hasil pencarian */
  