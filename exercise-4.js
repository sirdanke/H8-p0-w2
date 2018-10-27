var tanggal = 30;
var tahun = 2020;

if (tanggal <0 >31 && tahun <1900 >2019){
console.log('invalid date');
}
var bulan ='januari';
switch (bulan)
{
    case 'januari' : {console.log(tanggal +bulan+tahun);break;}

    case 'februari': {console.log(tanggal +bulan+tahun);break;}

    case 'maret': {console.log(tanggal +bulan+tahun);break;}

    case 'april': {console.log(tanggal +bulan+tahun);break;}

    case 'mei': {console.log(tanggal +bulan+tahun);break;}

    case 'juni': {console.log(tanggal +bulan+tahun);break;}

    case 'juli': {console.log(tanggal +bulan+tahun);break;}

    case 'agustus': {console.log(tanggal +bulan+tahun);break;}

    case 'september': {console.log(tanggal +bulan+tahun);break;}

    case 'oktober': {console.log(tanggal +bulan+tahun);break;}

    case 'november': {console.log(tanggal +bulan+tahun);break;}

    case 'desember': {console.log(tanggal +bulan+tahun);break;}

    default : {console.log('invalid date')}
}

function jalanTol (jenisMobil, rute){
    var golongan = 0;
    for(i = jenisMobil.length; i >= 0; i ++)
    if (jenisMobil[i]=== 'sedan', 'van', 'minibus'){
      golongan = golongan +1;
    }else if (jenisMobil[golongan]=== 'bus', 'trek', 'mobilbox'){
        return 'golongan2';
    }else if (jenisMobil[golongan]=== 'trek gandeng'){
        return 'golongan3';
    }
    if (golongan === 1 && rute ===" dalamkota"){
      return 9500;
    }
  }

console.log(jalanTol ('sedan', 'dalamkota'))

