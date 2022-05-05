"use strict";
function sayHello(userName) {
  return `Привет, ${userName}!`;
}

function returnNeighboringNumbers(num) {
  return [num - 1, num, num + 1];
}

function getMathResult(num, cycle) {
  if (typeof (cycle) !== 'number' || cycle <= 0) {
    return num;
  }

  let str = '';

  for (let i = 1; i <= cycle; i++) {
    if (i === cycle) {
      str += `${num * i}`;
    } else {
      str += `${num * i}---`;
    }
  }

  return str;
}

function calculateVolumeAndArea(num) {
  if (typeof (num) !== 'number' || num < 0 || !Number.isInteger(num)) {
    return "При вычислении произошла ошибка";
  }

  let volume = 0,
    area = 0;

  volume = num * num * num;
  area = 6 * (num * num);

  return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

function getCoupeNumber(place) {
  if (typeof (place) !== 'number' || place < 0 || !Number.isInteger(place)) {
    return "Ошибка. Проверьте правильность введенного номера места";
  }

  if (place == 0 || place > 36) {
    return "Таких мест в вагоне не существует";
  }

  for (let i = 4; i <= 36; i += 4) {
    if (place <= i) {
      return Math.ceil(i / 4);
    }
  }
}

function findMaxNumber(a, b, c, d) {
  if (typeof (a) !== 'number' ||
    typeof (b) !== 'number' ||
    typeof (c) !== 'number' ||
    typeof (d) !== 'number') {
    return 0;
  } else {
    return Math.max(a, b, c, d);
  }
}

function getTimeFromMinutes(minutesTotal) {
  if (typeof (minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
    return "Ошибка, проверьте данные";
  }

  const hours = Math.floor(minutesTotal / 60);
  const minutes = minutesTotal % 60;

  let hoursStr = '';

  switch (hours) {
    case 0:
      hoursStr = "часов";
      break;
    case 1:
      hoursStr = "час";
      break;
    case 2:
    case 3:
    case 4:
      hoursStr = "часа";
      break;
    default:
      hoursStr = "часов";
  }

  return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

function fib(number) {
  if (typeof (number) !== 'number' || number <= 0 || !Number.isInteger(number)) {
    return "";
  }

  let fibStr = "";
  let firstNumber = 0;
  let secondNumber = 1;

  for(let i = 0; i < number; i++){
    if(i + 1 == number){
      fibStr = `${firstNumber}`;
    } else {
      fibStr = `${firstNumber} `;
    }

    let thirdNumber = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = thirdNumber;
  }

  return fibStr;
}

const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ['ru', 'eng'],
    programmingLangs: {
      js: '20%',
      php: '10%'
    },
    exp: '1 month'
  },
  showAgeAndLangs: function (plan) {
    const { age } = plan.age;
    const { languages } = plan.skills;
    let str = `Мне ${age} и я владею языками: `;

    languages.forEach(function (lang) {
      str += `${lang.toUpperCase()} `;
    });

    return str;
  }
};
function showExperience(plan) {
  const { exp } = plan.skills;
  return exp;
}
function showProgrammingLangs(plan) {
  let strLangs = "";
  const { programmingLangs } = plan.skills;

  for (let key in programmingLangs){
    strLangs += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
  }

  return strLangs;
}

const family = ['Peter', 'Ann', 'Alex', 'Linda'];
function showFamily(arr) {
  let str = '';

  if(arr.length === 0){
    str = "Ceмья пуста";
  } else {
    str = "Семья состоит из: ";
  }
  //arr.length === 0 ? str = "Ceмья пуста" : str = "Семья состоит из: ";

  arr.forEach(member => {
    str += `${member} `;
  });

  return str;
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
function standardizeStrings(arr) {
  arr.forEach(member => {
    console.log(member.toLowerCase());
  });
}

const someString = 'This is some strange string';
function reverse(str) {
  if(typeof(str) !== 'string'){
    return "Ошибка!";
  } else {
    return str.split('').reverse().join('');
  }
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const resultArray = [...baseCurrencies, ...additionalCurrencies];
function availableCurr(arr, missingCurr) {
  let str = "";

  if (arr.length === 0) {
    str = "Нет доступных валют";
  } else {
    str = "Доступные валюты:\n";
  }
  //arr.length === 0 ? str = "Нет доступных валют" : str = "Доступные валюты:\n";

  arr.forEach(function (curr, i) {
    if(curr != missingCurr){
      str += `${i + 1} - ${curr}\n`;
    }
  });

  return str;
}

const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5
    },
    {
      width: 15,
      length: 7
    },
    {
      width: 20,
      length: 5
    },
    {
      width: 8,
      length: 10
    }
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000
};
function isBudgetEnough(data) {
  let areaShops = 0;
  let sizeMall = 0;

  data.shops.forEach(shop => {
    areaShops += shop.width * shop.length;
  });

  sizeMall = areaShops * data.height;

  if(data.budget > data.moneyPer1m3 * sizeMall){
    return "Бюджета достаточно";
  } else {
    return "Бюджета недостаточно";
  }
}

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
function sortStudentsByGroups(arr) {
  arr.sort();

  let a = [], b = [], c = [], str = [];

  for(let i = 0; i < arr.length; i++){
    if(i < 3){
      a.push(arr[i]);
    } else if(i < 6) {
      b.push(arr[i]);
    } else if(i < 9) {
      c.push(arr[i]);
    } else {
      str.push(arr[i]);
    }
  }

  return [a, b, c, `Оставшиеся студенты: ${str.length === 0 ? '-' : str.join(', ')}`];

}

function factorial(num) {
  if (typeof(num) != 'number' || !Number.isInteger(num)) {
    return "Num is NaN";
  }

  if(num <= 0){
    return 1;
  }

  return num * factorial(num - 1);
}

function amountOfPages(summary) {
  let result = '';
  let count = 0;

  for(let i = 1; i <= summary; i++){
    result += i;
    if(result.length === summary){
      count = i;
      break;
    }
  }

  return count;
}

function isPangram(string) {
  return 'abcdefghijklmnopqrstuvwxyz'
    .split("")
    .every((x) => string.toLowerCase().includes(x));
}

function deepCount(a) {
  let count = a.length;
  
  for(let i = 0; i < a.length; i++){
    if(Array.isArray(a[i])){
      count += deepCount(a[i]);
    }
  }

  return count;
}

const films = [
  {
    name: 'Titanic',
    rating: 9
  },
  {
    name: 'Die hard 5',
    rating: 5
  },
  {
    name: 'Matrix',
    rating: 8
  },
  {
    name: 'Some bad film',
    rating: 4
  }
];
function showGoodFilms(arr) {
  const newArr = arr.filter(film => film.rating >= 8);
  return newArr;
}
function showListOfFilms(arr) {
  const listFilm = arr.reduce((film, current) => `${typeof(film) === 'object' ? film.name : film}, ${current.name}`);
  return listFilm;
}
function setFilmsIds(arr) {
  return arr.map((film, i) => {
    film.id = i;
    return film;
  });
}
const tranformedArray = setFilmsIds(films);
function checkFilms(arr) {
  return arr.every(film => film.id || film.id === 0);
}

const funds = [
  { amount: -1400 },
  { amount: 2400 },
  { amount: -1000 },
  { amount: 500 },
  { amount: 10400 },
  { amount: -11400 }
];
const getPositiveIncomeAmount = (data) => {
  let sum = 0;
  data.filter(item => {
    if (item.amount >= 0){
      sum += item.amount;
    }
  });
  return sum;
};
const getTotalIncomeAmount = (data) => {
  return data.some(item => item.amount < 0) ? data.reduce((acc, curr) => acc + curr.amount, 0) : getPositiveIncomeAmount(data);
};