
function urutkanAbjad(arr){
    var result = ''
    var kamus = 'abcdefghijklmnopqrstuvwxyz'
    for(i =0; i<kamus.length; i ++){
        for(j =0; j < arr.length; j ++){
            if(kamus[i] === arr[j]){
                result += kamus[i]
            }
        }
    }
    return result
}
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'

console.log(urutkanAbjad('developer')); // 'deeeloprv'

console.log(urutkanAbjad('software')); // 'aeforstw'

console.log(urutkanAbjad('aegis')); // 'aegis'
