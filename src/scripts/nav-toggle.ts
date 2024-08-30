import $ from "jquery";

const updateIcon = (el: HTMLElement) => {
  const target = $(el).data("target");
  if ($(target).hasClass("-translate-y-[120%]")) {
    $(el).children("iconify-icon").attr("icon", "mingcute:menu-fill");
  } else {
    $(el).children("iconify-icon").attr("icon", "mingcute:close-fill");
  }
};

$(".nav-toggle-btn").each(function () {
  updateIcon(this);
});

$(".nav-toggle-btn").on("click", function () {
  const target = $(this).data("target");
  if ($(target).hasClass("-translate-y-[120%]")) {
    $(target).removeClass("-translate-y-[120%]").addClass("-translate-y-0");
  } else {
    $(target).removeClass("-translate-y-0").addClass("-translate-y-[120%]");
  }

  updateIcon(this);
});
