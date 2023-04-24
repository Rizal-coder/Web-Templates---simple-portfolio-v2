(function () {
  $(document).ready(function () {
    // event saat link navbar di klik
    $(".page-scroll").on("click", function (e) {
      // Ambil href
      let tujuan = $(this).attr("href");
      // Tangkap elemen yang bersangkutan
      let elemenTujuan = $(tujuan);
      //   jalankan animasi
      $("html").animate(
        {
          scrollTop: Math.round(elemenTujuan.offset().top) - 40,
        },
        500,
        "easeInOutExpo"
      );
      // nonaktifkan aksi default link
      e.preventDefault();
    });
  });
})();

// Overlay image gallery
(function () {
  $(document).ready(function () {
    // event saat tombol close diklik
    $(".overlay-thumb span").on("click", function () {
      // Toggle class : d-none
      $(".overlay-img").toggleClass("d-none");
      // remove atrribute img : src
      $(".overlay-thumb img").removeAttr("src");
    });

    // event saat link foto diklik
    $(".img-gallery a").on("click", function (e) {
      // Ambil attribute img : src yang diklik
      let imgSrc = $(this).find("img").attr("src");
      // Toggle class : d-none
      $(".overlay-img").toggleClass("d-none");
      // Tambahkan attribute img : src yang diklik
      $(".overlay-thumb img").attr("src", imgSrc);
      // nonaktifkan aksi default link
      e.preventDefault();
    });
  });
})();

// Parallax
// About
$(window).on("load", function () {
  $(".about .card").each(function (i) {
    setTimeout(function () {
      $(".about .card").eq(i).addClass("cMuncul");
    }, 500 * (i + 1));
  });
});
(function () {
  // Fungsi scroll
  $(window).scroll(function () {
    // Jumbotron
    let wScroll = $(document).scrollTop();
    $(".jumbotron img").css({
      transform: `translate(0, ${wScroll / 4}%)`,
    });
    $(".jumbotron h1").css({
      transform: `translate(0, ${wScroll / 2}%)`,
    });
    $(".jumbotron p").css({
      transform: `translate(0, ${wScroll / 1.2}%)`,
    });

    // Portfolio
    // console.log(wScroll);
    if (wScroll > $(".portfolio").offset().top - 180) {
      $(".portfolio img").each(function (i) {
        setTimeout(function () {
          $(".portfolio img").eq(i).addClass("muncul");
        }, 300 * (i + 1));
      });
    }
  });
})();
