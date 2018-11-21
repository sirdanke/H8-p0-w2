
function changeMe(arr) {
   
    for(i=0; i < arr.length; i ++){
        var obj = {}
        var indexArr = arr[i];
    //    console.log(indexArr)
       
        for(j=0; j< indexArr.length; j ++){
            //console.log(indexArr[3])
            obj.firstname = indexArr[0]
            obj.lastname = indexArr [1]
            obj.gender = indexArr[2]
            if(indexArr[3] === undefined){
                obj.age = 'invalid Birth Year'
            }else obj.age = 2018 - indexArr[3]  
             
        }
        console.log( obj)
    }   
  }
  //console.log(changeMe)
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  //changeMe([]); // ""

