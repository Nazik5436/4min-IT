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