// let user = {
//     name: "Volodymyr",   //ключ
//     age: 46,             //ключ
//     city: "Kriviy Rig",  //ключ
// }
 
// console.log(user.age)  //доступ
 
// //зміна властивостей
// user.city = "Kyiv"
// console.log(user.city)
 
// //додавання властивостей
// user.work = "President"
// console.log(user.work)
// console.log(user)
 
// //видалення
// delete user.age
// console.log(user)
 
 
// let user2 = {}  //пустий обєкт
 
// //Копіювання
 
// for(let key in user){
//     user2[key] = user[key]
// }


// let user3 = {
//     name: "Volodymyr",   //ключ
//     surname: "Zelensky",
//     age: 46,
//     city: "Kriviy Rig",

//     fuulName(){
//         return `Fullname ${this.name} ${this.surname}`
//     }
// } 

// console.log(user3.fuulName()) 



// ////////////////////////////////

// //1

// let codes ={
//     "49" : "Німеччина",
//     "41" : "Швейцарія",
//     "44" : "Великобританія",
//     "48" : "Польща",
//     "1" : "США",
// };

// for (let code in codes) {
//     console.log(codes);
// }

// //2 Множення всіх числових властивостей на 2

// let menu = {
//     first: 200,
//     second: 150,
//     title: "My menue"
// }

// const multiply = (obj) => {
//     for (const key in obj) {
//         if(typeof obj[key] === 'number'){
//             obj[key] *= 2
//         }
        
//     }
// }

// multiply(menu)

// console.log(menu)


                                                            // Домашнє завдання.


                                                            // Мінімальний рівень.


// 1. Створіть об'єкт, що представляє користувача з властивостями "ім'я" та "вік". Виведіть цей об'єкт на консоль.

// 2. Додайте нову властивість "email" до об'єкта користувача з першої задачі. Виведіть змінений об'єкт на консоль.

// 3. Доступайтесь до властивостей об'єкта та виведіть їх значення на консоль, використовуючи як крапку, так і оператор квадратних дужок.


                                                            // Середній рівень.

// 1. Створіть об'єкт, що представляє продукт з властивостями "назва", "ціна" і "кількість". Напишіть функцію, яка обчислює вартість всіх продуктів цього типу (ціна * кількість).

// 2. Створіть об'єкт, що представляє автомобіль з властивостями "марка", "модель" і "рік випуску". Напишіть функцію, яка перевіряє, чи є автомобіль старіше 5 років.

// 3. Створіть об'єкт, що представляє книгу з властивостями "назва", "автор" і "рік видання". Напишіть функцію, яка виводить інформацію про книгу у зручному форматі.


                                                            // Високий рівень.

// 1. Створіть об'єкт, що представляє користувача з властивостями "ім'я", "вік" та "список друзів" (масив об'єктів з інформацією про друзів). Напишіть функцію, яка знаходить найдовше ім'я серед друзів цього користувача.

// 2. Створіть об'єкт, що представляє замовлення з властивостями "номер", "товари" (масив об'єктів з інформацією про товари) та "загальна вартість". Напишіть функцію, яка обчислює загальну вартість замовлення на основі інформації про товари.

// 3. Створіть об'єкт, що представляє школу з властивостями "назва", "адреса" та "учні" (масив об'єктів з інформацією про учнів). Напишіть функцію, яка знаходить середній вік учнів школи.




                                                            // Мінімальний рівень.
 
let user = {
    name: "Nazar",
    surname: "Melnyk",
}
console.log(user)

user.email = "nazarm7722@gmail.com"
console.log(user.email)
console.log(user)

console.log(user['name']);
console.log(user['surname']);
console.log(user['email']);

                                                            // Середній рівень.

// 1

let product = {
    name: "Kubik-rubik",
    price: 200,
    number: 15,
};

function sum(product) {
    return product.price * product.number;
  }

console.log(sum(product))


// 2 

let car = {
    mark: "Toyota",
    model: "Camry",
    year: 2024
  };

  function isOlderThan5Years(car) {
    // const currentYear = new Date().getFullYear();
    // const age = currentYear - car.year;
    // return age > 5;
    if(car.year > 5){
      return true
    }
  }
  console.log(isOlderThan5Years(car));

// 3

let book = {
    name: "Енеїда",
    author: "Іван Котляревський",
    year: 1842
  };
  
  function printBookInfo(book) {
    const bookInfo = `Назва книги: ${book.name} Автор: ${book.author} Рік видання: ${book.year}`;
    console.log(bookInfo);
  }

  printBookInfo(book); 


                                                            // Високий рівень.

