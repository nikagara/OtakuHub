const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const searchInput = document.querySelector('.search-input');
const searchResults = document.getElementById('searchResults');
const searchContainer = document.querySelector('.search-container');

// Мобильное меню
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Закрытие сайдбара при клике вне его на мобильных устройствах
document.addEventListener('click', (event) => {
    if (window.innerWidth <= 768) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickInsideToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideSidebar && !isClickInsideToggle && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    }
});

// Данные для поиска (имитация базы данных аниме)
const animeDatabase = [
    { id: 1, title: "Король изгоев из другого мира", year: 2023, episodes: 12, image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 2, title: "Поднятие уровня в одиночку", year: 2020, episodes: 24, image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 3, title: "Истребитель демонов", year: 2019, episodes: 26, image: "https://images.unsplash.com/photo-1541562232579-512a21360020?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 4, title: "Магическая битва", year: 2020, episodes: 24, image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 5, title: "Восхождение героя цита", year: 2013, episodes: 25, image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 6, title: "Токийские мстители", year: 2021, episodes: 24, image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 7, title: "Атака титанов", year: 2013, episodes: 89, image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 8, title: "Ван-Пис", year: 1999, episodes: 1000, image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 9, title: "Наруто", year: 2002, episodes: 220, image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 10, title: "Блич", year: 2004, episodes: 366, image: "https://images.unsplash.com/photo-1489599809516-9827b6d1cf13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }]