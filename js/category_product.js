/*Kategorilere göre ürün listeleme */
$(document).ready(function () {
  const url =
    "https://www.jsonbulut.com/json/product.php?ref=afc1df0bda83d9d5d7e1875e5d9f2f6d&start=0&count=49";
  $.ajax({
    type: "get",
    url: url,
    dataType: "json",
    success: function (res) {
      categoryResult(res);
    },
    error: function (err) {
      console.error(err);
    },
  });

  function categoryResult(res) {
    const category_product = res.Products[0].bilgiler;
    const category = JSON.parse(localStorage.getItem("category_product_send"));
    const arrProduct = [];
    var html = ``;
    category_product.forEach((element) => {
      if (category.CatogryId == element.categories[1].categoryId) {
        arrProduct.push(element);
        localStorage.setItem(
          "category_product_show",
          JSON.stringify(arrProduct)
        );
      }
    });

    for (let i = 0; i < arrProduct.length; i++) {
      const element = arrProduct[i];
      html += `
        <div class="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-3">
            <div class="card" style="width: 100%; id="last_six"  onclick="dataItem(${i})">
                <img src="${element.images["0"].normal}" class="card-img-top">
                    <div class="card-body">
                        <h6>Her Gün Aynı Gün / Ücretsiz Teslimat</h6>
                        <h5 class="productName">${element.productName}</h5>
                        <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                        class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                        class="bi bi-star-fill"></i> +999</p>
                        <h4>${element.price} TL</h4>
                    </div>
             </div>
        </div>
        `;
    }
    $("#row").append(html);
    $(".card").click(function (e) {
      window.location.href = "product_info.html";
    });
  }
});

function dataItem(item) {
  const sesArr = JSON.parse(localStorage.getItem("category_product_show"));
  const send = JSON.stringify(sesArr[item]);
  localStorage.setItem("product_info", send);
}

// function basketControl() {
//   const basket = localStorage.getItem("basket");
//   if (product_info != null) {
//     return JSON.parse(basket);
//   } else {
//     return [];
//   }
// }
