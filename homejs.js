// Code de défilement fluide pour les liens de navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation de fade-in pour les images
window.addEventListener('scroll', function() {
    const photos = document.querySelectorAll('.photos img');
    photos.forEach(photo => {
        const rect = photo.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            photo.classList.add('visible');
        }
    });
});

// Fonction pour charger du contenu HTML dans un élément
function loadHTML(elementId, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Erreur de chargement:', error));
}

// Charger le menu et le footer une fois le DOM prêt
document.addEventListener('DOMContentLoaded', function() {
    loadHTML('menu-container', '/Laetitia/menu.html');
    loadHTML('footer-container', '/Laetitia/footer.html');
});