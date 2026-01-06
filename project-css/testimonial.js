 
const testimonials = [
  {
   
    name: "Helena Park",
    role: "Product Manager at Flowbox"
  },
  {
    
    name: "Daniel Wong",
    role: "Founder at Startify"
  },
  {
    
    name: "Sarah Mitchell",
    role: "Marketing Lead at BrightTech"
  },
  {
    name: "Alex Johnson",
    role: "CEO at Nexa Digital"
  },
  {
    
    name: "Emily Carter",
    role: "Product Owner at Loopify"
  }
];

let current = 2;

const textEl = document.getElementById("testimonialText");
const nameEl = document.getElementById("testimonialName");
const roleEl = document.getElementById("testimonialRole");
const avatars = document.querySelectorAll(".avatars img");

function updateTestimonial(index) {
  textEl.textContent = testimonials[index].text;
  nameEl.textContent = testimonials[index].name;
  roleEl.textContent = testimonials[index].role;

  avatars.forEach(a => a.classList.remove("active"));
  avatars[index].classList.add("active");
}

document.getElementById("next").onclick = () => {
  current = (current + 1) % testimonials.length;
  updateTestimonial(current);
};

document.getElementById("prev").onclick = () => {
  current = (current - 1 + testimonials.length) % testimonials.length;
  updateTestimonial(current);
};

avatars.forEach(img => {
  img.onclick = () => {
    current = Number(img.dataset.index);
    updateTestimonial(current);
  };
});

updateTestimonial(current);
 