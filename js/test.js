const name = "Aleksandr";
let number = "43px";
const bull = true;
const bullN = false;


// let should = prompt(name);
// should = Number(should);
// console.log(should);
// console.log(typeof should)
const result = Number.parseInt(number);
console.log(result)

const balance = 1000;
// let massege;

// if (balance >= 0) {
//     massege = "Позитивный баланc"
// } else {
//     massege = "Негативный баланc"
// }

const massege = balance >= 0 ? "Позитивный баланc" : "Негативный баланc";

console.log(massege)


// ПРИМЕР СВИЧ
const stars = 5;
let price;

if (stars === 1) {
    price = 30;
} else if (stars === 2) {
    price = 50;
} else if (stars === 3) {
    price = 90;
} else if (stars === 4) {
    price = 120;
} 
console.log(price)

switch (stars) {
    case 1:
        price = 20;
        break;
     case 2:
        price = 70;
        break;
     case 3:
        price = 100;
        break;
     case 4:
        price = 150;
        break;
    default:
        console.log (`Такого количества звезд нет`)
}
console.log(price)


//   ПРИМЕР СВИЧ ПАРНЫЙ

if (stars === 1 || stars === 2) {
    price = 30;
} else if (stars === 3 || stars === 4 ) {
    price = 50;
} else  if (stars === 5) {
    price = 120;
} else {
    console.log (`Такого количества звезд нет`)
}
console.log(price)

switch (stars) {
    case 1:
    case 2:    
        price = 20;
        break;
    case 3:
    case 4:    
        price = 100;
        break;
    default:
        console.log (`Такого количества звезд нет`)
}
console.log(price)


// ПРИМЕР ЗАДАЧИ СВИЧ

const option = 3;
let message = "";

switch (option) {
    case 1:
        message = `Вы можете забрать товар завта после 12.00`
        break;
     case 2:
        message = `Курьер доставит ваш товар после 09.00`
        break;
     case 3:
        message = `Посылка будет доставлена почтой`
        break;
    default:
        message = `Наш менеджер вам перезвонит`
}
console.log(message)

// ПРИМЕР ЦИКЛА

for (let i = 0; i < 10; i += 1){
    console.log(i)
}

// ПРИМЕР ЗАДАЧИ НА ЦИКЛ
const employees = 10;
const maxSalary = 3000;
const minSalary = 500;
let totalSalary = 0;

for (let i = 1; i <= employees; i += 1) {
    const salary = Math.round(
        Math.random() * (maxSalary - minSalary) + minSalary,
    );
    console.log(`ЗП работника номер ${i} - ${salary}`)
    totalSalary += salary;
    
}
console.log (`Зарплата вцелом: ${totalSalary}`)

// ЗАДАЧКА НА ЦИКЛЫ

const min = 3;
const max = 11;
let total = 0;

for (let i = min; i <= max; i += 1) {
    console.log(i)
    // проверяем остаток от деления
    if (i % 2 === 0) {
        console.log(`четное: `, i)
    total += i;
    }
    // метод логики от обратного
    if (i % 2 !== 0) {
        console.log(`НЕ четное: `, i);
        continue;
    }

    
}
console.log(`Число: `, total) 

// ЗАДАЧКА ПОКУПКИ ТОВАРА

let manyBalance = 10000;
const payment = 12000;

console.log(`Общая стоимость заказа ${payment}. Проверяем наличие средств нв счету`);
if (manyBalance >= payment) {
    console.log(`ok`);
    manyBalance -= payment;
    console.log(`На счету осталось ${manyBalance}`)
} else {
    console.log(`Недостаточно средств на счету`)
}
console.log(`Операция завершена`)

// ЗАДАЧКА ПОДСЧЕТА СУММЫ ПОКУПКИ

// общая сумма потраченного
let totalSpent = 4000;
// сумма текущего платежа 
let pay = 5000;
// скидка
let discont = 0;

if (totalSpent < 100) {
    discont = 0;
} else if (totalSpent >= 100 && totalSpent < 1000) {
    console.log(`Бронзовый парнер, скидка 2%`);
    discont = 0.02;
} else if(totalSpent >= 1000 && totalSpent < 5000) {
    console.log(`Cеребряный парнер, скидка 5%`);
    discont = 0.05;
} else  {
     console.log(`Золотой парнер, скидка 10%`);
    discont = 0.1; 
}
pay = pay - pay * discont;
console.log(`Оформляем заказ на сумму ${pay} со скидкой ${discont * 100}%`);

