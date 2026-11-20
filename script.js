// Set current footer year automatically
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Keep Figma links in sync if you update the hero button href in index.html
const heroFigma = document.querySelector('.hero-actions a[href*="figma.com"], .hero-actions .btn-secondary');
const contactFigma = document.getElementById("figmaContactLink");

if (heroFigma && contactFigma && heroFigma.getAttribute("href") !== "#") {
  contactFigma.href = heroFigma.href;
  contactFigma.textContent = "View Figma Prototype ↗";
}