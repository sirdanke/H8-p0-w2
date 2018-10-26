var name = 'andi';
var peran = 'tabib';

if (name==false || peran == false){
console.log('masukkan nama');
}
else if (name ==true && peran ==false){
console.log('masukkan peran');
}
else if (name ==true || peran== 'kesatria'){
console.log('selamat datang di dunia proxytia ' +name + '.'+' hallo ' +name+ ' '  +peran +' kamu dapat memyeramg demgan senjatamu');
}
else if (name ==true || peran=='penyihir'){
console.log('selamat datang di dunia proxytia' +name + '.' +'hallo ' +name+ ' ' +peran + ' kamu akan membantu temanmu yang terluka');
}
else if (name ==true || peran=='tabib'){
console.log('selamat datang di dunia proxytia ' +name + '.' +'hallo ' +name + ' ' +peran + 'peran kamu akan mencipkan keajaiban untuk temanmu');
}