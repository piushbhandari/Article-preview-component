const openBtn = document.querySelector(".openbtn");
const popup = document.querySelector(".content__popup");
openBtn.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.toggle("open");
});
