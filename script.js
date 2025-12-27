document.addEventListener('DOMContentLoaded', () => {
  fetch('/components/navbar.html')
    .then(res => {
      if (!res.ok) throw new Error('Navbar not found');
      return res.text();
    })
    .then(data => {
      document.getElementById('navbar').innerHTML = data;
    })
    .catch(err => console.error(err));
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

