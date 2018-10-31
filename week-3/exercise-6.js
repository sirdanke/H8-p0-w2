function angkaPalindrome(num) {
    for(var i = num; i > 0 ; i ++){
        //while (true){

        
        num ++;
        var reversed = '';
        var numString = num.toString();
            for( var j = numString.length-1; j >= 0; j --){
                reversed += numString[j]
              
            if (reversed == num){
                return num;      
            }
        }
    }
        
       // if(i === num[i])
}//return num
    


// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001*/