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

// Header ringkas, tombol kembali ke atas, dan progres membaca.
const siteHeader = document.querySelector('.site-header');
const backToTop = document.createElement('button');
backToTop.type = 'button';
backToTop.className = 'back-to-top';
backToTop.setAttribute('aria-label', 'Kembali ke bagian atas halaman');
backToTop.innerHTML = '<span aria-hidden="true">↑</span>';
document.body.append(backToTop);

const articleBody = document.querySelector('.article-body');
let readingProgress;
if (articleBody) {
  readingProgress = document.createElement('div');
  readingProgress.className = 'reading-progress';
  readingProgress.setAttribute('aria-hidden', 'true');
  readingProgress.innerHTML = '<i></i>';
  document.body.prepend(readingProgress);
}

function updateScrollUi() {
  const scrollTop = window.scrollY;
  siteHeader?.classList.toggle('is-scrolled', scrollTop > 40);
  backToTop.classList.toggle('is-visible', scrollTop > 500);

  if (readingProgress && articleBody) {
    const start = articleBody.offsetTop - window.innerHeight * 0.35;
    const distance = articleBody.offsetHeight - window.innerHeight * 0.45;
    const value = Math.min(1, Math.max(0, (scrollTop - start) / Math.max(distance, 1)));
    readingProgress.firstElementChild.style.width = `${value * 100}%`;
  }
}

window.addEventListener('scroll', updateScrollUi, { passive: true });
updateScrollUi();
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Hubungkan berita dengan halaman yang relevan.
const relatedByPath = {
  '/berita/imunisasi-bias-2026/': [
    ['Kesiswaan & Budaya Positif', '../../kesiswaan/', 'Lihat dukungan sekolah bagi tumbuh kembang peserta didik.'],
    ['Berita Sekolah', '../', 'Baca kabar dan kegiatan terbaru lainnya.']
  ],
  '/berita/dari-langkah-kecil-menjadi-gerakan/': [
    ['Program GERUSTIK', '../../program/gerustik/', 'Pelajari gerakan lingkungan dan empat aksi sekolah.'],
    ['Kemitraan Sekolah', '../../profil/kemitraan/', 'Lihat kolaborasi yang mendukung program sekolah.']
  ],
  '/berita/sekolah-ekologis-2026-2027/': [
    ['Kemitraan Sekolah', '../../profil/kemitraan/', 'Kenali mitra yang tumbuh bersama sekolah.'],
    ['Program GERUSTIK', '../../program/gerustik/', 'Lihat tindak lanjut kepedulian lingkungan di sekolah.']
  ]
};

const normalizedPath = window.location.pathname.replace(/\/index\.html$/, '/');
const relatedItems = Object.entries(relatedByPath).find(([path]) => normalizedPath.endsWith(path))?.[1];
if (relatedItems && articleBody) {
  const related = document.createElement('section');
  related.className = 'article-related';
  related.innerHTML = `<p>Jelajahi selanjutnya</p><h2>Informasi yang berkaitan</h2><div>${relatedItems.map(([title, href, text]) => `<a href="${href}"><strong>${title}</strong><span>${text}</span><b aria-hidden="true">→</b></a>`).join('')}</div>`;
  articleBody.append(related);
}

// Asisten navigasi SATRIA tersedia di seluruh halaman.
const mainScript = document.querySelector('script[src*="assets/js/main.js"]');
if (mainScript) {
  const siteRoot = new URL('../../', mainScript.src);
  const mascotImage = new URL('../images/mascot/satria-laptop.webp', mainScript.src);
  const helper = document.createElement('div');
  helper.className = 'mascot-helper';
  helper.innerHTML = `<aside class="mascot-helper-panel" id="mascot-helper-panel" hidden><strong>Halo, aku Satria!</strong><small>Aku bantu kamu menemukan informasi sekolah.</small><nav aria-label="Akses cepat SATRIA"><a href="${new URL('profil/', siteRoot)}">Profil sekolah</a><a href="${new URL('program/', siteRoot)}">Program unggulan</a><a href="${new URL('berita/', siteRoot)}">Berita terbaru</a><a href="${new URL('pengumuman/', siteRoot)}">Pengumuman</a><a href="${new URL('kontak/', siteRoot)}">Kontak sekolah</a></nav></aside><button class="mascot-helper-toggle" type="button" aria-expanded="false" aria-controls="mascot-helper-panel"><img src="${mascotImage}" alt="" width="54" height="54"><span>Bantuan SATRIA</span></button>`;
  document.body.append(helper);
  const helperButton = helper.querySelector('.mascot-helper-toggle');
  const helperPanel = helper.querySelector('.mascot-helper-panel');
  const closeHelper = () => { helperPanel.hidden = true; helperButton.setAttribute('aria-expanded', 'false'); };
  helperButton.addEventListener('click', () => {
    const willOpen = helperPanel.hidden;
    helperPanel.hidden = !willOpen;
    helperButton.setAttribute('aria-expanded', String(willOpen));
  });
  document.addEventListener('click', (event) => { if (!helper.contains(event.target)) closeHelper(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeHelper(); });
}
