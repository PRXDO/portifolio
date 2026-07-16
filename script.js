const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');
const currentYear = document.getElementById('currentYear');

// Padrão escuro ativado para portfolio tech
const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'light') {
  root.classList.add('light');
}

themeToggle?.addEventListener('click', () => {
  root.classList.toggle('light');
  localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
});

mobileMenuButton?.addEventListener('click', () => {
  const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
  mobileMenuButton.setAttribute('aria-expanded', String(!isExpanded));
  mobileMenu?.classList.toggle('is-open');
});

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    mobileMenuButton?.setAttribute('aria-expanded', 'false');
  });
});

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

window.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});