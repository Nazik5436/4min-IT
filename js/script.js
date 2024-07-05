let user = {
    name: "Volodymyr",   //ключ
    age: 46,             //ключ
    city: "Kriviy Rig",  //ключ
}
 
console.log(user.age)  //доступ
 
//зміна властивостей
user.city = "Kyiv"
console.log(user.city)
 
//додавання властивостей
user.work = "President"
console.log(user.work)
console.log(user)
 
//видалення
delete user.age
console.log(user)
 
 
let user2 = {}  //пустий обєкт
 
//Копіювання
 
for(let key in user){
    user2[key] = user[key]
}


let user3 = {
    name: "Volodymyr",   //ключ
    surname: "Zelensky",
    age: 46,
    city: "Kriviy Rig",

    fuulName(){
        return `Fullname ${this.name} ${this.surname}`
    }
} 

console.log(user3.fuulName()) 



////////////////////////////////

//1

let codes ={
    "49" : "Німеччина",
    "41" : "Швейцарія",
    "44" : "Великобританія",
    "48" : "Польща",
    "1" : "США",
};

for (let code in codes) {
    console.log(codes);
}

//2 Множення всіх числових властивостей на 2

let menu = {
    first: 200,
    second: 150,
    title: "My menue"
}

const multiply = (obj) => {
    for (const key in obj) {
        if(typeof obj[key] === 'number'){
            obj[key] *= 2
        }
        
    }
}

multiply(menu)

console.log(menu)