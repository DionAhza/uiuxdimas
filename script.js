fetch("components/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  });
document.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    document.querySelectorAll(".menu li")
      .forEach(li => li.classList.remove("active"));
    e.target.classList.add("active");
  }
});
//////// jangan diubah yang diatas ////////
// Hover efek follow mouse di circle
const circle = document.querySelector(".circle");

circle.addEventListener("mouseenter", () => {
  circle.style.animationPlayState = "paused";
});

circle.addEventListener("mouseleave", () => {
  circle.style.animationPlayState = "running";
});

