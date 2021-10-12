/*Ürün detaylı bilgi sayfası*/

$(document).ready(function () {
  const product_info = JSON.parse(localStorage.getItem("product_info"));
  let html = `
    <div class="row">
        <div class="col">
            <img src="${product_info.images["0"].normal}" class="product_img">
        </div>
        <div class="col">
            <h5>${product_info.brief}</h5>
            <h4>${product_info.price} TL</h4>
            <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i
                class="bi bi-star-fill"></i> +999</p>
            <button class="product_button" onclick="basket() ">Sepete Ekle</button>
            <p class="product_p">${product_info.description}</p>
        </div>
    </div>
    `;
  $(".product_info").html(html);
});

function basket() {
  const user = sessionStorage.getItem("userId");
  const product_info = localStorage.getItem("product_info");
  let basketArr;
  if (user != null) {
    if (
      sessionStorage.getItem("basket") == null ||
      sessionStorage.getItem("basket") == ""
    ) {
      basketArr = [];
      //basketArr = JSON.parse(localStorage.getItem("basket"));
      basketArr.unshift(JSON.parse(product_info));
      sessionStorage.setItem("basket", JSON.stringify(basketArr));
    } else {
      basketArr = JSON.parse(sessionStorage.getItem("basket"));
      basketArr.unshift(JSON.parse(product_info));
      sessionStorage.setItem("basket", JSON.stringify(basketArr));
    }
    $("#basketCount").html(basketArr.length);
    $.bootstrapGrowl("Sepete eklendi.", {
      type: "success",
      delay: 1000,
    });
  } else {
    $.bootstrapGrowl("Lütfen giriş yapınız.", {
      type: "warning",
      delay: 2000,
    });
    setTimeout(function () {
      $("#staticBackdrop").modal("toggle");
    }, 600);
  }
}
