document.addEventListener('DOMContentLoaded', () => {
    
    // --- Elegant iOS-style Slideshow Engine ---
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = 5000; // Time each image stays visible (5 seconds)

    function nextSlide() {
        // Smoothly deactivate the current slide
        slides[currentSlide].classList.remove('active');
        
        // Loop index back to 0 if at final image
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Target next slide
        slides[currentSlide].classList.add('active');
    }

    // Initialize the background loops automatically
    setInterval(nextSlide, slideInterval);


    // --- Gallery Dynamic Filtering ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    // Minor delay creates a fluid staggered dynamic reveal
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.95)';
                    setTimeout(() => item.style.display = 'none', 400);
                }
            });
        });
    });


    // --- Booking Logic Callback Handling ---
    const bookingForm = document.getElementById('appointment-form');
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        alert(`Thank you, ${name}! Your details have been recorded. I'll reach out shortly to finalize the booking.`);
        bookingForm.reset();
    });

     // --- Upgraded Multi-Card Slideshow Engine ---
    const galleryCards = document.querySelectorAll('.gallery-item');

    galleryCards.forEach(card => {
    const cardSlides = card.querySelectorAll('.mini-slide');
    
    // If this specific card doesn't have a slideshow setup, skip it safely
    if (cardSlides.length <= 1) return; 
    
    let currentCardIndex = 0;
    const intervalTime = 3000 + Math.random() * 1500; // Adds slight organic variation so they don't flip synchronously

    setInterval(() => {
        // Fade out current image inside THIS card
        cardSlides[currentCardIndex].classList.remove('active');
        
        // Advance index
        currentCardIndex = (currentCardIndex + 1) % cardSlides.length;
        
        // Fade in next image inside THIS card
        cardSlides[currentCardIndex].classList.add('active');
    }, intervalTime);
});

// Automatically run the preview carousel loop
setInterval(playMiniSlideshow, miniSlideInterval);
});

// --- Universal Premium Lightbox Engine ---
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const triggers = document.querySelectorAll('.lightbox-trigger');
    const closeBtn = document.querySelector('.lightbox-close');

    // Only configure engine if lightbox element exists on the active sub-page
    if (!lightbox) return; 

    triggers.forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src; // Clones image file source
            
            // Finds the caption sibling block text right below the clicked image frame
            const captionSibling = img.nextElementSibling;
            if (captionSibling && captionSibling.classList.contains('image-caption')) {
                lightboxCaption.textContent = captionSibling.textContent;
            } else {
                lightboxCaption.textContent = "";
            }
        });
    });

    // Close on clicking the "X" button
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Close smoothly if user clicks anywhere outside on the blurred background canvas
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = 'none';
        }
    });
});

// --- Accordion Gallery Engine ---
function toggleGallery(projectId) {
    const targetGallery = document.getElementById(projectId);
    const parentItem = targetGallery.closest('.accordion-item');
    const isAlreadyOpen = targetGallery.classList.contains('open');

    // Optional feature: Close all other open galleries automatically to keep the page tidy
    document.querySelectorAll('.expanded-photos').forEach(gallery => {
        gallery.classList.remove('open');
        gallery.closest('.accordion-item').classList.remove('active');
    });

    // If the clicked gallery wasn't already open, open it now
    if (!isAlreadyOpen) {
        targetGallery.classList.add('open');
        parentItem.classList.add('active');
        
        // Smoothly scroll the screen down slightly so the newly revealed images are perfectly in view
        setTimeout(() => {
            parentItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
    }
}