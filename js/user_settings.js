$(document).ready(function () {
  const user = sessionStorage.getItem("userId");
  const arrSes = JSON.parse(fncAnalyze(user));
  $("#userName").val(arrSes.userName);
  $("#userSurname").val(arrSes.userSurname);
  $("#userPhone").val(arrSes.userPhone);
  $("#email").val(arrSes.userEmail);
  // $("#password").val("***");

  //register form submit
  $("#userSettings").submit(function (e) {
    e.preventDefault();
    const user = sessionStorage.getItem("userId");
    const arrSes = JSON.parse(fncAnalyze(user));
    const name = $("#userName").val();
    const surname = $("#userSurname").val();
    const phone = $("#userPhone").val();
    const email = $("#email").val();
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
        const face = "0";
        const faceID = ":";
        const setObj = {
          userId: userId,
          userName: name,
          userSurname: surname,
          userEmail: email,
          userPhone: phone,
          face: face,
          faceID: faceID,
        };
        const objParse = setObj;
        const convertDataSess = btoa(fncData(objParse));
        // sessionStorage.removeItem("userId");
        if (status == true) {
          const answer = confirm(
            "Bilgilerini değiştimek istediğine emin misin?"
          );
          if (answer === true) {
            $.bootstrapGrowl(message, {
              type: "success",
              delay: 2000,
            });
          }
          sessionStorage.setItem("userId", convertDataSess);
          if (localStorage.getItem("userId") != null) {
            localStorage.removeItem("userId");
            localStorage.getItem("userId", convertDataSess);
          }
        } else {
          $.bootstrapGrowl(message, {
            type: "danger",
            delay: 2000,
          });
        }
      },
    });

    function fncData(item) {
      let convertTextAscii = "";
      const data = JSON.stringify(item);
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
            let convert = String.fromCharCode(
              convertChar.charCodeAt() - (i + 1)
            );
            analyzeText += convert;
          }
        }
        analyzeText += " ";
      });
      return analyzeText;
    }
  });
});
