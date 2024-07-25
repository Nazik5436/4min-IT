const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=e50baaa0'

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
        const data = await response.json() //розпарсюєм
        console.log(data)
        // створення картки
        const container = document.querySelector('.posts')
        let htmlContent = ''


        data.Search.forEach(element => {
            htmlContent += `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${element.body}</p>
                    </div>
                </div>
            `

            container.innerHTML = htmlContent
        });
    } catch (error) {
        
    }
    
} 
SetRequest()
