var arr = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"] ;
//.push('SMA international metro')
function dataHandling(input){
    var result = 
    input.push("pria","SMA international metro")
    input.splice(1,2,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
    return input
}
console.log(dataHandling(arr))

var date = arr[3].split("/");

var bulan = date[1];
    if(bulan == '01'){
        console.log ('januari')
    }else {
        switch(bulan){
    
            case '02' : {
                console.log('Februari');break;
            }
            case '03':{
                console.log('Maret');break;
            }
            case '04':{
                console.log('april');break;
            }
            case '05':{
                console.log('mei');break;
            }
            case '06':{
                console.log('Juni');break;
            }
            case '07':{
                console.log('Juli');break;
            }
            case '08':{

            }
                
                
                default : {
                console.log ('unvalid')
            }
        }
    }
var date2 = date.join("-")
date.sort(function (a,b) {return b-a})
console.log(date)

console.log(date2)
var name2 = arr[1].slice(0,15)
console.log(name2)
