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

  window.matchMedia('(min-width: 861px)').addEventListener('change', closeMenu);
}

const year = document.querySelector('#tahun');
if (year) year.textContent = new Date().getFullYear();

// Tandai menu halaman aktif pada halaman internal.
if (navigation && window.location.pathname !== '/') {
  const currentPath = window.location.pathname.replace(/index\.html$/, '');
  navigation.querySelectorAll('a').forEach((link) => {
    const linkPath = new URL(link.href, window.location.href).pathname.replace(/index\.html$/, '');
    if (linkPath !== '/' && currentPath.startsWith(linkPath)) {
      navigation.querySelectorAll('[aria-current]').forEach((item) => item.removeAttribute('aria-current'));
      link.setAttribute('aria-current', 'page');
    }
  });
}
