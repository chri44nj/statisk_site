fetch("https://kea-alt-del.dk/t7/api/categories/")
  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  cats.forEach(showCategory);
}

function showCategory(cat) {
  const template_category = document.querySelector(".template_category").content;
  const clone1 = template_category.cloneNode(true);
  clone1.querySelector("a").textContent = cat.category;
  clone1.querySelector("a").href = `productlist.html?category=${cat.category}`;
  document.querySelector(".category_flex").append(clone1);
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
