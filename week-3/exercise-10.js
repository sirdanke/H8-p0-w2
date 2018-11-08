function perkalianUnik(arr){
    var result = [];
    for(var i = 0; i <= arr.length-1; i ++){
       // console.log(arr[i])
        var holder = 1;
        for(var j = 0; j<= arr.length-1; j ++){
            holder = holder * arr[j]
        
        }result.push(holder/arr[i])
    }return result
}
  
  // TEST CASES
  console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
  console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
  console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
  console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
  console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]

  /*algoritma
  1. buatlah sebuah fungsi perkalian perkalianUnik
  2. fungsi ini digunakan untuk mencari hasil perkalian dari semua data dalam array lalu mengeluarkan/ output hasil pembagian dari total perkalian dibagi angka sesuai dari urutan array
  3. buatlah sebuah variable dengan nilai array sebagai tempat menapung hasil pekerjaan
  4. buatlah sebuah for loop/ looping untuk mencari hasil pembagian 
  5. var dalam loop dimulai dari 0 dan selesai jika telah sama atau lebih kecil dari VREyeParameters.length dan dilakukan increment/ ++
  6. lalu buatlah var dengan nilai 1 sebagai penampung hasil perkalian
  7. lalu buat lagi for loop kedua didalam loop pertama dengan nama var yg beda dr yg pertama.
  8. lalu buatlah var tersebut dengan nilai awal 0 dan selesai jika telah sama atau lebih kecil dari (parameter.length) dan increment/ ++
  9. buatlah variable hasil menjadi sama dengan hasil kali (pamareter[index]). looping akan menlakukan pergantian angka tergantung pada urutannya
  10. untuk menampilkajn output total perkalian dibagi masing-masing angka dalam bentuk data array.perkalian
  11. buatlah built in function push terhadap var array yang berisi hasil(hasil perkalian dibagi)parameter[i] dan looping akan membagi gasil tersebut dengan data sesuai urutannya
  12. untuk menampilkan data dalam function buat return.array di dalam function di luar looping pertama

*/