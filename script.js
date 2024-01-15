const downElement = document.querySelector(".apps-btn-wrapper");
const downContainer = document.querySelector(".down-wrapper");

downElement.addEventListener("click", () => {
  downContainer.classList.toggle("hide");
});
