document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item'); // Select all gallery items
    const body = document.body; // Get the body element

    const createPopup = (initialImgSrc) => { // Function to create a popup
        const popupOverlay = document.createElement('div'); // Create the overlay div
        popupOverlay.classList.add('popup-overlay'); // Add the overlay class

        const popupImage = document.createElement('img'); // Create the image element
        popupImage.src = initialImgSrc; // Set the image source
        popupImage.classList.add('popup-image'); // Add the image class

        const closeButton = document.createElement('div'); // Create the close button div
        closeButton.classList.add('close-button'); // Add the close button class
        closeButton.innerHTML = '&times;'; // Set the inner HTML for the close button

        const thumbnailContainer = document.createElement('div'); // Create the thumbnail container
        thumbnailContainer.classList.add('thumbnail-container'); // Add the container class

        galleryItems.forEach(item => { // Loop through each gallery item
            const imgSrc = item.querySelector('img').src; // Get the image source
            const thumbnail = document.createElement('img'); // Create the thumbnail image
            thumbnail.src = imgSrc; // Set the thumbnail source
            thumbnail.classList.add('thumbnail'); // Add the thumbnail class

            if (imgSrc === initialImgSrc) { // Check if the image source matches
                thumbnail.classList.add('selected'); // Add the selected class
            }

            thumbnail.addEventListener('click', () => { // Add click event for thumbnail
                popupImage.src = imgSrc; // Change the popup image source

                const currentSelected = document.querySelector('.thumbnail.selected'); // Get the current selected thumbnail
                if (currentSelected) {
                    currentSelected.classList.remove('selected'); // Remove the selected class
                }
                thumbnail.classList.add('selected'); // Add the selected class to clicked thumbnail
            });

            thumbnailContainer.appendChild(thumbnail); // Append thumbnail to container
        });

        popupOverlay.appendChild(popupImage); // Append popup image to overlay
        popupOverlay.appendChild(closeButton); // Append close button to overlay
        popupOverlay.appendChild(thumbnailContainer); // Append thumbnail container to overlay
        body.appendChild(popupOverlay); // Append overlay to body

        closeButton.addEventListener('click', () => { // Add click event for close button
            body.removeChild(popupOverlay); 
        });

        popupOverlay.addEventListener('click', (e) => {
            if (e.target === popupOverlay) {
                body.removeChild(popupOverlay);
            }
        });
    };

    galleryItems.forEach(item => { // Loop through each gallery item
        const imgSrc = item.querySelector('img').src; // Get the image source

        item.addEventListener('click', (e) => {
            if (e.target.classList.contains('know-more')) return; // Skip if clicked on "Know more"
            createPopup(imgSrc); // Create popup with image source
        });

        const knowMore = item.querySelector('.know-more'); // Get the "Know more" element
        knowMore.addEventListener('click', (e) => { // Add click event for "Know more"
            e.stopPropagation(); // Stop event propagation
            createPopup(imgSrc); // Create popup with image source
        });
    });
});
