const screenMouse = document.querySelector("#bodyMouse");
document.addEventListener("mousemove", moveTheMouse);
let currentCol = "hsl(100 100% 50%)";
screenMouse.style.setProperty("--bg-col", currentCol);

function moveTheMouse(evt) {
  const y = (evt.clientY / window.innerHeight) * 100;
  currentCol = `hsl(100 100% ${y}%`;
  screenMouse.style.setProperty("--bg-col", currentCol);
}
