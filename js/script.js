const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=fc0a8f0c'

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





// const SetRequest = async () =>{
//     try {
//         const response = await fetch(API)
//         const data = await response.json() //розпарсюєм
//         console.log(data)
//         // створення картки
//         const container = document.querySelector('.posts')
//         let htmlContent = ''
//         data.Object.forEach(element => {
//             htmlContent += `
//                 <div class="card" style="width: 18rem;">
//                     <div class="card-body">
//                         <img src="${element.Poster}" class="card-img-top" alt="...">
//                         <h5 class="card-title">${element.Title}</h5>
//                         <p class="card-text">${element.body}</p>
//                     </div>
//                 </div>
//             `

//             container.innerHTML = htmlContent
//         });
//     } catch (error) {
//         console.error('error', error)
        
//     }
    
// } 
// SetRequest()





// Андрюха


// const SetRequest = async () =>{
//     try {
//       const response = await fetch(API)
  
//       const data = await response.json()
//       console.log(data)
//       // створення карточки
//       const container = document.querySelector('.posts')
//       let htmlContent =''
  
//       data.Search.forEach(element => {
//         htmlContent += 
//           <div class="card" style="width: 18rem;">
//             <div class="card-body">
//               <img src="${element.Poster}" class="card-img-top" alt="...">
//               <h5 class="card-title">${element.Title}</h5>
//               <p class="card-text">${element.Year}</p>
//             </div>
//           </div>
        
//         container.innerHTML = htmlContent
//       });
  
//     } catch (error) {
//       console.error('error', error)
//     }
//   }
  
//   SetRequest()


///////////////////////////////////////////////////////////// перепис

// const SetRequest = async () =>{
//     try {
//         const response = await fetch(API)
//         const data = await response.json()
//         console.log(data)
//         const container = document.querySelector('.posts')
//         let htmlContent = ''
//         data.forEach(element => {
//             htmlContent += `
//                 <div class="card" style="width: 18rem;">
//                     <div class="card-body">
//                         <img src="${element.Poster}" class="card-img-top" alt="Poster">
//                         <h5 class="card-title">${element.Title}</h5>
//                         <p class="card-text">${element.body}</p>
//                     </div>
//                 </div>
//             `    
//             container.innerHTML = htmlContent
//         });
//     } catch (error) {
//         console.error('error', error)
//     }
// }



