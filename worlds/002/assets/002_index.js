$(function() {
  $("#modal").fadeIn();
  $("#closeModal , #modalBg").click(function() {
    $("#modal").fadeOut();
  });
});

window.onload = function() {
  var fragment = document.createDocumentFragment();
  var scene = document.querySelector("a-scene");
  var wrapper = document.querySelector("#sphereWrapper");
  for (var i = 0; i < 800; i++) {
    var sphere = document.createElement("a-sphere");
    sphere.setAttribute("position", {
      x: Math.random() * 1 * 2 - 1,
      y: Math.random() * 1 * 2 - 1,
      z: Math.random() * 1 * 2 - 1
    });
    sphere.setAttribute("scale", { x: 0.03, y: 0.03, z: 0.03 });
    sphere.setAttribute("color", "#A3B4BF");
    fragment.appendChild(sphere);
  }
  wrapper.appendChild(fragment);
};
