function shoutOut(){
    console.log('hallo function !')
}
shoutOut ();

function calculateMultiply(num1,num2){
    return num1*num2
}
console.log(calculateMultiply(5,6))

function processSentence(name, age, addres, hobby){
    return 'nama saya' + name + 'umur saya'+ age + 'alamat saya'+ addres + 'hoby saya' + hobby
}
var name = "Agus ";
var age = ' 30, ';
var address = " Jln. Malioboro, Yogjakarta, ";
var hobby = " gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);