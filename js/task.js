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

  arr.length === 0 ? str = 'Ceмья пуста' : str = 'Семья состоит из: ';

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
  arr.length === 0 ? str = "Нет доступных валют" : str = "Доступные валюты:\n";

  arr.forEach(function (curr, i) {
    if(curr != missingCurr){
      str += `${i + 1} - ${curr}\n`;
    }
  });

  return str;
}