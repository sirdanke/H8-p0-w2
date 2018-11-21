 
function meleeRangedGrouping (str) {
    if(str.length <= 0){
        return []
    }

   
  var hero = str.split(',')
  var result = [[],[]]
  for(i =0; i < hero.length; i ++){

    var tampung = hero[i].split('-')
      for(j =0; j < tampung.length; j ++){
       // console.log(tampung[j])
        if(tampung[j] === 'Ranged'){
          result[0].push(tampung[0])

        }
        else if (tampung[j] === 'Melee'){
          result[1].push(tampung[0])
        }
    }
    } return result
}


console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
