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