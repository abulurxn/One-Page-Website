const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

lightbox.style.position = 'fixed';
lightbox.style.top = '0';
lightbox.style.left = '0';
lightbox.style.width = '100%';
lightbox.style.height = '100%';
lightbox.style.background = 'rgba(0,0,0,0.8)';
lightbox.style.display = 'none';
lightbox.style.justifyContent = 'center';
lightbox.style.alignItems = 'center';
lightbox.style.zIndex = '1000';

const img = document.createElement('img');
img.style.maxWidth = '90%';
img.style.maxHeight = '90%';
lightbox.appendChild(img);

const images = document.querySelectorAll('.gallery img');
images.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        img.src = image.getAttribute('data-large');
    });
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
