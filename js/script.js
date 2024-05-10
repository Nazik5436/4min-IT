const nav = document.querySelector('.header__nav')
const burger = document.querySelector('.burger')
const close = document.querySelector('.close')

burger.addEventListener("click", function(e){
    nav.style.display = "flex"
    burger.style.display = "none"
})

close.addEventListener("click", function(e){
    nav.style.display = "none"
    burger.style.display = "inline-block"
})