
  function shoppingTime(memberId, money) {
      var personalBill = {}
      var barang = [
          ['sepatu stacattu', 1500000],
          ['baju zorro', 500000],
          ['Baju H&N', 250000],
          ['sweater Uniklooh', 175000],
          ['casing handphone', 50000]
        ]
      if(memberId === '' || memberId === undefined){
          return 'mohon maaf toko berlaku untuk member saja'
      }else if (money < barang[4][1] ){
          return 'mohon maaf, uang tidak cukup'
      }else{
          personalBill.memberId = memberId
          personalBill.money = money
          var keranjang = []
          var sisa = 0;
          for(i = 0; i < barang.length; i ++){
              if(money >= barang[i][1]){
                sisa = money - barang[i][1]
                keranjang.push(barang[i][0])
                personalBill.listPurchased = keranjang
                money = sisa
              }
          }
          personalBill.changeMoney = money

      }
       return personalBill 
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
