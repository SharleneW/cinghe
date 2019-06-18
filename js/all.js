$(function() {
  $("#goto").on("goto", function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      2000,
      "easeOutBounce"
    );
    return false;
  });
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 300) {
      $("#goto").fadeIn("fast");
    } else {
      $("#goto")
        .stop()
        .fadeOut("fast");
    }

    $("#main_menu").slideUp(function() {
      $("#sideBar > i")
        .find("[data-fa-i2svg]")
        .toggleClass("fa-bars");
    });

    // if ($(this).scrollTop() > 0) {
    //   $("#navGroup").css({ position: "fixed", top: 0 });
    // } else {
    //   $("#navGroup").css({ position: "static" });
    // }
  });
  $("#sideBar > i").on("click", function() {
    $("#main_menu").slideToggle();
    $(this)
      .find("[data-fa-i2svg]")
      .toggleClass("fa-times")
      .toggleClass("fa-bars");
  });
});
