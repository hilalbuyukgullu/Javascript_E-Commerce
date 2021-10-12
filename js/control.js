/* giriş yapıldıysa yukarıdagi üye ol giriş yapı profil ve çıkış olarak değiştirme*/
$(document).ready(function () {
  var basketArr;
  if (
    sessionStorage.getItem("basket") != null ||
    sessionStorage.getItem("basket") != ""
  ) {
    try {
      basketArr = JSON.parse(sessionStorage.getItem("basket"));
    } catch (error) {}
  }

  const local = localStorage.getItem("userId");
  if (local != null) {
    sessionStorage.setItem("userId", local);
  }
  const user = sessionStorage.getItem("userId");
  if (user == null) {
    window.location.href;
    let coding = `
        <div class="nav_profile">
            <i class="bi bi-person"></i>
                <div class="nav_account">
                    <a href="sing_up.html" class="nav_icon" data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop1">Üye Ol</a>
                    <a href="" class="nav_icon" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Giriş Yap</a>
                </div>
                </div>
                <div class="basket nav_profile">
                    <a href="basket.html" class="nav_icon"><i class="bi bi-cart2"></i>Sepetim</a>
                </div>
            </div>
    `;

    $("#userControl").append(coding);
  } else {
    let html = `
        <div class="nav_profile">
        <i class="bi bi-person"></i>
        <div class="nav_account">
            <a href="profile.html" class="nav_icon">Profil</a>
            <a href="" class="nav_icon" id="exit" onclick="return logout()"">Çıkış Yap</a>
        </div>
        </a>
    </div>
    <div class="basket nav_profile">
        <a href="basket.html" class="nav_icon">
            <i class="bi bi-cart2"></i>
            Sepetim <div id="basketCount"> ${
              basketArr != null ? basketArr.length : ""
            }</div>
        </a>
    </div>
    `;
    $("#userControl").append(html);
  }

  //modal control
  $("#loginModal").click(function (e) {
    e.preventDefault();
    $("#staticBackdrop1").modal("hide");
    $("#staticBackdrop").modal("toggle");
  });
  $("#registerModal").click(function (e) {
    e.preventDefault();
    $("#staticBackdrop").modal("hide");
    $("#staticBackdrop1").modal("toggle");
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

function logout() {
  const answer = confirm("Çıkmak istediğine emin misin?");
  if (answer === true) {
    window.location.href = "index.html";
    localStorage.clear();
    sessionStorage.clear();
  }
  return false;
}
