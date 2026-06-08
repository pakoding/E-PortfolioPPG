document.addEventListener('DOMContentLoaded', () => {

  const loader = document.getElementById('page-loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 600);
  });
  setTimeout(() => {
    if (loader && !loader.classList.contains('hidden')) {
      loader.classList.add('hidden');
    }
  }, 4000);

  const cursor = document.getElementById('custom-cursor');
  if (cursor) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
    document.addEventListener('mousedown', () => cursor.classList.add('active'));
    document.addEventListener('mouseup', () => cursor.classList.remove('active'));
    document.querySelectorAll('a, button, .galeri-item, .gallery-item, .btn-doc, .btn-lihat, .tag, .nav-toggle').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('active'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
    });
  }

  const scrollProgress = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = progress + '%';
  });

  const darkToggle = document.getElementById('dark-mode-toggle');
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', savedTheme);

  darkToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  const nav = document.getElementById('floating-nav');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  const sections = document.querySelectorAll('.section[id]');
  const navItems = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 150;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navItems.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav();

  const tabBtns = document.querySelectorAll('.tab-btn');
  const siklusContainer = document.getElementById('siklus-container');

  const siklusLinks = {
    1: [
      'https://drive.google.com/drive/folders/14VXgkAXQbuSD24CbVAdCPsHrPcJAvMzF?usp=drive_link',
      'https://drive.google.com/drive/folders/1TvBrmCuEbLf-5DaNZ3uDQLPN-C9_zCJI?usp=drive_link',
      'https://drive.google.com/drive/folders/1v24nFOLc_5uMojZ-2E-c_vlio2JhjS7K?usp=drive_link'
    ],
    2: [
      'https://drive.google.com/drive/folders/1c9yBCzsYOPtHiSNenyUAk6eCj1QIIEm-?usp=drive_link',
      'https://drive.google.com/drive/folders/1OK58W3zYt3-7uc1dmG-yu6ulc4I9iEBO?usp=drive_link',
      'https://drive.google.com/drive/folders/1swa8UXow_Hq8ZuB3fExSnPv2TDiktYW_?usp=drive_link'
    ],
    3: [
      'https://drive.google.com/drive/folders/1_dH9al_6aPctooYz1j--xRpDQugvjLo-?usp=drive_link',
      'https://drive.google.com/drive/folders/12sGL7fHO5oSiyo98qF0R3HnBg60claxk?usp=drive_link',
      'https://drive.google.com/drive/folders/1rTfapTRmP_e-zbinpaJQ3azw14LtiLri?usp=drive_link'
    ]
  };

  const pertemuanData = [
    { number: 1, analisis: [
      ['Kendala Penyusunan', '-'],
      ['Adopsi Teori dan Pedagogi', '-'],
      ['Faktor Keberhasilan', '-'],
      ['Adaptasi untuk Situasi Berbeda', '-']
    ]},
    { number: 2, analisis: [
      ['Kendala Penyusunan', '-'],
      ['Adopsi Teori dan Pedagogi', '-'],
      ['Faktor Keberhasilan', '-'],
      ['Adaptasi untuk Situasi Berbeda', '-']
    ]},
    { number: 3, analisis: [
      ['Kendala Penyusunan', '-'],
      ['Adopsi Teori dan Pedagogi', '-'],
      ['Faktor Keberhasilan', '-'],
      ['Adaptasi untuk Situasi Berbeda', '-']
    ]}
  ];

  function buildPertemuanHTML(data, siklusNum) {
    const rows = data.analisis.map(r =>
      `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`
    ).join('');

    const driveLink = siklusLinks[siklusNum][data.number - 1];
    const imgBase = `assets/images/siklus${siklusNum}/pertemuan${data.number}`;

    return `
      <div class="pertemuan">
        <div class="pertemuan-header">
          <h3 class="pertemuan-title">Pertemuan ${data.number}</h3>
          <span class="pertemuan-toggle">+</span>
        </div>
        <div class="pertemuan-body">
          <div class="pertemuan-inner">
            <div class="modul-ajar">
              <div class="modul-header">
                <h4>Modul Ajar</h4>
                <button class="btn-doc" onclick="window.open('${driveLink}', '_blank')">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                  Lihat Dokumen
                </button>
              </div>
            </div>
            <div class="analisis">
              <h4>Analisis Pembelajaran</h4>
              <div class="table-wrapper">
                <table>
                  <thead><tr><th>Komponen</th><th>Deskripsi</th></tr></thead>
                  <tbody>${rows}</tbody>
                </table>
              </div>
            </div>
            <div class="dokumentasi">
              <h4>Dokumentasi</h4>
              <div class="gallery-grid mini">
                <div class="gallery-item">
                  <img src="${imgBase} (1).jpg" alt="Dokumentasi ${data.number}" loading="lazy">
                </div>
                <div class="gallery-item">
                  <img src="${imgBase} (2).jpg" alt="Dokumentasi ${data.number}" loading="lazy">
                </div>
                <div class="gallery-item">
                  <img src="${imgBase} (3).jpg" alt="Dokumentasi ${data.number}" loading="lazy">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function buildSiklusContent(siklusNum) {
    return `<div class="siklus-content${siklusNum === 1 ? ' active' : ''}" data-siklus="${siklusNum}">
      ${pertemuanData.map(p => buildPertemuanHTML({...p}, siklusNum)).join('')}
    </div>`;
  }

  siklusContainer.innerHTML = [1,2,3].map(n => buildSiklusContent(n)).join('');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const siklus = btn.getAttribute('data-siklus');
      document.querySelectorAll('.siklus-content').forEach(content => {
        content.classList.remove('active');
        if (content.getAttribute('data-siklus') === siklus) {
          content.classList.add('active');
        }
      });
    });
  });

  document.querySelectorAll('.pertemuan-header').forEach(header => {
    header.addEventListener('click', () => {
      const pertemuan = header.closest('.pertemuan');
      pertemuan.classList.toggle('open');
    });
  });

  const modalContent = {
    'asal-daerah': {
      title: 'Asal Daerah — Kab. Bulukumba, Desa Ara',
      image: 'assets/images/daerah.webp',
      body: `<p>Saya berasal dari Kab. Bulukumba, tepatnya di Desa Ara. Sebagai seorang calon guru, saya belajar banyak tentang kecerdasan manusia justru dari para orang tua di sana. Keunikan yang paling mendasar dari desa kami adalah "Literasi Tanpa Teks" dalam pembangunan Perahu Pinisi.</p>
<p>Di saat kita sibuk mendiskusikan kurikulum dan cetak biru pendidikan, para Punggawa atau ahli pembuat perahu di Ara telah berabad-abad membangun mahakarya dunia tanpa satu lembar pun gambar teknis atau sketsa di atas kertas. Mereka menggunakan kecerdasan spasial dan kinestetik yang luar biasa, di mana seluruh rumus keseimbangan kapal diwariskan secara lisan dan praktik langsung dari generasi ke generasi. Inilah bentuk pendidikan kontekstual yang paling murni yang pernah saya lihat.</p>
<p>Selain itu, Desa Ara mengajarkan saya tentang harmoni antara manusia dengan alam yang menantang. Kami tidak memiliki hamparan sawah; desa kami berdiri di atas tebing karang yang curam. Namun, keterbatasan geografis itu justru melahirkan kreativitas. Keunikan alam seperti Tebing Apparalang yang dramatis dan Goa Passohara, sebuah goa prasejarah dengan mata air tawar di tengah lingkungan pesisir yang asin, membentuk karakter kami menjadi pribadi yang tangguh dan adaptif.</p>
<p>Namun, yang paling menyentuh bagi saya sebagai pendidik adalah nilai kolaborasi dalam tradisi Annyorong Lopi. Saat sebuah perahu Pinisi akan diluncurkan, kami melepaskan semua ego individu. Ratusan warga akan bergotong-royong mendorong kapal raksasa itu ke laut. Di situ saya belajar bahwa pencapaian besar tidak pernah lahir dari kerja sendirian, melainkan dari derap langkah yang sama dan semangat kebersamaan yang kokoh.</p>
<p>Jadi, bagi saya, Desa Ara bukan hanya destinasi wisata atau sekadar tempat lahir. Ara adalah filosofi hidup tentang bagaimana ketajaman insting, kekuatan tradisi, dan kemuliaan karakter bisa bersatu menciptakan sesuatu yang diakui oleh dunia. Sebagai mahasiswa PPG, semangat "membangun tanpa gambar" itulah yang saya bawa: bahwa pendidikan yang paling efektif kadang tidak perlu tertulis di atas kertas, tetapi cukup dirasakan dan dipraktikkan bersama.</p>`
    },
    'inspirasi': {
      title: 'Inspirasi Menjadi Guru',
      image: 'assets/images/inspirasi.jpg',
      body: `<p>Saya terinspirasi menjadi guru karena saya melihat bagaimana para tetua kami di Ara mentransfer ilmu secara "hidup". Mereka membangun perahu raksasa tanpa selembar kertas gambar teknik pun. Semua ilmu yang rumit itu berpindah dari tangan ke tangan, dari hati ke hati, melalui keteladanan dan praktik langsung.</p>
<p>Hal ini menyadarkan saya bahwa mengajar bukan sekadar memindahkan isi buku ke kepala murid, tapi bagaimana kita mampu menanamkan "insting" dan karakter agar murid bisa membangun "perahu" kehidupan mereka sendiri dengan kokoh. Kehidupan di Desa Ara yang keras, yang dikelilingi tebing karang Apparalang yang curam, juga mengajarkan saya tentang ketangguhan.</p>
<p>Saya melihat bagaimana orang tua kami tidak pernah menyerah pada keterbatasan alam. Filosofi inilah yang ingin saya bawa ke dalam kelas. Saya ingin menjadi guru yang mampu meyakinkan setiap anak didik saya bahwa sekeras apa pun latar belakang mereka, mereka tetap bisa menjadi mahakarya, layaknya kayu kasar yang diubah menjadi perahu megah yang mampu menyeberangi samudera.</p>
<p>Inspirasi terbesar saya juga lahir dari semangat Annyorong Lopi, tradisi gotong royong saat kami mendorong perahu ke laut. Di sana saya belajar bahwa peran guru adalah menjadi bagian dari kekuatan yang mendorong siswa menuju impiannya. Kita tidak bisa bekerja sendirian; pendidikan adalah kerja kolaboratif.</p>
<p>Bagi saya, menjadi guru adalah panggilan untuk melanjutkan warisan leluhur Ara: yaitu mendidik dengan rasa, membangun dengan keteladanan, dan meluncurkan masa depan dengan kebersamaan.</p>`
    }
  };

  const modalOverlay = document.getElementById('modal-overlay');
  const modalTitle = modalOverlay.querySelector('.modal-title');
  const modalBody = modalOverlay.querySelector('.modal-body');
  const modalClose = modalOverlay.querySelector('.modal-close');

  document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-modal');
      const data = modalContent[key];
      if (data) {
        modalTitle.textContent = data.title;
        const imgHtml = data.image ? `<div class="modal-image"><img src="${data.image}" alt="${data.title}"></div>` : '';
        modalBody.innerHTML = imgHtml + data.body;
        modalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  const galeriGrid = document.getElementById('galeri-grid');
  const lihatBtn = document.getElementById('lihat-lainnya');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.querySelector('.lightbox-caption');
  const lightboxClose = document.querySelector('.lightbox-close');
  let isExpanded = false;

  const galleryItems = [
    { src: 'assets/gallery/galeri (1).jpg', title: 'Dokumentasi 1', desc: 'Kegiatan Pembelajaran' },
    { src: 'assets/gallery/galeri (2).jpg', title: 'Dokumentasi 2', desc: 'Kegiatan Pembelajaran' },
    { src: 'assets/gallery/galeri (3).jpg', title: 'Dokumentasi 3', desc: 'Kegiatan Pembelajaran' },
    { src: 'assets/gallery/galeri (4).jpg', title: 'Dokumentasi 4', desc: 'Kegiatan Pembelajaran' },
    { src: 'assets/gallery/galeri (5).jpg', title: 'Dokumentasi 5', desc: 'Kegiatan Pembelajaran' },
    { src: 'assets/gallery/galeri (6).jpg', title: 'Dokumentasi 6', desc: 'Kegiatan Pembelajaran' },
    { src: 'assets/gallery/galeri (7).jpg', title: 'Dokumentasi 7', desc: 'Kegiatan Pembelajaran' },
    { src: 'assets/gallery/galeri (8).jpg', title: 'Dokumentasi 8', desc: 'Kegiatan Pembelajaran' },
    { src: 'assets/gallery/galeri (9).jpg', title: 'Dokumentasi 9', desc: 'Kegiatan Pembelajaran' },
    { src: 'assets/gallery/galeri (10).jpg', title: 'Dokumentasi 10', desc: 'Kegiatan Pembelajaran' },
    { src: 'assets/gallery/galeri (11).jpg', title: 'Dokumentasi 11', desc: 'Kegiatan Pembelajaran' },
    { src: 'assets/gallery/galeri (12).jpg', title: 'Dokumentasi 12', desc: 'Kegiatan Pembelajaran' },
  ];

  function renderGallery(expand) {
    const count = expand ? galleryItems.length : 6;
    galeriGrid.innerHTML = '';
    galleryItems.slice(0, count).forEach((item, i) => {
      const div = document.createElement('div');
      div.className = 'galeri-item glass';
      div.innerHTML = `
        <img src="${item.src}" alt="${item.title}" loading="lazy">
        <div class="overlay"><span>${item.title}</span></div>
      `;
      div.dataset.index = i;
      div.addEventListener('click', () => openLightbox(i));
      galeriGrid.appendChild(div);
    });
    lihatBtn.textContent = expand ? 'Tampilkan Lebih Sedikit' : 'Lihat Lebih Banyak';
  }

  renderGallery(false);

  lihatBtn.addEventListener('click', () => {
    isExpanded = !isExpanded;
    renderGallery(isExpanded);
  });

  function openLightbox(index) {
    const items = isExpanded ? galleryItems : galleryItems.slice(0, 6);
    const item = items[index];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.title;
    lightboxCaption.textContent = `${item.title} — ${item.desc}`;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  function animateCounters() {
    document.querySelectorAll('.progress-fill').forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0%';
      setTimeout(() => { bar.style.width = width; }, 200);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('penilaian') || entry.target.closest('.penilaian')) {
          animateCounters();
        }
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
  });

  document.querySelectorAll('.glass').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  const glassObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        glassObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

  document.querySelectorAll('.glass').forEach(el => glassObserver.observe(el));

  document.querySelectorAll('img[loading]').forEach(img => {
    if (img.getAttribute('loading') !== 'lazy') {
      img.setAttribute('loading', 'lazy');
    }
  });

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    document.querySelectorAll('.floating-shape').forEach((shape, i) => {
      const speed = 0.05 + (i * 0.02);
      shape.style.transform = `translate(${Math.sin(scrollPos * speed) * 20}px, ${Math.cos(scrollPos * speed) * 15}px)`;
    });
  });

});
