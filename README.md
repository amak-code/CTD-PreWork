# Art Institute of Chicago Image Viewer

This project is a simple web application that displays artwork images and details from the Art Institute of Chicago public API. Users can browse a grid of images, click any image to view its details (title, author, origin, and description) on a separate page, and load more images using a button.

## How to Run

If you are viewing this project on GitHub, you have three options to run it:

### Option 1: Download and Open Locally
1. Click the green "Code" button on the GitHub repo page and select "Download ZIP".
2. Unzip the downloaded file to your computer.
3. Open the unzipped folder and double-click `index.html` to view the app in your web browser.

### Option 2: Fork the Repository
1. Click the "Fork" button at the top right of the GitHub repo page to create a copy in your own GitHub account.
2. Clone your forked repository to your computer using:
   ```bash
   git clone https://github.com/amak-code/CTD-PreWork.git
   ```
3. Open the cloned folder and double-click `index.html` to view the app in your web browser.

### Option 3: Use GitHub Pages (Recommended)
If the repository owner has enabled GitHub Pages, you can visit the live site directly in your browser:
- Go to: https://amak-code.github.io/CTD-PreWork/

## Features
- Browse a grid of artwork images from the Art Institute of Chicago API.
- Click any image to view its details (title, author, origin, description) in a new tab.
- Load more images using the "Click here to see other images" button.

## API Endpoints Used
- **List Artworks:**
  - `https://api.artic.edu/api/v1/artworks?fields=id,title,image_id&page=PAGE_NUMBER&limit=6`
  - Used to fetch a list of artworks with their IDs, titles, and image IDs for the grid view.
- **Artwork Details:**
  - `https://api.artic.edu/api/v1/artworks/ARTWORK_ID?fields=title,image_id,artist_display,place_of_origin,description`
  - Used to fetch detailed information for a selected artwork, including title, image, author, origin, and description.

## Files
- `index.html`: Main HTML page with the image grid
- `details.html`: Page for displaying detailed info about a selected artwork
- `styles.css`: CSS for styling and layout
- `script.js`: JavaScript for fetching and displaying grid images
- `details.js`: JavaScript for fetching and displaying artwork details

No installation or build steps are required. Just open `index.html` in your browser or use GitHub Pages to start using the app.
