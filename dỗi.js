const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container.yes");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn"); // Nút No
const noBtn = document.querySelector(".js-no-btn");   // Nút Yes (né)

noBtn.addEventListener("mouseover", () => {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;
  const padding = 20; // cách mép cho dễ thương

  const maxX = window.innerWidth - btnWidth - padding;
  const maxY = window.innerHeight - btnHeight - padding;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  noBtn.style.position = "fixed"; // Giúp tránh cuộn và bay ra ngoài
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult?.play?.();
  }, 3000);
});
