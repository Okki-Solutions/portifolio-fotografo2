const photoCards = document.querySelectorAll('.photo-card');
const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox?.querySelector('img');
const closeButton = document.querySelector('.modal-close');

photoCards.forEach((card) => {
  card.addEventListener('click', () => {
    const imageUrl = card.getAttribute('data-image');
    const alt = card.getAttribute('data-alt') || 'Imagem do portfólio';
    if (lightbox && lightboxImage) {
      lightboxImage.src = imageUrl || '';
      lightboxImage.alt = alt;
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
    }
  });
});

function closeLightbox() {
  if (lightbox) {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
  }
}

if (closeButton) closeButton.addEventListener('click', closeLightbox);
if (lightbox) lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeLightbox();
});
