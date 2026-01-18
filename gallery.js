/**
 * Image Gallery and Lightbox Functionality
 * Handles image viewing, modal display, and keyboard navigation
 */

(function() {
    'use strict';

    // Lightbox Modal HTML
    const lightboxHTML = `
        <div id="lightbox" class="lightbox" style="display: none;">
            <div class="lightbox-overlay"></div>
            <div class="lightbox-content">
                <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
                <button class="lightbox-prev" aria-label="Previous image">‹</button>
                <button class="lightbox-next" aria-label="Next image">›</button>
                <img src="" alt="" class="lightbox-image">
                <div class="lightbox-caption"></div>
            </div>
        </div>
    `;

    // Initialize lightbox when DOM is ready
    function initLightbox() {
        // Add lightbox HTML to body
        document.body.insertAdjacentHTML('beforeend', lightboxHTML);

        const lightbox = document.getElementById('lightbox');
        const lightboxImg = lightbox.querySelector('.lightbox-image');
        const lightboxCaption = lightbox.querySelector('.lightbox-caption');
        const closeBtn = lightbox.querySelector('.lightbox-close');
        const prevBtn = lightbox.querySelector('.lightbox-prev');
        const nextBtn = lightbox.querySelector('.lightbox-next');

        let currentImages = [];
        let currentIndex = 0;

        // Open lightbox
        function openLightbox(images, index) {
            currentImages = images;
            currentIndex = index;
            showImage(currentIndex);
            lightbox.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        // Close lightbox
        function closeLightbox() {
            lightbox.style.display = 'none';
            document.body.style.overflow = '';
        }

        // Show specific image
        function showImage(index) {
            if (index < 0) index = currentImages.length - 1;
            if (index >= currentImages.length) index = 0;
            currentIndex = index;

            const img = currentImages[currentIndex];
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightboxCaption.textContent = img.alt;

            // Show/hide navigation buttons based on number of images
            if (currentImages.length <= 1) {
                prevBtn.style.display = 'none';
                nextBtn.style.display = 'none';
            } else {
                prevBtn.style.display = 'block';
                nextBtn.style.display = 'block';
            }
        }

        // Navigate to previous image
        function prevImage() {
            showImage(currentIndex - 1);
        }

        // Navigate to next image
        function nextImage() {
            showImage(currentIndex + 1);
        }

        // Event listeners
        closeBtn.addEventListener('click', closeLightbox);
        lightbox.querySelector('.lightbox-overlay').addEventListener('click', closeLightbox);
        prevBtn.addEventListener('click', prevImage);
        nextBtn.addEventListener('click', nextImage);

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (lightbox.style.display === 'block') {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowLeft') prevImage();
                if (e.key === 'ArrowRight') nextImage();
            }
        });

        // Attach click handlers to all gallery images
        const galleries = document.querySelectorAll('.image-gallery-grid');
        galleries.forEach(gallery => {
            const images = Array.from(gallery.querySelectorAll('.gallery-image'));
            images.forEach((img, index) => {
                img.addEventListener('click', function() {
                    openLightbox(images, index);
                });
                // Make images keyboard accessible
                img.setAttribute('tabindex', '0');
                img.setAttribute('role', 'button');
                img.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openLightbox(images, index);
                    }
                });
            });
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLightbox);
    } else {
        initLightbox();
    }
})();
