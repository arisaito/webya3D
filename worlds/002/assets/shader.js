AFRAME.registerShader("red-shader", {
  vertexShader: [
    "varying vec2 vUV;",
    "void main(void) {",
    "  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);",
    "  vUV = uv;",
    "}"
  ].join("\n"),

  fragmentShader: [
    "void main(void) {",
    "    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); //(Red, Green, Blue, Alpha)",
    "}"
  ].join("\n")
});
