//sepetim
function refresh() {
  const basket = JSON.parse(sessionStorage.getItem("basket"));
  let html = ``;
  for (var i = 0; i < basket.length; i++) {
    const element = basket[i];
    if (basket != null) {
      html += `
        <div class="row">
            <div class="col-2"></div>
                <div class="col-2">
                    <img src="${element.images["0"].normal}" class="basket_img">
                </div>
                <div class="col-4 basket_info">
                    <h5 class="basket_h5">${element.brief}</h5>
                    <h6 class="basket_h6">${element.price} TL</h6>
                </div>
                <div class="col-2">
                    <button class="basket_delete" id="basket_delete" onclick="deleteItem(${i})">
                    <i class="fas fa-trash-alt"></i></button>
                </div>
            </div>
                <hr aling="center"/>      
        </div>
                `;
    } else if (user == null) {
      let html = `<h5>Sepetiniz Boş</h5>`;
      $(".basket_item").html(html);
    }
    $(".basket_item").html(html);
  }
  html += `<a href="" class="order-a">
  <button type="button" class="btn btn-purple" id="orderForm" onclick="pastOrder()">Sipariş Ver</button></a>`;
  $(".basket_item").html(html);
}

refresh();

function deleteItem(id) {
  var basket = JSON.parse(sessionStorage.getItem("basket"));
  basket.splice(id, 1);
  let clear = ``;
  $(".basket_item").html(clear);
  sessionStorage.setItem("basket", JSON.stringify(basket));
  refresh();
  $("#basketCount").html(basket.length);
  if (basket.length == 0) {
    $("#basketCount").html(clear);
    let html = `
     <p class="basketNull">Sepetiniz Boş</p>`;
    sessionStorage.removeItem("basket");
    $(".basket_item").html(html);
  }
}

function pastOrder() {
  const basket = JSON.parse(sessionStorage.getItem("basket"));
  const pastOrder = [];
  pastOrder.push(basket);
  localStorage.setItem("pastOrder", JSON.stringify(pastOrder));
  var arr = [];
  sessionStorage.removeItem("basket");
  sessionStorage.setItem("basket", arr);
}
