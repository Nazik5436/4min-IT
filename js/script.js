                                                            // Домашка 
                                                        
                                                        // Мінімальний рівень

// 1. Напишіть програму, яка перевіряє, чи є число парним. Виведіть "Парне", якщо число парне, і "Непарне" у іншому випадку.

// 2. Створіть програму, яка приймає вік користувача і визначає, чи він/вона дорослий (18 і більше років) чи ні.

// 3. Напишіть програму, яка приймає два числа і виводить більше з них.

                                                        // Середній рівень

// 1. Створіть програму, яка визначає, чи є рік високосним. Високосний рік ділиться на 4, але не ділиться на 100, окрім випадків, коли він ділиться на 400.

// 2. Напишіть програму, яка приймає три числа і визначає, чи можуть ці числа створити трикутник (сума будь-яких двох чисел повинна бути більшою за третє число).

// 3. Створіть програму, яка перевіряє, чи введене число є додатнім, від'ємним або нулем.

                                                        // Високий рівень
                                                        
// 1. Напишіть програму для обчислення податку на прибуток за наступною логікою: до 10 000 грн - 10% податку, від 10 000 до 50 000 грн - 20% податку, понад 50 000 грн - 30% податку.

// 2. Створіть програму, яка приймає три числа і виводить їх у порядку спадання.

// 3. Розробіть "квест" - програму, де користувач вводить відповіді на різні питання, і в залежності від відповідей він отримує різні "кінцівки" інтерактивного оповідання.


                     




                                                        // Мінімальний рівень


//1

let parnist = Number(prompt(`Введіть число яке ви хочете перевірити на парність:`))

if (parnist % 2 === 0) {
        console.log("Парне");
    } else {
        console.log("Непарне");
    }

//2

let vik = Number(prompt(`Введіть свій вік:`))

if (vik < 18) {
        console.log("Ви ще неповнолітній");
    } else {
        console.log("Ви дорослий");
    }

//3

let num1 = Number(prompt(`Введіть перше число:`))
let num2 = Number(prompt(`Введіть друге число:`))

    if (num1 > num2) {
        console.log(num1);
    } else if (num2 > num1) {
        console.log(num2);
    } else {
        console.log("Числа рівні");
    }


                                                        // Середній рівень


//1

let visocosni = Number(prompt(`Введіть скільки днів має теперішній рік, 366 чи 365 ?`))

if (visocosni % 366 == 0) {
    console.log("Цей рік високосний");
} else {
    console.log("Цей рік НЕ високосний");;
}

//2

let a = Number(prompt(`Введіть 1 сторону трикутника:`))
let b = Number(prompt(`Введіть 2 сторону трикутника:`))
let c = Number(prompt(`Введіть 3 сторону трикутника:`))

if (a < c + b && c < b + a && b < c + a) {
    console.log("Трикутник з такими сторонами може бути побудований")
} else{
    console.log("Трикутника з такими сторонами не може бути")
}

//3 

let yake = Number(prompt(`Введіть ваше число і я визначу яке воно є:`))

if (yake > 0) {
    console.log("Ваше число додатнє")
} else if (yake < 0) {
    console.log("Ваше число від'ємне")
} else {
    console.log("Ваше число 0")
}
   

                                                        // Високий рівень

//1
