// function graduates (students) {
//     var obj = {}
//     for(i = 0; i < students.length; i ++){
//         if(students[i].score >= 75){  
//             for(j = 0; j < students.length; j++){
//                 obj[students[i].class] = {}    
//                 obj[students[i].class].name = students[i].name
//                 obj[students[i].class].score = students[i].score
//             }
//         } 
//     } return obj
// }


function graduates(students) {
  var objOutput = {}
  for (var j = 0; j < students.length; j++) {
      if (objOutput[students[j].class] === undefined) {
          objOutput[students[j].class] = []
      }
      if (students[j].score > 75) {
          var objClass = {}
          objClass.name = students[j].name
          objClass.score = students[j].score
          //console.log(objClass)
          objOutput[students[j].class].push(objClass)

      }
  }
  return objOutput
}


console.log(graduates([
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
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
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
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}