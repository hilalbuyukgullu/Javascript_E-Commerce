$(document).ready(function () {
  const url = "https://www.jsonbulut.com/json/advertisement.php";

  const pushObj = {
    ref: "afc1df0bda83d9d5d7e1875e5d9f2f6d",
    advertisementId: 43,
  };
  $.ajax({
    type: "get",
    url: url,
    data: pushObj,
    dataType: "json",
    success: function (res) {
      reklam(res);
    },
    error: function (err) {
      console.error(err);
    },
  });

  function reklam(res) {
    let html = ``;
    const reklam = res.reklam["0"].reklam;
    html += `
       <a href="${reklam.href}" target="_blank"><img src="${reklam.dosya}" class="reklam_img"></a>`;
    $("#reklam_img").html(html);
  }
});
