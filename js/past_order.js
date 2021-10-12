$(document).ready(function () {
  $("#orderForm").click(function (e) {
    e.preventDefault();
    const userId = sessionStorage.getItem("userId");
    const analyze = JSON.parse(fncAnalyze(userId));
    const customerId = analyze.userId;
    const pastOrder = JSON.parse(localStorage.getItem("pastOrder"));

    for (let i = 0; i < pastOrder[0].length; i++) {
      const productId = pastOrder[0][i].productId;
      const url = "https://www.jsonbulut.com/json/orderForm.php";
      const pushObj = {
        ref: "afc1df0bda83d9d5d7e1875e5d9f2f6d",
        customerId: customerId,
        productId: productId,
        html: "12",
      };
      console.log("pushObj", pushObj);
      $.ajax({
        type: "get",
        url: url,
        cache: false,
        data: pushObj,
        dataType: "json",
        success: function (res) {
          let html = ` <div class="alert alert-success" role="alert">
          Siparişiniz başarı ile ulaşmıştır. Sipariş detayları için profil kısmında bulunan <a href="past_order.html">ayarlara</a> giriniz.
                </div>`;
          $(".basket_item").html(html);
          $("#basketCount").html("");
        },
      });
    }
  });

  function fncAnalyze(item) {
    let analyzeText = "";
    const data = item;
    let convertTextAscii = atob(data);
    const dataSplit = convertTextAscii.split("_").reverse();
    dataSplit.forEach((item) => {
      let ascii = item.split("?");
      for (let i = 0; i < ascii.length; i++) {
        let element = ascii[i];
        if (element != "") {
          const convertChar = String.fromCharCode(element);
          let convert = String.fromCharCode(convertChar.charCodeAt() - (i + 1));
          analyzeText += convert;
        }
      }
      analyzeText += " ";
    });
    return analyzeText;
  }
});
