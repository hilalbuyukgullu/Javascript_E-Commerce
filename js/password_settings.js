$(document).ready(function () {
  $("#passwordSettings").submit(function (e) {
    e.preventDefault();
    const user = sessionStorage.getItem("userId");
    const arrSes = JSON.parse(fncAnalyze(user));
    const name = arrSes.userName;
    const surname = arrSes.userSurname;
    const phone = arrSes.userPhone;
    const email = arrSes.userEmail;
    const password = $("#password").val();
    const userId = arrSes.userId;

    const pushObj = {
      ref: "afc1df0bda83d9d5d7e1875e5d9f2f6d",
      userName: name,
      userSurname: surname,
      userPhone: phone,
      userMail: email,
      userPass: password,
      userId: userId,
    };

    const url = "https://www.jsonbulut.com/json/userSettings.php";

    $.ajax({
      type: "get",
      url: url,
      data: pushObj,
      dataType: "json",
      success: function (res) {
        const status = res.user[0].durum;
        const message = res.user[0].mesaj;
        if (status == true) {
          const answer = confirm("Şifreni değiştimek istediğine emin misin?");
          if (answer === true) {
            $.bootstrapGrowl(message, {
              type: "success",
              delay: 2000,
            });
          }
          return false;
        }
      },
    });
  });
});
