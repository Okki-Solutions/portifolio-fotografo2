// Funções simples para os botões flutuantes, simulando ações de Lightbox/Zoom

function toggleZoom() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Simula um efeito de zoom ou abre um modal
    // Aqui apenas alternamos uma classe para exemplo visual
    galleryItems.forEach(item => {
        item.classList.toggle('zoomed');
        if (item.classList.contains('zoomed')) {
            item.style.transform = "scale(1.05)";
            item.style.transition = "transform 0.3s ease";
        } else {
            item.style.transform = "scale(1)";
        }
    });
}

function expandGallery() {
    const gallerySection = document.querySelector('.gallery');
    const grid = document.querySelector('.gallery-grid');
    
    // Simula a expansão para tela cheia
    if (gallerySection.style.background === 'black') {
        gallerySection.style.background = '#0a0a0a'; // Volta ao normal
        grid.style.maxWidth = '1400px';
    } else {
        gallerySection.style.background = 'black'; // Tela cheia escura
        grid.style.maxWidth = '100%'; // Expande o grid
        grid.style.padding = '0 10px';
    }
}