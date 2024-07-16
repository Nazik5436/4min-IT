const element = document.querySelector('.dima') // ловимо елемент

const dima = {
    name: 'Діма',
    age: 19,
    end: 'Вийде з тюрьми через 9 років',
}

element.innerHTML = `${dima.name} ${dima.end}` // міняємо або додаємо текст

element.style.color = 'red' 
element.style.fontSize = '48px'

//створення нового елемента 

const newElement = document.createElement('span')
newElement.innerText = 'Діма вийшов з тюрьми !'

element.appendChild(newElement) // пуш елемента в батьківський контейнер 

newElement.classList.add('small__text') //додавання класу 
