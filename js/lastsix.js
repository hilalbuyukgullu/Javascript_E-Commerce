/*Son 6 veriyi anasayfaya */

$(document).ready(function () {
  const url =
    "https://www.jsonbulut.com/json/product.php?ref=afc1df0bda83d9d5d7e1875e5d9f2f6d&start=0&count=49";
  $.ajax({
    type: "get",
    url: url,
    dataType: "json",
    success: function (res) {
      categoryResult(res);
      var data1 = res;
    },
    error: function (err) {
      console.error(err);
    },
  });

  function categoryResult(res) {
    let html = ``;
    let lastSix = res.Products["0"];

    sessionStorage.setItem("products", JSON.stringify(lastSix.bilgiler));
    for (let i = lastSix.bilgiler.length - 8;i < lastSix.bilgiler.length;i++) {
      var element = lastSix.bilgiler[i];
      html += `
        <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-3">
            <div class="card" style="width: 100%; id="last_six" onclick="dataItem(${i})">
                <img src="${element.images[0].normal}" class="card-img-top">
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

    $("#lastSix").append(html);
    $(".card").click(function (e) {
      window.location.href = "product_info.html";
    });
  }
});

function dataItem(item) {
  const sesArr = JSON.parse(sessionStorage.getItem("products"));
  const send = JSON.stringify(sesArr[item]);
  localStorage.setItem("product_info", send);
}
