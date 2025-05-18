function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector(".change-color");
// console.log(changeBtn);
const body = document.querySelector("body");
const display = document.querySelector("span.color");

changeBtn.addEventListener("click", () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  display.textContent = color;
});
// console.log(`click`);
