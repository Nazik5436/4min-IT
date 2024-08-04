//////// Наслідування

class Person{
    constructor(name, age){
      this.name = name
      this.age = age
    }
  
    greet(){
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old `)
    }
    
  }
  
  const person1 = new Person("Vova", 46)
  person1.greet()
  
  
  
  class Student extends Person{
    constructor(name, age, studentId){
      super(name, age)
      this.studentId = studentId
    }
  
    study(){
      console.log(`${this.name} id = ${this.studentId}`)
    }
  
  }
  
  const student1 = new Student("Taras", 20, 1)
  student1.greet()
  student1.study()


//////////////////////////////////////////////// Наслідування 


class Vehicle{
    constructor(brand, model, year){
        this.brand = brand
        this.model = model
        this.year = year
    }

    details(){
        console.log(`Vehicle name: ${this.brand}, model:${this.model}, year: ${this.year}`)
    }
}

class Car extends Vehicle{
    constructor(brand, model, year, maxspeed, wheels){
        super(brand, model, year)
        this.maxspeed = maxspeed
        this.wheels = wheels
    }

    moreDetails(){
        console.log(`Car name: ${this.brand} model:${this.model}, year: ${this.year}, maxspeed: ${this.maxspeed}, wheels:${this.wheels}`)
    }
}

const firstCar = new Car("Toyota", "Camry", 2019, "260km/h", 4)


firstCar.moreDetails()


///////////////////////////////////////////// Поліморфізм

class Figure {
    getArea(){
      return 0
    }
  }
  
  class Circle extends Figure{
    constructor(radius){
      super()
      this.radius = radius
    }
  
    getArea(){
      return Math.PI * Math.pow(this.radius, 2)
    }
  }
  
  class Rectangle extends Figure{
    constructor(width, length){
      super()
      this.width = width
      this.length = length
    }
  
    getArea(){
      return this.width * this.length
    }
  }
  
  
  const circle1 = new Circle(13)
  console.log(circle1.getArea())
  
  const rectangle1 = new Rectangle(4, 5)
  console.log(rectangle1.getArea())

////////////////////////////////////////// Інкарсуляція

class BankAccount {
    #balance = 0 //private field
  
    constructor(accountNumber){
      this.accountNumber = accountNumber
    }
  
    deposit(amount){
      if(amount > 0){
        this.#balance += amount
        console.log(`Your good investor, deposited ${amount}uah. New balance ${this.#balance} uah`)
      } else{
        console.log('Your stupid')
      }
    }
  
    withdraw(amount){
      if(amount > 0 && amount <= this.#balance){
        this.#balance -= amount
        console.log(`Withdraw ${amount}uah. New balance ${this.#balance} uah`)
      } else{
        console.log('Your stupid')
      }
    }
  
    getBalance(){
      return this.#balance
    }
  }
  
  const account = new BankAccount(1488)
  
  account.deposit(300)
  account.withdraw(30)
  
  console.log(account.getBalance())