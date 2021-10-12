//profil bilgilerini çekme
$(document).ready(function () {
  const profile = sessionStorage.getItem("userId");
  const arrSes = JSON.parse(fncAnalyze(profile));
  if (profile != null) {
    let html = `
    <h6 class="profile_h6">${arrSes.userName}</h6>
    <h6 class="profile_h6">${arrSes.userSurname}</h6>
    <h6 class="profile_h6">${arrSes.userPhone}</h6>
    <h6 class="profile_h6">${arrSes.userEmail}</h6>
    `;

    $("#profile_get").append(html);
  }
});

/* data analyze */
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
