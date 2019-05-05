window.onload = function() {
  let objColor = ["#EA59F7", "#E046AB", "#FC4E69", "#A946E0", "#8E4EFC"];
  let randomColor = objColor[Math.floor(Math.random() * objColor.length)];
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
    sphere.setAttribute("color", randomColor);
    fragment.appendChild(sphere);
  }
  wrapper.appendChild(fragment);
};
