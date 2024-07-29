document.addEventListener('DOMContentLoaded', function() {
    const itemsContainer = document.querySelector('.items');
    const pageButtons = document.querySelectorAll('.page-btn');
    const itemsPerPage = 10;
    const totalItems = 441; // Загальна кількість елементів
  
    // Функція для генерації елементів
    function generateItems(page) {
      itemsContainer.innerHTML = ''; // Очистити контейнер
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      for (let i = start; i < end && i < totalItems; i++) {
        const item = document.createElement('div');
        item.classList.add('item');
        item.textContent = `Item ${i + 1}`;
        itemsContainer.appendChild(item);
      }
    }
  
    // Додати обробник подій для кнопок пагінації
    pageButtons.forEach(button => {
      button.addEventListener('click', function() {
        pageButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        const page = parseInt(this.getAttribute('data-page'));
        generateItems(page);
      });
    });
  
    // Генерація елементів для першої сторінки за замовчуванням
    generateItems(1);
    pageButtons[0].classList.add('active');
  });
  