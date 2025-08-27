function copyEmail() {
  //in later renditions of this website, add much more js functionality aswell as usage of different frameworks
  navigator.clipboard.writeText("kabirvirk1206@gmail.com");
  const el = document.getElementById("copied");
  if (!el) return;
  el.style.opacity = 1;
  setTimeout(() => (el.style.opacity = 0), 1100);
}

// set the current year in footer (stays updated)
document.getElementById("year").textContent = new Date().getFullYear();

