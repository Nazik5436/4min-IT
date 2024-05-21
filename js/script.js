 const close = document.querySelector('.close')
 const burger = document.querySelector('.burger')
 const random_block = document.querySelector('.random_block')
 const nav_links_1 = document.querySelector('.nav_links_1')
 const nav_links_2 = document.querySelector('.nav_links_2')
 const nav_links_3 = document.querySelector('.nav_links_3')
 const nav_links_4 = document.querySelector('.nav_links_4')

 close.addEventListener('click', function (e) {
   random_block.style.display = 'none'
})

 burger.addEventListener('click', function (e) {
    random_block.style.display = 'flex'
 })

 nav_links_1.addEventListener('click', function (e) {
    random_block.style.display = 'none'
 })

 nav_links_2.addEventListener('click', function (e) {
    random_block.style.display = 'none'
 })

 nav_links_3.addEventListener('click', function (e) {
    random_block.style.display = 'none'
 })

 nav_links_4.addEventListener('click', function (e) {
    random_block.style.display = 'none'
 })