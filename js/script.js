let array = [1, 2, 3, 4]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(array[index])
}

array[2] = 10

//Цикл

for (const element of array) {
    console.log(element)
}


// 1 

let vprava = [1, 2, 3, 4, 5, 6, 7, 8 ,9 ,10]

for (let index = 0; index < vprava.length; index++) {
    const element = vprava[index];
    console.log(vprava[index])
}

vprava[4] = 10

for (const element of vprava) {
    console.log(element)
}

// Методи

// 1: push (Додавання свого значення в кінці списку)

let arr = [4, 5, 6]
arr.push(7)

//2: pop (Видалення омтанього елемента зі списку)

//3: shift (Видалення першого значення в початку списку)
arr.shift()
console.log(arr)

//4: unshift (Додавання свого значення в початку списку
arr.shift(10)
console.log(arr)

//5.1: splice видалення
let fruits = ['Apple', 'cucumber', 'tomato', 'banana']
let remFruits = fruits.splice(1, 2)
console.log(fruits)


let number = [1,2,3,4,5,6,7,8,9,10]
number.splice(4, 6)
console.log(number)

//5.2: splice додавання
let colors = ['red', 'yellow']
colors.splice(2, 0, 'green', 'blue')
console.log(colors)

//////////////////

const massive = [{name: "Nazar", age: 16}, {name: "Andriy", age: 19}, {name: "Timofi", age: 19}, {name: "Dima", age: 19}]

for (const element of massive) {
    console.log(element.name)
    if(element.age > 18){
        console.log(element.name)
    }
}

//Методи масива

//1: map

let numbers = [1, 2, 3, 4, 5];
let doubleNumbers = numbers.map(function(element) {
    return element * 2;
});

console.log(doubleNumbers)

//2: filter
let numberss = [1, 2, 3, 4, 5, 6];
let evenNumbers = numberss.filter(function(element) {
    if(element % 2 === 0){
        return element
    }
});

console.log(evenNumbers);

//3: concat
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [7, 8, 9]

const bigArr = arr1.concat(arr2, arr3)
console.log(bigArr)

//4: Деструктирізація
let fruits1 = ['яблуко', 'огірок'];
let fruits2 = ['томат', 'банан'];

let mergedFruits = [...fruits1, ...fruits2];
console.log(mergedFruits)

//5 includes
let arr10 = [1, 2, 3, 4, 3, 5]
console.log(arr10.includes(3))

//6 indexOf

let fruits3 = ['яблуко', 'банан', 'апельсин', 'банан'];

console.log(fruits.indexOf('банан'));
console.log(fruits.indexOf('вишня'));

let numbers10 = [1, 2, 3, 4, 2, 5, 2];


console.log(numbers.indexOf(2, 3));

//7 lastIndexOf

console.log(fruits.lastIndexOf('банан'));
console.log(fruits.lastIndexOf('вишня'));


