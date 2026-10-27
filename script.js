// Typing effect
const roles = [
  "Senior .NET Full Stack Developer",
  "C# • .NET Core • React • Angular",
  "Azure & AWS Cloud Developer",
  "Agentic AI Builder"
];
let ri = 0, ci = 0, deleting = false;
const el = document.getElementById("typing");
function tick() {
  const word = roles[ri];
  el.textContent = word.slice(0, ci);
  if (!deleting) {
    if (ci < word.length) { ci++; setTimeout(tick, 55); }
    else { deleting = true; setTimeout(tick, 1600); }
  } else {
    if (ci > 0) { ci--; setTimeout(tick, 28); }
    else { deleting = false; ri = (ri + 1) % roles.length; setTimeout(tick, 300); }
  }
}
tick();

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

// Scroll reveal
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(n => io.observe(n));

// Voice intro
const audio = document.getElementById("introAudio");
const playBtn = document.getElementById("playIntro");
let playing = false;
playBtn.addEventListener("click", () => {
  if (!playing) { audio.play(); playBtn.textContent = "⏸  Pause intro"; }
  else { audio.pause(); playBtn.textContent = "▶   Hear my intro"; }
  playing = !playing;
});
audio.addEventListener("ended", () => { playing = false; playBtn.textContent = "▶   Hear my intro"; });

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Skills filter (Toolkit)
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    document.querySelectorAll(".skill-card").forEach(card => {
      card.classList.toggle("hidden", f !== "all" && card.dataset.cat !== f);
    });
  });
});
