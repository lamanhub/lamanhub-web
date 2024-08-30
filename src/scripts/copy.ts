import $ from "jquery";

$(".copy-btn").on("click", function () {
  navigator.clipboard.writeText($(this).data("copy"));
});
