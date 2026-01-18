# Images Directory

This directory contains images for the portfolio website.

## Structure

- `/projects/` - Project-specific images and galleries
  - Each project can have its own subdirectory (e.g., `/projects/iconiq-fest/`)
  - Or images can be named with project prefixes (e.g., `iconiq-fest-1.jpg`)

## Image Guidelines

### Recommended Specifications
- **Format**: JPEG for photos, PNG for graphics with transparency
- **Size**: Images should be optimized for web
  - Gallery thumbnails: 800x600px or similar aspect ratio
  - Full-size images: Max 1920px on longest side
  - File size: Keep under 500KB per image when possible

### Naming Convention
Use descriptive names that include the project:
- `iconiq-fest-stage-setup.jpg`
- `lamii-tour-philadelphia-venue.jpg`
- `afro-plus-festival-backstage.jpg`

### Alt Text
When adding images to HTML, always include descriptive alt text for accessibility:
```html
<img src="images/projects/iconiq-fest-1.jpg" alt="ICONIQ FEST main stage with lighting setup" class="gallery-image">
```

## Adding Images to Project Pages

1. Place images in the `/images/projects/` directory
2. Update the project HTML file to replace the gallery placeholder
3. Use the `.image-gallery-grid` class for the gallery container
4. Each image should have the `.gallery-image` class

Example:
```html
<section class="project-section">
    <h2>Event Gallery</h2>
    <div class="image-gallery">
        <div class="image-gallery-grid">
            <img src="../images/projects/project-name-1.jpg" alt="Description" class="gallery-image">
            <img src="../images/projects/project-name-2.jpg" alt="Description" class="gallery-image">
            <img src="../images/projects/project-name-3.jpg" alt="Description" class="gallery-image">
        </div>
    </div>
</section>
```

The gallery JavaScript will automatically enable lightbox functionality for all images with the `gallery-image` class.
