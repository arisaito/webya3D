$(function() {
  console.log("modal test");
  $("#modal").fadeIn();
  $("#closeModal , #modalBg").click(function() {
    $("#modal").fadeOut();
  });
});
