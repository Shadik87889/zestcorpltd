function loadProductDetails() {
  const params = new URLSearchParams(window.location.search);
  const productName = params.get("name");

  const product = products.find((p) => p.name === productName);

  if (!product) {
    document.getElementById("productDetails").innerHTML =
      "<h1>Product not found</h1>";
    return;
  }
  // Update meta tags for Google SEO
  document.title = `${product.name} - Zest Corp LTD`;
  document.querySelector(
    "#metaTitle"
  ).content = `${product.name} - Zest Corp LTD`;
  document.querySelector(
    "#metaDescription"
  ).content = `${product.name} is a high-quality fish supplement from ${product.origin}. Learn more about its benefits!`;
  document.querySelector(
    "#metaKeywords"
  ).content = `${product.name}, fish supplement, best fish food`;

  // Generate JSON-LD for the current product
  const jsonLdScript = document.createElement("script");
  jsonLdScript.type = "application/ld+json";
  jsonLdScript.textContent = JSON.stringify({
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: product.image,
    description: product.description.enText, // English description
    brand: {
      "@type": "Brand",
      name: "Zest Corp LTD",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD", // Change this if you use another currency
      price: product.price || "0.00", // Default to 0 if no price is set
      availability: "https://schema.org/InStock",
    },
  });

  // Remove old JSON-LD script if exists
  const oldJsonLd = document.querySelector(
    'script[type="application/ld+json"]'
  );
  if (oldJsonLd) {
    oldJsonLd.remove();
  }

  // Append new JSON-LD script to <head>
  document.head.appendChild(jsonLdScript);

  document.getElementById("productDetails").innerHTML = `
              <div class="all-products">
              <div class="left-side">
                <img src="${product.image}" alt="${product.name} product image" />
              </div>
              <div class="right-side">
                <div class="name-origin">
                  <h1 class="name">${product.name}</h1>
                  <h2 class="origin">Origin: ${product.origin} <span>${product.originFlag}</span></h2>
                </div>
                <div class="toggle-details">
                  <div class="toggle-btns">
                    <input type="radio" name="language" id="details-en" value="en" checked />
                    <label for="details-en">English</label>
                    <input type="radio" name="language" id="details-bn" value="bn" />
                    <label for="details-bn">বাংলা</label>
                  </div>
                  <div class="pro-details" id="details-content">
                    <p class="en-text">${product.description.enText}</p>
                    <p class="bn-text" style="display: none;">${product.description.bnText}</p>
                  </div>
                </div>
                <div class="key-features">
                  <h3>Key Features</h3>
                  <ul>
                    <li class="en-text">${product.keys.en.one}</li>
                    <li class="en-text">${product.keys.en.two}</li>
                    <li class="en-text">${product.keys.en.three}</li>
  
                    <li class="bn-text" style="display: none;">${product.keys.bn.one}</li>
                    <li class="bn-text" style="display: none;">${product.keys.bn.two}</li>
                    <li class="bn-text" style="display: none;">${product.keys.bn.three}</li>
                  </ul>
                </div>
                <div class="size">
                  <h3>Available Sizes</h3>
                  <div class="sizes">
                    <div class="size-box">${product.sizes.one}</div>
                    <div class="size-box">${product.sizes.two}</div>
                  </div>
                </div>
              </div>
            </div>
          `;

  // Add event listener to toggle language content
  document.querySelectorAll('input[name="language"]').forEach((radio) => {
    radio.addEventListener("change", (event) => {
      const lang = event.target.value;
      const enTexts = document.querySelectorAll(".en-text");
      const bnTexts = document.querySelectorAll(".bn-text");

      if (lang === "en") {
        enTexts.forEach((el) => (el.style.display = "block"));
        bnTexts.forEach((el) => (el.style.display = "none"));
      } else {
        enTexts.forEach((el) => (el.style.display = "none"));
        bnTexts.forEach((el) => (el.style.display = "block"));
      }
    });
  });
  loadYouMayAlsoLike(product.name);
}
function loadYouMayAlsoLike(currentProductName) {
  const productContainer = document.getElementById("productContainer");

  if (!productContainer) {
    console.error("Product container not found!");
    return;
  }

  // Filter out the current product
  const relatedProducts = products.filter(
    (product) => product.name !== currentProductName
  );

  // Display related products
  relatedProducts.forEach((product) => {
    const productHTML = `
              <div class="product" style="background-color: ${product.bgc};">
                  <div class="product-details">
                      <h1 class="name">${product.name}</h1>
                      <p class="origin">Origin: ${product.origin}</p>
                      <p class="measurement">${product.sizes.one}</p>
                  </div>
                  <div class="product-img">
                      <img src="${product.image}" alt="${product.name}" />
                  </div>
                  <div class="buttons">
                      <a href="products-details.html?name=${encodeURIComponent(
                        product.name
                      )}">Explore Now</a>
                  </div>
              </div>
          `;
    productContainer.innerHTML += productHTML;
  });
}
document.addEventListener("DOMContentLoaded", loadProductDetails);
