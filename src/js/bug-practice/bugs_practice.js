const restorantData = {
  menu: [
    {
      name: 'Salad Caesar',
      price: '14$',
    },
    {
      name: 'Pizza Diavola',
      price: '9$',
    },
    {
      name: 'Beefsteak',
      price: '17$',
    },
    {
      name: 'Napoleon',
      price: '7$',
    },
  ],
  waitors: [
    { name: 'Alice', age: 22 }, { name: 'John', age: 24 },
  ],
  averageLunchPrice: '20$',
  openNow: true,
};

function isOpen(prop) {
  let answer = '';
  prop ? answer = 'Закрыто' : answer = 'Открыто';

  return answer;
}

isOpen(restorantData.openNow);

function isAverageLunchPriceTrue(fDish, sDish, average) {
  if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < average) {
    return 'Цена ниже средней';
  } else {
    return 'Цена выше средней';
  }
}

isAverageLunchPriceTrue(
  restorantData.menu[0],
  restorantData.menu[3],
  restorantData.averageLunchPrice,
);

function deepClone(obj) {
  const clObj = {};
  for(const i in obj) {
    if (obj[i] instanceof Object) {
      clObj[i] = deepClone(obj[i]);
      continue;
    }
    clObj[i] = obj[i];
  }
  return clObj;
}

function transferWaitors(data) {
  const copy = deepClone(data);

  copy.waitors[0] = { name: 'Mike', age: 32 };
  return copy;
}

transferWaitors(restorantData);
