const element = document.querySelector('.nazar') // ловимо елемент

const dima = {
    name: 'Назар',
    age: 16,
    end: 'досягне повноліття через 3 роки',
}

element.innerHTML = `${dima.name} ${dima.end}` // міняємо або додаємо текст

element.style.color = 'red' 
element.style.fontSize = '48px'

//створення нового елемента 

const newElement = document.createElement('span')
newElement.innerText = 'Назар повнолітній ураааааа !'

element.appendChild(newElement) // пуш елемента в батьківський контейнер 


newElement.classList.add('small__text') //додавання класу 

newElement.classList.remove('small__text') //видалення класу

newElement.remove() //видалення самого елементу