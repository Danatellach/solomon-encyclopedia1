document.addEventListener('DOMContentLoaded', function() {
  fetch('data/demons.json')
    .then(response => response.json())
    .then(data => {
      const demonList = document.getElementById('demonList');

      data.demons.forEach(function(demon) {
        const li = document.createElement('li');
        li.textContent = demon.name;
        li.style.cursor = 'pointer';

        li.addEventListener('click', function() {
          window.location.href = demon.page;
        });

        demonList.appendChild(li);
      });

      const searchInput = document.getElementById('search');
      searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const demons = demonList.getElementsByTagName('li');

        Array.from(demons).forEach(function(demonItem) {
          const text = demonItem.textContent.toLowerCase();

            demonItem.style.display = text.includes(searchTerm) ? 'block' : 'none';
        });
      });
    })
    .catch(function(error) {
      console.error('Помилка завантаження списку духів:', error);
    });
});

