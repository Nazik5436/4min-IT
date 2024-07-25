const API = 'https://jsonplaceholder.typicode.com'

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


const Request = async () =>{
    try {
        const response = await fetch(`${API}/posts`)

        const data = await response.json()
        data.array.forEach(element => {
            console.log(element)
        });
    } catch (error) {
        
    }
} 