function xo(str) {
    var jumlahHurufO = 0;
    var jumlahHurufX = 0;
    for(var i = 0; i < str.length; i ++){
        if (str[i] ==='x'){
        jumlahHurufX = jumlahHurufX+1;
        }
        else if (str[i] ==='o'){
        jumlahHurufO = jumlahHurufO +1;
        }
        /*
        
        if (jumlahHurufO === jumlahHurufX){
            return true;
        }else if (jumlahHurufO !== jumlahHurufX){
            return false;
        }*/
        //return 'o' + jumlahHurufO + 'x' + jumlahHurufX
    }  return 'x = ' + jumlahHurufX+ ' o = ' + jumlahHurufO
  }

  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true