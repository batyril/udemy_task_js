const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
};

function isBudgetEnough(data) {
  const shopsArr = data.shops;
  const sumShops = shopsArr.reduce((sum, item) => sum + (item.width * item.length), 0);
  const volumeShops = sumShops * data.height;
  if ((volumeShops * data.moneyPer1m3) < data.budget) {
    return 'Бюджета достаточно';
  } else {
    return 'Бюджета недостаточно';
  }
}

console.log(isBudgetEnough(shoppingMallData));
