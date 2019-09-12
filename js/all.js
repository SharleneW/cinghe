$(function() {
  $(".scrollTop").on("click", function(e) {
    e.preventDefault();
    var target = $(this).attr("href");
    var targetPos = $(target).offset().top;
    $("html, body").animate({ scrollTop: targetPos }, 1000);
  });

  $("#goto").on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, 600);
  });

  $(window).on("scroll", function() {
    var scrollTop = $(this).scrollTop();
    // console.log(scrollTop);

    $(".scrollTop").each(function() {
      var target = $(this).attr("href");
      var targetPos = $(target).offset().top;
      var targetHeight = $(target).outerHeight();
      // console.log(targetPos, targetHeight);
      console.log(targetPos + targetHeight > scrollTop);
      if (targetPos - 1 <= scrollTop && targetPos + targetHeight > scrollTop) {
        $(".scrollTop").removeClass("active");
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });

    // 滾動時 頁面距離頂部 > 300 go-to-top 淡出 否則 淡入
    if (scrollTop > 300) {
      $("#goto").fadeIn("fast");
    } else {
      $("#goto")
        .stop()
        .fadeOut("fast");
    }

    // width < 768 滾動時 navigation 隱藏
    if ($(this).width() < 768) {
      $("#main_menu").slideUp(function() {
        $("#sideBar > i")
          .find("[data-fa-i2svg]")
          .toggleClass("fa-bars");
      });
    }

    // navigation 滾動時固定在頂部
    if (scrollTop > 0) {
      $("#navGroup").addClass("fixed");
    } else {
      $("#navGroup").removeClass("fixed");
    }
  });

  // width < 768 navigation 隱藏或打開
  // $("#sideBar").on("click", function() {
  //   $("#main_menu").slideToggle();
  //   $("#sideBar > i")
  //     .find("[data-fa-i2svg]")
  //     .toggleClass("fa-bars")
  //     .toggleClass("fa-times");
  // });

  // // 偵測瀏覽器寬度變化，當width > 768 navigation 打開 否則 關閉
  // $(window).on("resize", function() {
  //   if ($(this).width() > 768) {
  //     $("#main_menu").css("display", "block");
  //   } else {
  //     $("#main_menu").css("display", "none");
  //     $("#sideBar > i")
  //       .find("[data-fa-i2svg]")
  //       .toggleClass("fa-bars");
  //   }
  // });
});
