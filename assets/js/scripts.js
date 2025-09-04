const colorReference = document.querySelector(".character:first-child");

function getCurrentColor() {
  const computedStyle = window.getComputedStyle(colorReference);
  return computedStyle.color;
}

const CANVAS_SIZE = 32;

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.querySelector("canvas");
  const favicon = document.querySelector("link[rel*=icon]");
  const context = canvas.getContext("2d");

  canvas.width = CANVAS_SIZE;
  canvas.height = CANVAS_SIZE;

  function drawFavicon() {
    context.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    const color = getCurrentColor();
    context.beginPath();
    context.arc(
      CANVAS_SIZE / 2,
      CANVAS_SIZE / 2,
      CANVAS_SIZE / 2,
      0,
      2 * Math.PI
    );
    context.fillStyle = color;
    context.fill();
    context.closePath();
    const dataURL = canvas.toDataURL("image/png");
    favicon.href = dataURL;
  }

  function animate() {
    drawFavicon();
    requestAnimationFrame(animate);
  }

  animate();
});
