// Fetch images and their titles from the Art Institute of Chicago API
const grid = document.querySelector('.image-grid');
const button = document.getElementById('show-other-images');

function fetchImages(page = 1) {
  fetch(`https://api.artic.edu/api/v1/artworks?fields=id,title,image_id&page=${page}&limit=6`)
    .then(response => response.json())
    .then(data => {
      if (data.data && data.data.length > 0) {
        grid.innerHTML = '';
        data.data.forEach(item => {
          const title = item.title || 'Untitled';
          let imageContent;
          if (item.image_id) {
            const iiif_url = `https://www.artic.edu/iiif/2/${item.image_id}/full/291,/0/default.jpg`;
            imageContent = `<img src="${iiif_url}" alt="${title}" class="clickable-image">`;
          } else {
            imageContent = `<div class="no-image-placeholder">No image</div>`;
          }
          const imageDiv = document.createElement('div');
          imageDiv.className = 'image-item';
          imageDiv.innerHTML = `
            <div class="image-title">${title}</div>
            ${imageContent}
          `;
          const imgOrPlaceholder = imageDiv.querySelector('img') || imageDiv.querySelector('.no-image-placeholder');
          imgOrPlaceholder.addEventListener('click', (e) => {
            window.open(`details.html?id=${item.id}`, '_blank');
          });
          grid.appendChild(imageDiv);
        });
      } else {
        grid.innerHTML = '<p>No images found.</p>';
      }
    })
    .catch(error => {
      grid.innerHTML = '<p>Error fetching images.</p>';
      console.error(error);
    });
}

// Initial fetch
fetchImages();

// Button to fetch next page of images
let currentPage = 1;
button.addEventListener('click', () => {
  currentPage++;
  fetchImages(currentPage);
});
