//https://kea-alt-del.dk/t7/api/products/1165
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function randNumb(n) {
  return Math.floor(Math.random() * n) + 1;
}

function showProduct(product) {
  console.log(product);
  document.querySelector(".brand_name").textContent = product.brandname;
  document.querySelector(".brand_name2").textContent = product.brandname;
  document.querySelector(".price").textContent = product.price + " DKK";
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector(".color").textContent = "Color: " + product.basecolour;
  document.querySelector(".ratings").textContent = randNumb(100) + " ratings";
  document.querySelector(".item_number").textContent = "Item number: " + product.id;

  if (product.soldout) {
    document.querySelector(".price").classList.add("sale_price");
    document.querySelector("#sale_price").classList.add("sold_out_no");
    document.querySelector(".status").classList.add("orange");
    document.querySelector(".status").textContent = "Status: SOLD OUT";
  }

  if (product.discount) {
    document.querySelector(".price").textContent = product.price + " DKK   -  " + (product.discount / product.price).toFixed(2) * 100 + "% off!";
    document.querySelector("#sale_price").textContent = product.price + product.discount + " DKK";
  } else {
    document.querySelector("#sale_price").classList.add("sold_out_no");
    document.querySelector(".price").textContent = product.price + " DKK";
  }

  // document.querySelector(".production_information").textContent = product.;
  const allProductNames = document.querySelectorAll(".product_name");
  // Kunne have lavet tre individuelle klasser i stedet (som ved brand_name), men dette virker også
  for (let iteration = 0; iteration < allProductNames.length; iteration++) allProductNames[iteration].textContent = product.productdisplayname;
  //
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

const like = document.querySelector(".like");
const add = document.querySelector(".add_basket");
const heart = document.querySelector("#like_container");
const kiss = document.querySelector("#kiss");
const fuggedadboudit = document.querySelector("#fuggedaboudit");

like.addEventListener("mousedown", click_like);
add.addEventListener("mousedown", click_add);

function click_like() {
  if (Math.random() < 0.5) {
    console.log("animation 1");
    heart.classList.remove("gone");
    heart.classList.add("not_gone");
    heart.classList.add("posx" + randNumb(7));
    heart.classList.add("like_animation");
    like.removeEventListener("mousedown", click_like);
    heart.addEventListener("animationend", restart_like);
    kiss.currentTime = 0;
    kiss.play();
  } else {
    console.log("animation 2");
    heart.classList.remove("gone");
    heart.classList.add("not_gone");
    heart.classList.add("posx" + randNumb(7));
    heart.classList.add("like_animation2");
    like.removeEventListener("mousedown", click_like);
    heart.addEventListener("animationend", restart_like);
    kiss.currentTime = 0;
    kiss.play();
  }
}

function restart_like() {
  heart.classList = "";
  heart.classList.add("gone");
  like.addEventListener("mousedown", click_like);
}

function click_add() {
  fuggedadboudit.currentTime = 0;
  fuggedadboudit.play();
}
