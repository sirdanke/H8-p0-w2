var deret = 0;
while(deret < 20){
  deret +=2;
  console.log(deret +'i love coding')
}

var deret = 20;
while (deret >0){
  console.log(deret +' i will become fullstack developer')
  deret -=2;
}

//
for(var angka = 1; angka <= 20; angka ++ ){
  console.log(angka +'- I love coding')
}
for (var angka = 20; angka>=1; angka --){
  console.log(angka + '-  will become fullstack developer')
}


for(var angka = 0; angka <= 100; angka ++){
  if(angka % 2 ===1){
    console.log(angka + ' ganjil')
  }else if(angka % 2 ===0){
    console.log(angka + ' genap')
  }
}

for(var angka2 = 0; angka2 < 100; angka2 +=2){
  if(angka2 % 3 === 0){
    console.log(angka2 + ' 3 kelipatan 3') 
  }else{
    console.log(angka2)
  }
}

for(var angka5 = 0; angka5 < 100; angka5 +=5){
    if(angka5 % 6 === 0){
      console.log(angka5 + ' 5 kelipatan 5') 
    }else{
      console.log(angka5)
    }
  }
  