const nextB = document.getElementById("next");
const prevB = document.getElementById("prev");

const list = document.querySelector(".carrousel");
const itemsCar = list.querySelectorAll("img");
const itemCarPreview = document.querySelectorAll(".previews img");

const current = document.getElementById("current");

let active = 0;
nextB.addEventListener("click", () => {
  if (active + 1 > itemsCar.length - 1) {
    active = 0;
  } else {
    active += 1;
  }
  reloadSlider();
});

prevB.addEventListener("click", () => {
  if (active - 1 < 0) {
    active = itemsCar.length - 1;
  } else {
    active -= 1;
  }
  reloadSlider();
});

const reloadSlider = () => {
  itemCarPreview.forEach((i) => i.classList.remove("current"));
  let checkLeft = itemsCar[active].offsetLeft;

  itemCarPreview[active].classList.add("current");
  current.innerText = (active + 1).toLocaleString("fr-FR", {
    minimumIntegerDigits: 2,
  });
  list.style.left = -checkLeft + "px";
};

itemCarPreview.forEach((p, i) => {
  console.log(p);
  p.addEventListener("click", () => {
    active = i;
    reloadSlider();
  });
});
