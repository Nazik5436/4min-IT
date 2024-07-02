// Виведення меншого числа 
// function min(a, b){
//     let min = 0 
//     if (a > b){
//         min = b 
        
//     }else if(a < b){
//         min = a 
//     }else{
//         console.log(`Числа рівні`)
//     }
//     return min 
// }

// let count = min(3, 5)
// console.log(count)




// Перевірка на парність

// function parnist(a){
//     let result
//     if (a % 2 == 0){
//         result = true 
//     }else{
//         result = false
//     }
//     return result
// }

// console.log(parnist(1))




//  Функція square яка приймає число і повертає його в квадрат

// function square (a){
//     return a*a
// }

// console.log(square(5))






//                                                             Домашнє завдання.


//                                                             Мінімальний рівень.

// 1. Напишіть функцію, яка приймає два числа і повертає більше з них.

// 2. Створіть функцію, яка приймає рядок і повертає його великими літерами (uppercase).

// 3. Напишіть функцію, яка приймає два числа і повертає їх суму.

//                                                             Середній рівень.

// 1. Створіть функцію, яка приймає рядок і повертає його в оберненому порядку.

// 2. Напишіть функцію, яка приймає число і перевіряє, чи воно є парним.

// 3. Розробіть функцію, яка приймає рядок і повертає кількість голосних літер (букв "a", "e", "i", "o", "u") в цьому рядку.

//                                                             Високий рівень.

// 1. Напишіть функцію, яка приймає рядок та визначає, чи є він паліндромом (читається однаково зліва направо і справа наліво).

// 2. Створіть функцію, яка приймає число і повертає суму всіх чисел від 1 до цього числа (включно).

// 3. Розробіть функцію, яка приймає два числа і повертає їх найменший спільний кратник (НСК).




//                                                             Мінімальний рівень.

// 1

// function max(a, b){
//     let max = 0 
//     if (a < b){
//         max = b 
        
//     }else if(a > b){
//         max = a 
//     }else{
//         console.log(`Числа рівні`)
//     }
//     return max 
// }

// let count = max(3, 5)
// console.log(count)

// 2

// function toUpperCase(str) {
//     return str.toUpperCase();
// }

// let inputString = "Я ваше не вдупляю цей JS !!!";
// let upperCaseString = toUpperCase(inputString);
// console.log(upperCaseString); 

//3

// function suma(a, b) {
//     return a + b;
// }

// let number1 = 5;
// let number2 = 10;
// let sum = suma(number1, number2);
// console.log(sum);


//                                                             Середній рівень.


// 1

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// let inputString = "Мама спаси від цього JS !!!";
// let reversedString = reverseString(inputString);
// console.log(reversedString);

//2 

// function parnist(a){
//     let result
//     if (a % 2 == 0){
//         result = ("Та ти шо, число парне !") 
//     }else
//         result = ("Твоє число непарне, друже")
//     return result
// }

// console.log(parnist(Number(prompt(`Введи своє число`))))

// 3 


//                                                             Високий рівень.


// 1

//2

function sumTo(n) {
    if (n <= 0 || !Number.isInteger(n)) {
      return "Введіть додатнє ціле число";
    }
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  let exampleNumber = 10;
  console.log(sumTo(exampleNumber));
  