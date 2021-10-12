// session or storage
$(document).ready(function () {
  $("#loginForm").submit(function (e) {
    e.preventDefault();

    const email = $("#email").val();
    const password = $("#password").val();
    const remember = $("#remember").val();

    //login form validation
    if (email == "") {
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
      userEmail: email,
      userPass: password,
      face: "no",
    };

    const url = "https://www.jsonbulut.com/json/userLogin.php";

    $.ajax({
      type: "get",
      url: url,
      data: pushObj,
      dataType: "json",
      success: function (res) {
        const status = res.user[0].durum;
        const message = res.user[0].mesaj;
        if (status == true) {
          const item = res.user[0];
          const sessionConvert = JSON.stringify(item.bilgiler);
          const convertDataSess = btoa(fncData(sessionConvert));
          sessionStorage.setItem("userId", convertDataSess);
          if ($("#remember").is(":checked")) {
            localStorage.setItem("userId", convertDataSess);
          }
          //toastr
          $.bootstrapGrowl(message, {
            type: "success",
            delay: 2000,
          });
          const hostname = window.location.href;
          console.log(`hostname`, hostname)
          setTimeout(function () {
            window.location.href = hostname;
          }, 500);
        } else {
          //toastr
          $.bootstrapGrowl(message, {
            type: "danger",
            delay: 2000,
          });
        }
      },
    });

    function fncData(item) {
      let convertTextAscii = "";
      const data = item;
      const dataSplit = data.split(" ").reverse();

      dataSplit.forEach((item) => {
        for (let i = 0; i < item.length; i++) {
          let element = item[i];
          let convert = String.fromCharCode(element.charCodeAt() + i + 1);
          const convertAsci = convert.charCodeAt();
          convertTextAscii += convertAsci + "?";
        }
        convertTextAscii += "_";
      });
      return convertTextAscii;
    }
  });
});
