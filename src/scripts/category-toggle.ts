import $ from "jquery";

$("#show-category").on("click", function () {
  const target = $(this).data("target");
  const icon = $(this).children("iconify-icon");
  if ($(target).hasClass("flex")) {
    $(target).removeClass("flex").addClass("hidden");
    $(icon).removeClass("rotate-90").addClass("rotate-0");
  } else {
    $(target).removeClass("hidden").addClass("flex");
    $(icon).removeClass("rotate-0").addClass("rotate-90");
  }
});
