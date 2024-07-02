let user = {
    name: "Volodymyr",   //ключі
    age: 46,
    city: "Kriviy Rig",
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
    name: "Volodymyr",   //ключі
    surname: "Zelya",
    age: 46,
    city: "Kriviy Rig",

    fuulName(){
        return `Fullname ${this.name} ${this.surname}`
        console.log(`Fullname ${this.name} ${this.surname}`)
    }

} 

console.log(user3.fuulName()) 