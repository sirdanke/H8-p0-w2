function tentukanDeretAritmatika(arr) {
    for(i =0; i <= arr.length-1; i ++){
        if(arr[i+ arr.length-1] - arr[ i+ arr.length-2] == arr[i+ 0]){
            return true
        }else {
            return false
        }
    }  
}
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
/*
  algoritma
  1. buatlah for loop untuk menlihat angka sudah di tampilkan atau belum.
  2. lakukan looping dari 0 hinggal VREyeParameters.leng-1 dengan increment
  3. buatlah pengkondisian dengan melakukan pengecekan apakan angka terakhir - angka 2 rekahir = angka pertama
  4. jika iya maka akan true
  5. jika tidak akan false
  6. console. log pada bagian input*/