document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const allImages = document.querySelectorAll(".blog-img");
    let currentActiveImage = null;

    // Create and Add Return Button
    const returnBtn = document.createElement("button");
    returnBtn.innerText = "← Return to blog";
    returnBtn.className = "return-btn";
    lightbox.appendChild(returnBtn); 

    // Create Carousel Container
    let carousel = document.querySelector(".thumbnail-carousel");
    if (!carousel) {
        carousel = document.createElement("div");
        carousel.className = "thumbnail-carousel";
        lightbox.appendChild(carousel);
    }

    const setActiveImage = (imgElement) => {
        lightboxImg.src = imgElement.src;
        currentActiveImage = imgElement;
        
        const thumbs = document.querySelectorAll(".thumb");
        thumbs.forEach(t => {
            t.classList.toggle("active", t.src === imgElement.src);
        });
    };

    allImages.forEach((img) => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            setActiveImage(img);
        });

        const thumb = document.createElement("img");
        thumb.src = img.src;
        thumb.className = "thumb";
        thumb.addEventListener("click", (e) => {
            e.stopPropagation();
            setActiveImage(img);
        });
        carousel.appendChild(thumb);
    });

    // Return to Blog logic
    returnBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        lightbox.style.display = "none";
        if (currentActiveImage) {
            currentActiveImage.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
    });

    // Close on background click (excluding the button and images)
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});