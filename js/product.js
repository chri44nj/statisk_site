//https://kea-alt-del.dk/t7/api/products/1165
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/1529")
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  //console.log(product);
  document.querySelector(".brand_name").textContent = product.brandname;
  document.querySelector(".price").textContent = product.price + " DKK";
  document.querySelector(".status").textContent = "Status: " + product.soldout;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector(".color").textContent = "Color: " + product.basecolour;
  document.querySelector(".item_number").textContent = "Item number: " + product.id;
  document.querySelectorAll(".product_name").forEach(change_product_name);
}

function change_product_name(product) {
  product.textContent = "fucking navn" + product.productdisplayname;
}
