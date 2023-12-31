import "./style.css";
import Alpine from "alpinejs";

Alpine.data("app", () => ({
  open: false,
}));

window.Alpine = Alpine;
Alpine.start();

$(function () {
  const a = $(".dropdown-toggle");
  var o = "dropdown";
  a.on("click", function (t) {
    t.preventDefault();
    var n = $(this).data(o);
    $("#" + n).toggle(),
      a.each(function () {
        var t = $(this).data(o);
        t !== n && $("#" + t).hide();
      });
  }),
    $(document).on("click", function (t) {
      t.stopPropagation(),
        0 === a.has(t.target).length &&
          a.each(function () {
            var t = $(this).data(o);
            $("#" + t).hide();
          });
    }),
    $(document).on("keyup", function (t) {
      t = t.key;
      ("Escape" !== t && "Esc" !== t && 27 !== t) ||
        a.each(function () {
          var t = $(this).data(o);
          $("#" + t).hide();
        });
    });
});
