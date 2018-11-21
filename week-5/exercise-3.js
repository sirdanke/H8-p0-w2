 
function highestScore (students) {
    var obj = {}
    var rataRata
    for(i = 0; i < students.length; i ++){  
        for(j =0; j < students.length; j ++){
            if(i !== j && students[i].score > students[j].score && students[i].class == students[j].class){
                obj[students[i].class] = {}
                obj[students[i].class].name = students[i].name
                obj[students[i].class].score = students[i].score
                }          
        
            else  if (students[i].class === 'tigers'){
                obj[students[i].class] = {}
                obj[students[i].class].name = students[i].name
                obj[students[i].class].score = students[i].score
                }
      }
    
  } return obj
}

// function graduates(students) {
//   var objOutput = {}
//   for (var j = 0; j < students.length; j++) {
//       if (!objOutput[students[j].class]) {
//           objOutput[students[j].class] = []
//       }
//       if (students[j].score > 75) {
//           var objClass = {}
//           objClass.name = students[j].name
//           objClass.score = students[j].score
//           objOutput[students[j].class].push(objClass)
//       }
//   }
//   return objOutput
// }

  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
