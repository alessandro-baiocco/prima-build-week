const stars = document.querySelectorAll(".stars .star");
console.log(stars);

stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    console.log(index1);
    stars.forEach((star, index2) => {
      index1 >= index2 ? star.classList.remove("disabled") : star.classList.add("disabled");
    });
  });
});