totalSpent += pay;

console.log(`Общая сумма потраченного в магазине ${totalSpent}`)



// Пример инпут и кнопка
  
const btnAdd = document.querySelector(`button[data-add]`);
const btnReset = document.querySelector(`button[data-reset]`);
const valueInput = document.querySelector(`input[data-value]`);
const finalSumma = document.querySelector(`span`);
let toTal = 0;
btnAdd.addEventListener(`click`, function () {
    
    console.log(`click hehehe`);
    const value = Number(valueInput.value);
    toTal += value;
  console.log(toTal);
    valueInput.value = ``;
    finalSumma.textContent = toTal;
      
})

btnReset.addEventListener(`click`, function () {
    finalSumma.textContent = 0;
})


// const available = 20;
// const ordered = 10;
function checkStorage (available = 30, ordered = 40) {
    
  let message;
  // Change code below this line

     message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
//    if (ordered > available) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }

  
    // return message;
    console.log( message);
};
checkStorage()


function multiply(a, b){
    let com = a * b;
  console.log( com );
}
multiply(3,134)


first: for (let num = 0; num < 5; num++){

    for (let size = 0; size < 7; size++){
        console.log(size);
        if (size == 5) {break first;}
    }
}

// ПРИМЕРЫ ФУНКЦИЙ

function calkSum(numOne, numTwo, more, less) {
    let numSum = numOne + numTwo;
    if (numSum > 3) {
        more();
    } else {
        less();
    }
}
function showMoreMessage() {
    console.log(`Больше чем 3`);
}
function showLessMessage() {
    console.log(`Меньше чем 3`);
}
calkSum(3, 3, showMoreMessage, showLessMessage)

function calk(numOne, numTwo) {
    let result = 1;
    for (let i = 0; i < numTwo; i++){
        result *= numOne;
    }
    return result;
}
console.log(calk(2, 3))


function calKul(numOne, numTwo) {
    if (numTwo === 1) {
        return numOne;
    } else {
        return numOne * calKul(numOne, numTwo - 1)
    }
}
console.log(calKul(2,3))

// ПРИМЕР ФУНКЦИОНАЛЬНОГО ВЫРАЖЕНИЯ

let getMessage = (text, name) => text +`, `+ name + `!`;
console.log(getMessage(`Привет`, `Макс`));



// ПРИМЕР ПОЯВЛЕНИЯ ТЕКСТ С ЗАДЕРЖКОЙ

function showMessage(text, name) {
    console.log(`${text}`, `${name}!`)
}
setTimeout(showMessage, 3000, `Привет`, `Макс`);

// ПРИМЕР ПОВЛЯЮЩИХСЯ ЧИСЕЛ

// function showNumber(num) {
//     console.log(num);
//     if (num < 10 && num > -5) {
//         setTimeout(showNumber, 1000, --num);
//     }
// }
// setTimeout(showNumber, 1000, 9);

// ПРИМЕР ОСТАНОВКА TIMEOUT

// function showNumb(num) {
//     console.log(num);
//     let timeId = setTimeout(showNumb, 1000, ++num);
//     if (num === 7) {
//         clearTimeout(timeId);
//     }
// }
// setTimeout(showNumb, 1000, 1)

// // ПРИМЕР ВЫЗОВА ВЛОЖЕННОЙ ФУНКЦИИ

// let shoowMess;
// if (2 > 1) {
//    shoowMess = function() {
//         console.log(`Повідомлення`)
//     }
// }
// shoowMess();

// function showName() {
//     console.log(`Вася!`);
// }
// // showName()
// setTimeout(showName, 0);
// console.log(`Петя!`)

const club = ["Динамо", "Шахтер", "Ворскла", "Черноморец"];
const myClub = "Динамо";
let text;

for (const my of club) {
    if (my === myClub) {
        text = `Это мой клуб!`
        break;
    } else {
        text = `Моего клуба здесь нет!`
    }
}
console.log(text);

// function getExtremeElements(array = [1, 2, 3, 4, 5]) {
//     for (let i = 0; i > 0 && i < array.length; i += 1){
//         array continue ;
//     }
//     console.log(array);
//     }

//   const last = array.length - 1;
// let res = array[0,last];
//     console.log(res);
// }
getExtremeElements()