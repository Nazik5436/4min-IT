const API = 'https://jsonplaceholder.typicode.com'

fetch('${API}/posts')
    .then(response => responce.json())
    .then(responce => console.log(response))
    .catch(error => console.error(error))