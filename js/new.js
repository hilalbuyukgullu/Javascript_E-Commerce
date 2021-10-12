/*Haberler sayfası haberleri çekme*/

$(document).ready(function () {
  const url = "https://www.jsonbulut.com/json/news.php";

  const pushObj = {
    ref: "afc1df0bda83d9d5d7e1875e5d9f2f6d",
    start: 0,
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
    let news = res.News[0];
    let html = ``;
    for (let i = 0; i < news.Haber_Bilgileri.length; i++) {
      const element = news.Haber_Bilgileri[i];
      html += `
       <div class="news-item">
            <div class="row" id="row">
                 <div class="col-4">
                     <img src="${element.picture}">
                </div>
                <div class="col-8">
                    <h6>${element.title}</h6>
                        <p class="news_p">${element.s_description}
                                <a href="news.html">Daha fazlası için tıklayınız...</a>
                            </p>
                 </div>
        </div>
       `;
    }
    $("#news").html(html);
  }
});
