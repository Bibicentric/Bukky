# Image Gallery Feature - Usage Guide

This document explains how to add images to your portfolio project pages using the newly implemented gallery functionality.

## Overview

The portfolio now includes a fully-functional image gallery system with:
- Grid-based gallery layout
- Lightbox/modal for full-screen image viewing
- Keyboard navigation support
- Responsive design for all screen sizes
- Accessibility features (ARIA labels, keyboard navigation)

## Quick Start

To add images to a project page:

1. **Place your images** in the `/images/projects/` directory
2. **Update the HTML** in your project page (e.g., `projects/your-project.html`)
3. **Include the gallery script** at the bottom of the page

## Step-by-Step Instructions

### 1. Organize Your Images

Place project images in `/images/projects/`. You can:
- Create subdirectories per project: `/images/projects/iconiq-fest/`
- Use prefixed filenames: `iconiq-fest-stage.jpg`, `iconiq-fest-backstage.jpg`

**Image Recommendations:**
- Format: JPEG for photos, PNG for images with transparency
- Size: 800x600px for thumbnails, max 1920px for full-size
- File size: Keep under 500KB per image for optimal performance
- Naming: Use descriptive names like `event-name-description.jpg`

### 2. Update Your Project HTML

Replace the gallery placeholder section with actual images:

```html
<!-- Image Gallery -->
<section class="project-section">
    <h2>Event Gallery</h2>
    <div class="image-gallery">
        <div class="image-gallery-grid">
            <img src="../images/projects/your-project-1.jpg" 
                 alt="Descriptive alt text for accessibility" 
                 class="gallery-image">
            <img src="../images/projects/your-project-2.jpg" 
                 alt="Another descriptive alt text" 
                 class="gallery-image">
            <img src="../images/projects/your-project-3.jpg" 
                 alt="More descriptive text" 
                 class="gallery-image">
            <!-- Add as many images as you want -->
        </div>
        <p style="margin-top: 1rem; color: #888; font-size: 0.9rem; font-style: italic;">
            📸 Click any image to view in full-screen. Use arrow keys or navigation buttons to browse through the gallery.
        </p>
    </div>
</section>
```

**Important:**
- Each `<img>` must have the `class="gallery-image"` attribute
- Always include descriptive `alt` text for accessibility
- The path should be `../images/projects/` (note the `..` to go up one directory from `/projects/`)

### 3. Include the Gallery Script

Add the gallery script reference before the closing `</body>` tag:

```html
<!-- Scripts -->
<script src="../gallery.js"></script>
<script>
    window.addEventListener('load', function() {
        document.body.classList.remove('is-preload');
    });
</script>

</body>
</html>
```

## Features

### Lightbox Functionality

When a user clicks on any gallery image:
- Image opens in full-screen lightbox with dark overlay
- Image caption displays below (using the alt text)
- Navigation controls appear (Previous/Next buttons)
- Close button (X) appears in top-right corner

### Navigation Options

Users can navigate through images using:
- **Click Previous/Next buttons**: `‹` and `›` buttons on left and right
- **Keyboard arrows**: Left/Right arrow keys
- **Close lightbox**: Click X button, press Escape, or click dark overlay

### Responsive Design

The gallery automatically adapts to different screen sizes:
- **Desktop**: 3-4 images per row
- **Tablet**: 2-3 images per row  
- **Mobile**: 1 image per row

### Accessibility

The gallery includes:
- Keyboard navigation support (Tab, Enter, Space, Arrow keys, Escape)
- ARIA labels on all interactive elements
- Alt text displayed as captions in lightbox
- Focus indicators for keyboard users

## Examples

### Currently Implemented

Three project pages already have working galleries:
1. **ICONIQ FEST** (`projects/iconiq-fest.html`) - 6 placeholder images
2. **LAMII WONDER** (`projects/lamii-wonder.html`) - 4 placeholder images
3. **AFRO PLUS FESTIVAL** (`projects/afro-plus-festival.html`) - 4 placeholder images

These use SVG placeholder images. To replace with real photos:
1. Add your photos to `/images/projects/`
2. Update the `src` attributes in the HTML to point to your photos
3. Update the `alt` text to describe your photos

### Adding to Other Projects

To add galleries to other project pages (e.g., `tiwa-savage-tour.html`):

1. Find the gallery placeholder section:
```html
<!-- Image Gallery Placeholder -->
<section class="project-section">
    <h2>Tour Gallery</h2>
    <div class="image-gallery">
        <div class="gallery-placeholder">
            <p>📸 Tour photos coming soon</p>
        </div>
    </div>
</section>
```

2. Replace it with the actual gallery structure (see Step-by-Step Instructions above)

3. Add the gallery script if not already present (see Step 3 above)

## Troubleshooting

### Images Don't Display
- Check the image path is correct (should start with `../images/projects/`)
- Verify images exist in the `/images/projects/` directory
- Check browser console for 404 errors

### Lightbox Doesn't Open
- Verify `gallery.js` is included in the HTML
- Check that images have `class="gallery-image"`
- Check browser console for JavaScript errors

### Images Look Distorted
- The CSS uses `object-fit: cover` which crops images to fit
- Use images with similar aspect ratios (e.g., all landscape or all portrait)
- Recommended ratio: 4:3 or 16:9 for best results

### Navigation Buttons Missing in Lightbox
- If only one image exists, navigation buttons are hidden automatically
- Add more images to see the navigation controls

## Technical Details

### Files Modified/Created
- `/gallery.js` - Main JavaScript for lightbox functionality
- `/projects/project-page.css` - Enhanced styles for gallery and lightbox
- `/images/README.md` - Image directory documentation
- `/images/projects/.gitkeep` - Ensures directory is tracked in git
- Multiple project HTML files updated with galleries

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled

### Performance
- Lazy loading not implemented (consider for many images)
- SVG placeholders are very lightweight
- Real images should be optimized for web (compressed JPEGs)

## Future Enhancements

Possible improvements for later:
- Lazy loading for galleries with many images
- Image zoom/pan functionality
- Swipe gestures for mobile navigation
- Thumbnail preview navigation
- Video support in lightbox
- Social sharing buttons

## Support

For questions or issues with the gallery feature, please open an issue on the GitHub repository.
