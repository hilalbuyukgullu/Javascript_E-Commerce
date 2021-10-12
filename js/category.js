//left menü
$(document).ready(function () {
  const url = "https://www.jsonbulut.com/json/companyCategory.php";
  const pushObj = {
    ref: "afc1df0bda83d9d5d7e1875e5d9f2f6d",
  };

  $.ajax({
    type: "get",
    url: url,
    data: pushObj,
    dataType: "json",
    success: function (res) {
      categoryResult(res);
    },
    error: function (err) {
      console.error(err);
    },
  });

  function categoryResult(res) {
    let html = ``;
    let category = res.Kategoriler["0"];
    sessionStorage.setItem(
      "category_product",
      JSON.stringify(category.Categories)
    );
    for (let i = 0; i < category.Categories.length; i++) {
      const element = category.Categories[i];
      if (element.TopCatogryId == 0) {
        html += ` <li class="nav-item dropend"><a  href=""><a class="nav-link dropdown-toggle"  data-hover="dropdown"  data-bs-toggle="dropdown"href="flower.html">
                    ${element.CatogryName}</a></a><ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    `;
      }
      for (let i = 0; i < category.Categories.length; i++) {
        const element2 = category.Categories[i];
        if (element2.TopCatogryId == element.CatogryId) {
          html += `<li><a class="dropdown-item" href="flower.html" onclick="category_product(${i})">${element2.CatogryName}</a></li>`;
        }
      }
      html += `</ul></li>`;
    }
    $("#left_nav").html(html);
  }
});

function category_product(item) {
  const sesArr = JSON.parse(sessionStorage.getItem("category_product"));
  const send = JSON.stringify(sesArr[item]);
  localStorage.setItem("category_product_send", send);
}
