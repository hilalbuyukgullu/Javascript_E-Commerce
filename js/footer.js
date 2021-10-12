let html =` <div class="row">
<div class="col-1 col-sm-1  col-xl-1"></div>
<div class="col-12 col-sm-2  col-xl-2">
    <ul class="ul">
        <li class="footer_title">flowers.com</a></li>
        <li><a href="index.html">Anasayfa</a></li>
        <li><a href="about.html">Hakkımızda</a></li>
        <li><a href="news.html">Haberler</a></li>
        <li><a href="contact.html">İletişim</a></li>
    </ul>
</div>
<div class="col-12 col-sm-2 col-xl-3">
    <ul class="ul">
        <li class="footer_title">Faydalı Bilgiler</a></li>
        <li><a href="news.html">Çiçek Bakımı</a></li>
        <li><a href="news.html">Çiçeklerin Anlamı</a></li>
        <li><a href="news.html">Mevsimlere Göre Çiçekler</a></li>
        <li><a href="news.html">Çiçek Eşliğinde Notlar</a></li>
    </ul>
</div>
<div class="col-12 col-sm-2 col-xl-2">
    <ul class="ul ">
        <li class="footer_title">Bizi trakip edin</a></li>
        <li><a href="https://tr-tr.facebook.com/" target="_blank" class="social_icon"> <i
                    class="fab fa-facebook"></i>Facebook</a></li>
        <li><a href="https://twitter.com/" target="_blank" class="social_icon"> <i
                    class="fab fa-twitter"></i>Twitter</a></li>
        <li><a href="https://youtube.com/" target="_blank" class="social_icon"> <i
                    class="fab fa-youtube"></i>Youtube</a></li>
    </ul>
</div>

<div class="col-12 col-sm-5 col-xl-4">
    <form class="footer_form">
        <p class="footer_mail">Kampanyalardan haberdar olmak için mail adresinizi burakabilirsiniz.</p>
        <div class="d-flex">
            <input type="text" class="footer_input" placeholder="Email address">
            <button class="btn btn-green" type="submit"><i class="bi bi-envelope-fill"></i></button>
        </div>
    </form>
</div>
<div class="col-12  col-sm-1 col-xl-1"></div>
</div>
<div class="row">
<div class="copyright">
    <div class="col-12">
        Copyright © 2021 Flowers İnternet Hizmetleri A.Ş
    </div>
</div>
</div>`

$(".footer").append(html)