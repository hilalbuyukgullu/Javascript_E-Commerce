$(document).ready(function () {
  //register form submit
  $("#registerForm").submit(function (e) {
    e.preventDefault();

    const name = $("#userName").val();
    const surname = $("#userSurname").val();
    const phone = $("#userPhone").val();
    const email = $("#emailRegis").val();
    const password = $("#passwordRegis").val();

    //login form validation
    if (name == "") {
      $.bootstrapGrowl("İsim boş bırakılamaz.", {
        type: "danger",
        delay: 2000,
      });
      return true;
    } else if (surname == "") {
      $.bootstrapGrowl("Soyisim boş bırakılamaz.", {
        type: "danger",
        delay: 2000,
      });
      return true;
    } else if (phone == "") {
      $.bootstrapGrowl("Telefon boş bırakılamaz.", {
        type: "danger",
        delay: 2000,
      });
      return true;
    } else if (email == "") {
      $.bootstrapGrowl("E-mail boş bırakılamaz.", {
        type: "danger",
        delay: 2000,
      });
      return true;
    } else if (password == "") {
      $.bootstrapGrowl("Şifre boş bırakılamaz.", {
        type: "danger",
        delay: 2000,
      });
      return true;
    }

    //

    const pushObj = {
      ref: "afc1df0bda83d9d5d7e1875e5d9f2f6d",
      userName: name,
      userSurname: surname,
      userPhone: phone,
      userMail: email,
      userPass: password,
    };

    const url = "https://www.jsonbulut.com/json/userRegister.php";
    $.ajax({
      type: "get",
      url: url,
      data: pushObj,
      dataType: "json",
      success: function (res) {
        const status = res.user[0].durum;
        const message = res.user[0].mesaj;
        if (status === true) {
          $.bootstrapGrowl(message, {
            type: "success",
            delay: 2000,
          });
          $("#userName").val("");
          $("#userSurname").val("");
          $("#userPhone").val("");
          $("#emailRegis").val("");
          $("#passwordRegis").val("");
          //modal
          $("#staticBackdrop1").modal("hide");
          $("#staticBackdrop").modal("toggle");
        } else {
          $.bootstrapGrowl(message, {
            type: "danger",
            delay: 2000,
          });
        }
      },
    });
  });
});
