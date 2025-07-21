// To run this test:
// 1. Make sure you have Node.js installed.
// 2. Install Jest by running: npm install --save-dev jest
// 3. Add "test": "jest" to the "scripts" section of your package.json.
// 4. Run the test with: npm test
//
// This test checks that fetchImages correctly renders images and titles from mock API data.
//
// @jest-environment jsdom

const fs = require('fs');
const path = require('path');

// Load the script.js code
const scriptCode = fs.readFileSync(path.resolve(__dirname, 'script.js'), 'utf8');

describe('fetchImages', () => {
  let grid;
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="image-grid"></div>
      <button id="show-other-images"></button>
    `;
    grid = document.querySelector('.image-grid');
    // Evaluate script.js code in the test context
    eval(scriptCode);
  });

  it('should render images and titles from mock API data', async () => {
    // Mock fetch
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({
        data: [
          { title: 'Test Title 1', image_id: 'img1' },
          { title: 'Test Title 2', image_id: 'img2' },
          { title: 'Test Title 3', image_id: 'img3' },
          { title: 'Test Title 4', image_id: 'img4' },
          { title: 'Test Title 5', image_id: 'img5' },
          { title: 'Test Title 6', image_id: 'img6' }
        ]
      })
    }));

    // Call fetchImages directly
    await fetchImages(1);

    const images = grid.querySelectorAll('img');
    const titles = grid.querySelectorAll('.image-title');
    expect(images.length).toBe(6);
    expect(titles.length).toBe(6);
    expect(titles[0].textContent).toBe('Test Title 1');
    expect(images[0].getAttribute('src')).toContain('img1');
  });
});
