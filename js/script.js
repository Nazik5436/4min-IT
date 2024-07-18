const button = document.querySelector('#myBut')

button.addEventListener('click', function(){
    this.style.backgroundColor = 'red'
    // alert(`Кнопку натиснуто`)
})



const myInput = document.querySelector('#myInput')

myInput.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        console.log('Its enter')
    }
    console.log(event.key)
})





const Mydiv = document.querySelector('#Mydiv')

Mydiv.addEventListener('mouseover', function(event){
    Mydiv.style.backgroundColor = "red"
    Mydiv.style.transform = "scale(1.1)"
})

Mydiv.addEventListener('mouseout', function(event){
    Mydiv.style.backgroundColor = "white"
    Mydiv.style.transform = "scale(1)"
})








const user = document.querySelector('#user')
const userButton = document.querySelector('#Button')

userButton.addEventListener('click', function(event){
    console.log(user.value)
})




const hw = document.querySelector('#hw')

hw.addEventListener('click', function(){
    alert(`Hello Nazar`)
})



const site = document.querySelector('#site')
const webSite = document.querySelector('#web')
const block = document.querySelector('.block')

webSite.addEventListener('click', function(event){
    let inputValue = document.createElement('p')
    inputValue.innerText = site.value
    block.appendChild(inputValue)
})



                                                                    // Домашнє завдання.


                                                                    // Мінімальний рівень.

// 1. Створіть кнопку, яка змінює колір при кожному кліку на неї.

// 2. Створіть поле введення тексту, яке очищається, коли користувач подвійно клікає на нього.


                                                                    // Середній рівень.

// 1. Створити світлофор.

// 2. Створіть сторінку, на якій користувач може вводити текст за допомогою клавіатури. Потрібно визначити магічну комбінацію клавіш, наприклад, "Ctrl + Alt + M". Якщо користувач вводить цю комбінацію, виведіть повідомлення, яке говорить: "Ви створили магію!".


                                                                    // Високий рівень.

// 1. Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.

// 2. Створіть фотогалерею. Коли користувач клікає на зображення, виводьте його в більшому розмірі в окремому вікні. Додайте можливість перегортати зображення за допомогою кнопок "Назад" та "Вперед".




                                                                    

                                                                    // Мінімальний рівень.

// 1

const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
let currentColorIndex = 0;

function changeColor() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    document.getElementById("colorButton").style.backgroundColor = colors[currentColorIndex];
}

document.getElementById("colorButton").addEventListener("click", changeColor);

// 2

function clearInput() {
    document.getElementById("textInput").value = "";
}

document.getElementById("textInput").addEventListener("dblclick", clearInput);






                                                                    // Середній рівень.

                                                                    

// 1 

let currentLight = 0;
    const lights = ["redLight", "yellowLight", "greenLight"];

    function changeLight() {
        document.getElementById("redLight").classList.remove("red");
        document.getElementById("yellowLight").classList.remove("yellow");
        document.getElementById("greenLight").classList.remove("green");

        const currentLightElement = document.getElementById(lights[currentLight]);
        if (currentLight === 0) {
            currentLightElement.classList.add("red");
        } else if (currentLight === 1) {
            currentLightElement.classList.add("yellow");
        } else if (currentLight === 2) {
            currentLightElement.classList.add("green");
        }

        currentLight = (currentLight + 1) % lights.length;
    }

    setInterval(changeLight, 2000);

// 2 

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.altKey && event.key === 'm') {
        document.getElementById('magicMessage').textContent = alert('Ви створили магію!');
    }
});


                                                                    // Високий рівень.



// 1

const gallery = document.querySelectorAll('.gallery img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    let currentIndex = 0;

    function showLightbox(index) {
        currentIndex = index;
        lightboxImage.src = gallery[currentIndex].src;
        lightbox.style.display = 'flex';
    }

    function hideLightbox() {
        lightbox.style.display = 'none';
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % gallery.length;
        lightboxImage.src = gallery[currentIndex].src;
    }

    function showPreviousImage() {
        currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
        lightboxImage.src = gallery[currentIndex].src;
    }

    gallery.forEach((image, index) => {
        image.addEventListener('click', () => showLightbox(index));
    });

    lightbox.addEventListener('click', hideLightbox);
    document.getElementById('nextButton').addEventListener('click', (event) => {
        event.stopPropagation();
        showNextImage();
    });
    document.getElementById('prevButton').addEventListener('click', (event) => {
        event.stopPropagation();
        showPreviousImage();
    });