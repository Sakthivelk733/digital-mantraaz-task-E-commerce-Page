    //  loader after 2 seconds
    window.onload = () => {
      setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        loadProducts();
      }, 2000);
    };

    //  product data
    const products = [
      { id: 1, name: "Earrings", price: 1999, category: "Fashion", image: "./image/earrings.webp" },
      { id: 2, name: "Shoes", price: 1899, category: "Fashion", image: "./image/shoe.jpg" },
      { id: 3, name: "Makeup&beauty", price: 1799, category: "Fashion", image: "./image/makeup.webp" },
      { id: 4, name: "Jwellery", price: 11677, category: "Fashion", image: "./image/jwellery.jpg" },
      { id: 5, name: "Tablet", price: 15559, category: "electronics", image: "./image/tablet.jpg" },
      { id: 6, name: "Earbuds", price: 1469, category: "electronics", image: "./image/earbuds.jpg" },
      { id: 7, name: "Speakers", price: 1340, category: "electronics", image: "./image/speaker.jpg" },
      { id: 8, name: "Smart Watches", price: 1299, category: "electronics", image: "./image/smart watch.jpg" },
      { id: 9, name: "Kitchen Appliances", price: 3199, category: "electronics", image: "./image/kitchen appliances.jpg" },
      { id: 10, name: "Mouse", price:199, category: "electronics", image: "./image/mouse.jpg" },
      { id: 11, name: "Cables", price: 999, category: "electronics", image: "./image/cables.jpg" },
      { id: 12, name: "Power banks", price: 859, category: "electronics", image: "./image/power bank.jpg" },
      { id: 13, name: "Grooming", price: 799, category: "electronics", image: "./image/grooming tool.jpg" },
      { id: 14, name: "Bulbs&Light", price: 99, category: "electronics", image: "./image/bulb.jpg" },
      { id: 15, name: "Iron Box", price: 399, category: "electronics", image: "./image/iron box.jpg" },
      { id: 16, name: "Hair Dryer", price: 699, category: "electronics", image: "./image/hair dryer.jpg" },
      { id: 17, name: "Electic Cookware", price: 1059, category: "electronics", image: "image/electric cookware.jpg" },
      { id: 18, name: "Coffee Maker", price: 11199, category: "electronics", image: "image/coffee maker.webp" },
      { id: 19, name: "Kettle", price: 599, category: "electronics", image: "image/kettle.webp" },
      { id: 20, name: "Mixers", price: 1399, category: "electronics", image: "image/mixer.webp" }
    ];

    // Load products
    function loadProducts() {
      const productGrid = document.getElementById('productGrid');
      productGrid.innerHTML = '';
      products.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
          <img class="product-image" src="${product.image}" alt="${product.name}">
          <div class="product-details">
            <h3>${product.name}</h3>
            <p>RS.${product.price}</p>
            <button class="add-to-cart" onclick="addToCart('${product.name}')">Add to Cart</button>
          </div>`;
        productGrid.appendChild(productCard);

        const image = productCard.querySelector('.product-image');
        image.onload = () => {
          image.style.opacity = 100;
        };
      });
    }

    // Function products
function filterAndSortProducts() {
  const category = document.getElementById('categoryFilter').value;
  const sortOption = document.getElementById('sortOptions').value;

  let filteredProducts = products;

  // Filter
  if (category) {
    filteredProducts = filteredProducts.filter(product => product.category === category);
  }

  //  price
  if (sortOption === 'lowToHigh') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'highToLow') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }
  // Display  list
  loadProducts(filteredProducts);
}

//  dropdown menus
document.getElementById('categoryFilter').addEventListener('change', filterAndSortProducts);
document.getElementById('sortOptions').addEventListener('change', filterAndSortProducts);

    // Add to cart
    function addToCart(productName) {
      const toast = document.getElementById('toast');
      toast.textContent = `${productName} added to cart!`;
      toast.classList.remove('hidden');
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2000);
      console.log(toast);   
    }

    // Scroll-to-top button
    const scrollToTopButton = document.getElementById('scrollToTop');
    window.onscroll = () => {
      if (window.scrollY > 100) scrollToTopButton.style.display = 'block';
      else scrollToTopButton.style.display = 'none';
    };

    scrollToTopButton.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });