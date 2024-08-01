const API_starWars = 'http://www.omdbapi.com/?s=Star+wars&apikey=fc0a8f0c';
const API_Avanger = 'http://www.omdbapi.com/?s=Avengers&apikey=fc0a8f0c';
const API_Lord = 'http://www.omdbapi.com/?s=Lord+of+the+rings&apikey=fc0a8f0c';
const API_HarryPotter = 'http://www.omdbapi.com/?s=harry+potter&apikey=fc0a8f0c';
const API_SpiderMan = 'http://www.omdbapi.com/?s=spider+man&apikey=fc0a8f0c';

const SetRequest = async (api, nameFilm) => {
    try {
        const responseFirst = await fetch(api);
        const dataFirst = await responseFirst.json();

        const data = dataFirst.Search;
        const container = document.querySelector('.posts');
        let htmlContent = '';
        data.forEach(element => {
            if (!document.querySelector(`.card[data-imdbid="${element.imdbID}"]`)) {
                htmlContent += `
                    <div class="card" id="${nameFilm}" data-imdbid="${element.imdbID}" style="width: 18rem;">
                        <div class="card-body">
                            <img src="${element.Poster}" class="card-img-top" alt="...">
                            <p class="card-text">${element.Type}</p>
                            <h5 class="card-title">${element.Title}</h5>
                            <p class="card-text">${element.Year}</p>
                        </div>
                    </div>
                `;
            }
        });
        container.insertAdjacentHTML('beforeend', htmlContent);
    } catch (error) {
        console.error('error', error);
    }
};

SetRequest(API_starWars, "StarWars");
SetRequest(API_Avanger, "Avengers");
SetRequest(API_Lord, "Lord_of_the");
SetRequest(API_HarryPotter, "HarryPotter");
SetRequest(API_SpiderMan, "SpiderMan");

document.querySelector('.posts').addEventListener('click', async (event) => {
    const card = event.target.closest('.card');
    if (card) {
        const imdbID = card.getAttribute('data-imdbID');
        const details = await fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=fc0a8f0c`);
        const movieDetails = await details.json();
        console.log(movieDetails);
    }
});

// Функція для фільтрації карток
const filterCards = (filter) => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (filter === 'all' || card.id === filter) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    // Перейти до першого видимого постера
    const firstVisibleCard = Array.from(cards).find(card => card.style.display === 'block');
    if (firstVisibleCard) {
        firstVisibleCard.scrollIntoView({ behavior: 'smooth' });
    }
};

document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const filter = link.getAttribute('data-filter');
        filterCards(filter);
    });
});
