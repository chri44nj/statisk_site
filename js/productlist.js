const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?limit=30&category=" + category)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  console.log(products);
  products.forEach(showProduct);
}

function showProduct(product) {
  //console.log(product);
  const template = document.querySelector(".productTemplate").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".product_name").textContent = product.productdisplayname;
  copy.querySelector(".brand_name").textContent = product.brandname;
  document.querySelector(".product_type").textContent = product.category;
  copy.querySelector(".price").textContent = product.price + " DKK";
  if (product.soldout) {
    copy.querySelector(".img").classList.add("blur");
    copy.querySelector(".price").classList.add("orange");
    copy.querySelector(".sold_out_no").classList.add("sold_out_yes");
  }
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".product_view").href = `product.html?id=${product.id}`;
  document.querySelector(".products_grid2").appendChild(copy);
}

fetch("https://kea-alt-del.dk/t7/api/seasons")
  .then((res) => res.json())
  .then(showSeasons);

function showSeasons(seasons) {
  seasons.forEach(showSeason);
}

function showSeason(season) {
  const template_seasons = document.querySelector(".template_seasons").content;
  const clone2 = template_seasons.cloneNode(true);
  clone2.querySelector("h3").textContent = season.season;
  clone2.querySelector("a").href = `productlist.html?season=${season.season}`;
  document.querySelector("#an_ID").append(clone2);
}
