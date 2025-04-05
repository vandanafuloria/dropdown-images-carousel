import "./style.css";

const btnEl = document.querySelector(".dropdown-btn");
const optionEl = document.querySelector(".options");
const anchorEl = document.querySelectorAll("a");
console.log(btnEl);

btnEl.onclick = () => {
  optionEl.classList.toggle("show");
  console.log("hai");
};

anchorEl.forEach((a) => {
  a.onclick = () => {
    optionEl.classList.toggle("show");
  };
});
window.addEventListener("click", (e) => {
  if (!btnEl.contains(e.target) && !optionEl.contains(e.target)) {
    optionEl.classList.remove("show");
  }
});
