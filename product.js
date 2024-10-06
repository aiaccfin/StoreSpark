// Add click event listener to category links
const categoryLinks = document.querySelectorAll('.menu li');
categoryLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        const category = link.getAttribute('data-category');
        filterProducts(category);
    });
});

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
