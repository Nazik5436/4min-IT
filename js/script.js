const API_starWars = 'http://www.omdbapi.com/?s=Star+wars&apikey=fc0a8f0c'
const API_Avanger = 'http://www.omdbapi.com/?s=Avengers&apikey=fc0a8f0c'
const API_Lord = 'http://www.omdbapi.com/?s=Lord+of+the+rings&apikey=fc0a8f0c'
const API_HarryPotter = 'http://www.omdbapi.com/?s=harry+potter&apikey=fc0a8f0c'
const API_FastAndFurious = 'http://www.omdbapi.com/?s=fast+and+furious&apikey=fc0a8f0c'


// fetch(`${API}/posts`)
//     .then(response => response.json()) //розпарсюєм
//     .then(response => {
//         const container = document.querySelector('.posts')
//         let htmlContent = ''

//         response.forEach(post => {
//             htmlContent += `
//             <div class="card" style="width: 18rem;">
//                 <div class="card-body">
//                     <h5 class="card-title">${post.title}</h5>
//                     <p class="card-text">${post.body}</p>
//                 </div>
//             </div>
//             `

            
//         });

//         container.innerHTML = htmlContent
//     })
//     .catch(error => console.error(error)) 





 const SetRequest = async () =>{
     try {
        const responseFirst = await fetch(API_starWars)
        const responseSecond = await fetch(API_Avanger)
        const responseThird = await fetch(API_Lord)
        const responseFourth = await fetch(API_HarryPotter)
        const responseFifth = await fetch(API_FastAndFurious)



        const dataFirst = await responseFirst.json() 
        const dataSecond = await responseSecond.json()
        const dataThird = await responseThird.json()
        const dataFourth = await responseFourth.json()
        const dataFifth = await responseFifth.json()


        const data = [...dataFirst.Search, ...dataSecond.Search, ...dataThird.Search, ...dataFourth.Search, ...dataFifth.Search]
        console.log(data)
        
         const container = document.querySelector('.posts')
         let htmlContent = ''
         data.forEach(element => {
             htmlContent += `
                 <div class="card" style="width: 18rem;">
                     <div id='StarWars' class="card-body">
                         <img src="${element.Poster}" class="card-img-top" alt="...">
                         <p class="card-text">${element.Type}</p>
                         <h5 class="card-title">${element.Title}</h5>
                         <p class="card-text">${element.Year}</p>
                     </div>
                 </div>
             `

             container.innerHTML = htmlContent
         });
     } catch (error) {
         console.error('error', error)
        
     }
    
 } 
 SetRequest()
