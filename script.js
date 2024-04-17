let flag = 0;

function controller(x) {
  flag = flag + x;
  slideShow(flag);
}

slideShow(flag);

function slideShow(num) {
  let slides = document.getElementsByClassName("slide");

  if (num == slides.length) {
    flag = 0;
    num = 0;
  }
  if (num < 0) {
    flag = slides.length - 1;
    num = slides.length - 1;
  }

  for (let y of slides) {
    y.style.display = "none";
  }

  slides[num].style.display = "block";
}

/* POST Carousel */
const slideButtons = document.querySelectorAll(" .s-btn");
const cardList = document.querySelector(".slider-wrapper .card-list");

slideButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const direction = button.id === "prev-slide" ? -1 : 1;
    const scrollAmount = cardList.clientWidth * direction;
    cardList.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});
