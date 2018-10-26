function body (size, harga){
    return size * harga
}
console.log(body (10,10))

function mesin (type, speed){
return 'type mobil='+ type +'kemampuang' +speed
}
function sales(c,d){
    var a = body(3,5)
    var b = mesin(6,5)
    return 'harga' + a + 'deskripsi' + b
}
console.log(sales())

function rugi(){
    var t = sales ()
    return '88888' + t
}
console.log(rugi())