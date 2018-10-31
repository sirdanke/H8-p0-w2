function palindrome(kata) {
    // you can only write your code here!
    var result1 = '';
    for(var i = kata.length-1; i >= 0; i --){ 
            result1 = result1 + kata[i];
    }    
        if(result1 === kata){
            return true;
        }else{
            return false;
        }

}
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false*/