function fpb(angka1, angka2) {
    var str1 = angka1
    var str2 = angka2
    var hasil = '';
    for(var i = 0; i <str2; i ++){
        if(str1 % i === 0 && str2%i ===0){
            hasil = i;
        }//console.log(i)
    }return hasil

    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1*/



  function cariModus(arr){
    var tampung = 0;
    var tampung2 = 0;
    var modus = 0;
    for(i =0; i<arr.length; i ++){
        tampung = 0;
        for(j=0; j<arr.length; j ++){
            if(j !== i && arr[j] === arr[i]){
                tampung ++
            }
        }if (tampung2 < tampung){
            tampung2 = tampung
            modus = arr[i]
        }
    }return modus
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1


/*

 Buatlah sebuah function drawPattern yang menerima 1 parameter berupa angka

 Angka tersebut mewakili panjang dan lebar pattern yang akan dibuat

 pada setiap baris ganjil maka kolom genapnya akan dicetak pola `/`

 pada setiap baris genap maka kolom ganjilnya dicetak pola '\'



 contoh 1:

 ----------------------------

 drawPattern(3)



 Output

 ---

  / 

 \ \

  / 



 contoh 2:

 ----------------------------

 drawPattern(2)

 /

\



 */





//Put your code here


/*
function drawPattern(n){

  for (i=1; i<=n; i++){

      var pattern=''

      for (j=1; j<=n; j++){

          if(i%2===1 && j%2===0){

              pattern+='/'

          }

          else if (i%2===0 && j%2===1){

              pattern+='\\'

          }

          else {

              pattern+=' '

          }

      }

      return pattern

  }

}



//Test case



function drawPattern(n){

  var output=''
  
  
  
      for (i=1; i<=n; i++){
  
          var pattern=''
  
          for (j=1; j<=n; j++){
  
              if(i%2===1 && j%2===0){
  
                  pattern+='/'
  
              }
  
              else if (i%2===0 && j%2===1){
  
                  pattern+='\\'
  
              }
  
              else {
  
                  pattern+=' '
  
              }
  
          }
  
          var output = output+ pattern + "\n"
  
      }
  
      return (output)
  
  }

  console.log(drawPattern(5))

/*

Output:

---

/ / 

\ \ \ 

/ / 

\ \ \ 

/ / 

*/



//console.log(drawPattern(6))

/*

Output:

---

/ / /

\ \ \ 

/ / /

\ \ \ 

/ / /

\ \ \ 

*/



//drawPattern(7)

/*

Output:

---

/ / /

\ \ \ \

/ / /

\ \ \ \

/ / /

\ \ \ \

/ / /


function bintang(arr){
var output ='';
for (var i = 0; i <= arr; i ++){
  var result = '';
  for(var j =1; j <= arr-i; j ++){
    result = result+ j; 
    
  }
  output = output +=result+'\n'
}return output
}
console.log(bintang(5)) */