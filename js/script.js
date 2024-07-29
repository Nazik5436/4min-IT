const API = 'http://www.omdbapi.com/?s=Star+wars&apikey=fc0a8f0c'
const API_starWars = 'http://www.omdbapi.com/?t=Star+wars'

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
         const response = await fetch(API)
         const data = await response.json() 
         console.log(data)
        
         const container = document.querySelector('.posts')
         let htmlContent = ''
         data.Search.forEach(element => {
             htmlContent += `
                 <div class="card" style="width: 18rem;">
                     <div class="card-body">
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

