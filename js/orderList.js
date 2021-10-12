$(document).ready(function () {
  const userId = sessionStorage.getItem("userId");
  const analyze = JSON.parse(fncAnalyze(userId));
  const musterilerID = analyze.userId;
  const pastOrder = JSON.parse(localStorage.getItem("pastOrder"));
  const url = "https://www.jsonbulut.com/json/orderList.php";
  const pushObj = {
    ref: "afc1df0bda83d9d5d7e1875e5d9f2f6d",
    musterilerID: musterilerID,
  };

  $.ajax({
    type: "get",
    url: url,
    cache: false,
    data: pushObj,
    dataType: "json",
    success: function (res) {
      orderList(res);
    },
  });

  function orderList(res) {
    const data = res.orderList[0];
    let html = ``;
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      html += `
              <div class="row">
                  <div class="col-12 col-sm-1"></div>
                      <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                          <img src="${element.normal}" class="pastImg"/>
                      </div>
                      <div class="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                          <h5>${element.kisa_aciklama}</h5>
                          <p>${element.fiyat} TL</p>
                          <p>${element.eklenme_tarihi}</p>
                          <p>${element.aciklama.slice(0, 100)}...</p>
                      </div>
                  </div>
              </div>
              `;
    }
    $(".pastItem").append(html);
  }

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
