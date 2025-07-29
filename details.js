// Logic for details.html
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const artworkId = getQueryParam('id');
const detailsContainer = document.getElementById('artwork-details');

if (artworkId) {
    fetch(`https://api.artic.edu/api/v1/artworks/${artworkId}?fields=title,image_id,artist_display,place_of_origin,description`)
        .then(response => response.json())
        .then(data => {
            const item = data.data;
            const title = item.title || 'Untitled';
            const artist = item.artist_display || 'Unknown Artist';
            const origin = item.place_of_origin || 'Unknown Origin';
            const description = item.description || '';
            let imageContent;
            if (item.image_id) {
                const iiif_url = `https://www.artic.edu/iiif/2/${item.image_id}/full/600,/0/default.jpg`;
                imageContent = `<img src="${iiif_url}" alt="${title}" style="max-width: 100%; height: auto; margin-bottom: 24px;">`;
            } else {
                imageContent = `<div class="no-image-placeholder details-placeholder">No image</div>`;
            }
            detailsContainer.innerHTML = `
                <h2>${title}</h2>
                ${imageContent}
                <h3>Author: ${artist}</h3>
                <h4>Origin: ${origin}</h4>
                <div class="description">Description: ${description}</div>
            `;
        })
        .catch(error => {
            detailsContainer.innerHTML = '<p>Error fetching artwork details.</p>';
            console.error(error);
        });
} else {
    detailsContainer.innerHTML = '<p>No artwork selected.</p>';
}
