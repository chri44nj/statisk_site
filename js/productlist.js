const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?category" + category)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  products.forEach(showProduct);
}

function showProduct(product) {
  //console.log(product);
  const template = document.querySelector(".productTemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".product_name").textContent = product.productdisplayname;
  copy.querySelector(".brand_name").textContent = product.brandname;
  copy.querySelector(".price").textContent = product.price;
  if (product.soldout) {
    copy.querySelector("article").classList.add("sold_out_yes_article");
  }
  document.querySelector(".products_grid2").appendChild(copy);
}

/* <img src="https://kea-alt-del.dk/t7/images/webp/1000/1528.webp" alt="">
<h2>Brand name</h2>
<h3>Product name</h3>
<p>Price</p> */
