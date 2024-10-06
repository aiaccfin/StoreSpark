// Fetching and displaying categories
fetch('Home.json')
  .then(response => response.json())
  .then(data => {
    const categories = data.home.categories.data;
    const categoriesContainer = document.getElementById('categories');

    categories.forEach(category => {
      const categoryHTML = `<div class="category" data-link="${category.link}">${category.name}</div>`;
      categoriesContainer.innerHTML += categoryHTML;
    });

    // Add click event listener to category links
    const categoryLinks = document.querySelectorAll('.category');
    categoryLinks.forEach(link => {
      link.addEventListener('click', () => {
        const categoryLink = link.getAttribute('data-link');
        filterProducts(categoryLink);
      });
    });
  })
  .catch(error => console.error('Error fetching categories:', error));

// Fetching and displaying products on page load
fetchHomePageProducts();

// Function to fetch and display homepage products
function fetchHomePageProducts() {
  fetch('Home.json')
    .then(response => response.json())
    .then(data => {
      const products = data.home.products.data;
      displayProducts(products);
    })
    .catch(error => console.error('Error fetching homepage products:', error));
}

// Function to filter and display products based on category
function filterProducts(category) {
  fetch('products.json')
    .then(response => response.json())
    .then(data => {
      const products = data.products.data.items;
      const filteredProducts = products.filter(product => product.category === category);
      displayProducts(filteredProducts);
    })
    .catch(error => console.error('Error fetching products:', error));
}

// Function to display products
function displayProducts(products) {
  const productsContainer = document.getElementById('products');
  productsContainer.innerHTML = ''; // Clear previous products

  products.forEach(product => {
    const productHTML = `
      <div class="product">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
      </div>
    `;
    productsContainer.innerHTML += productHTML;
  });
}

function openNewWindow() {
  // Specify the URL and window dimensions
  var url = "https://storespark.streamlit.app";
  var width = 1000;
  var height = 1600;

  // Calculate the position of the new window to place it at the right bottom corner of the screen
  var left = screen.width - width; // Adjusted for right alignment
  var top = screen.height - height; // Adjusted for bottom alignment

  // Open the new window with the specified dimensions and position
  window.open(url, "_blank", "width=" + width + ", height=" + height + ", left=" + left + ", top=" + top);
}
