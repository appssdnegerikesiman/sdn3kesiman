// Navigasi tetap terlihat jika JavaScript tidak tersedia.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigasi');

if (menuButton && navigation) {
  document.documentElement.classList.add('js-ready');
  menuButton.hidden = false;

  function closeMenu() {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }

  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
      closeMenu();
      menuButton.focus();
    }
  });

  window.matchMedia('(min-width: 1001px)').addEventListener('change', closeMenu);
}

const year = document.querySelector('#tahun');
if (year) year.textContent = new Date().getFullYear();
