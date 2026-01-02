
// Simple slider controls
const slides = document.querySelectorAll('.slide');
let idx = 0;
const show = (i) => {
  slides.forEach(s => s.classList.remove('active'));
  slides[i].classList.add('active');
};
document.getElementById('prev').addEventListener('click', () => {
  idx = (idx - 1 + slides.length) % slides.length;
  show(idx);
});
document.getElementById('next').addEventListener('click', () => {
  idx = (idx + 1) % slides.length;
  show(idx);
});
// auto-slide every 5s
setInterval(() => { idx = (idx + 1) % slides.length; show(idx); }, 5000);

// Simple search (demo)
document.getElementById('searchBtn').addEventListener('click', () => {
  const q = document.getElementById('searchInput').value.trim();
  if(q) alert('Search for: ' + q + '\n(This is a demo. Integrate real search as needed.)');
});



const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  if(navLinks.style.display === "flex"){
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
  }
});


/* ✅ Scroll to top button */
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 350) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ✅ Animation on scroll (Left / Right / Footer) */
function scrollAnimate() {
  document.querySelectorAll('.box, .footer-animate').forEach(el => {
      const pos = el.getBoundingClientRect().top;
      if (pos < window.innerHeight - 80) {
          el.classList.add("show-animate");
      }
  });
}
window.addEventListener("scroll", scrollAnimate);
scrollAnimate();
