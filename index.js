import "./style.css";

const btnEl = document.querySelector(".dropdown-btn");
const optionEl = document.querySelector(".options");
const anchorEl = document.querySelectorAll("a");
console.log(btnEl);

btnEl.onclick = () => {
  optionEl.style.display = "block";
};

anchorEl.forEach((a) => {
  a.onclick = () => {
    optionEl.style.display = "none";
  };
});
