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

  for (var i = 0; i < 100; i++) {
    var sphere = document.createElement("a-sphere");
    sphere.setAttribute("position", {
      x: Math.random() * 20 - 10,
      y: Math.random() * 4,
      z: Math.random() * 20 - 10
    });
    sphere.setAttribute("scale", { x: 0.5, y: 0.5, z: 0.5 });
    sphere.setAttribute("material", {
      metalness: 1
    });
  }
  wrapper.appendChild(fragment);
};
