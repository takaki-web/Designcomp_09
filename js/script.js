// ページ内スクロール
$('a[href^="#"]').click(function () {
  const speed = 600;
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? "html" : href);
  let position = target.offset().top;
  $("body,html").animate({ scrollTop: position }, speed, "swing");
  return false;
});

// ハンバーガーメニュー
$(function () {
  $(".js-p-index-fv__burger-btn").click(function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $(".js-p-index-fv__burger-menu").addClass("active");
      $("body").addClass("fixed");
    } else {
      $(".js-p-index-fv__burger-menu").removeClass("active");
      $("body").removeClass("fixed");
    }
  });
});
// ページ内リンクに飛ぶ時にリンククリックしたらハンバーガーメニューが閉じるように
$(".p-index-fv__burger-menu-link,.p-index-fv__burger-menu-link a").on("click", function (event) {
  $(".js-p-index-fv__burger-btn").trigger("click");
});
