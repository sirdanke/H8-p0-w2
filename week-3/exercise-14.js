function mengelompokkanAngka(arr) {
    var arrayResult = [[],[],[]];
    for(i = 0; i <= arr.length-1; i ++){
        result1 = '';
        result2 = '';
        result3 = '';
    
        if(arr[i]%3 !== 0 && arr[i]%2 === 0){
            result1 += arr[i]
            arrayResult[0].push(result1)
        }else if (arr[i] %3 === 0){
            result2 += arr[i]
            arrayResult[2].push(result2)
        }else{
           // result3 += arr[i]
            arrayResult[1].push(arr[i])
        }
    
        
    } console.log(arrayResult)
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]