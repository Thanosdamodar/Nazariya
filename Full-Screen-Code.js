function setupLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const blogImages = document.querySelectorAll('.blog-img');

    if (!lightbox || !lightboxImg) return;

    blogImages.forEach(img => {
        img.style.cursor = 'zoom-in';
        
        img.addEventListener('click', () => {
            lightbox.classList.add('active');
            lightboxImg.src = img.src;
            document.body.style.overflow = 'hidden';
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

document.addEventListener('DOMContentLoaded', setupLightbox);