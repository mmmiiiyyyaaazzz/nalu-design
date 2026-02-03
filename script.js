document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     Page Top Button
     ========================= */
  const pageTop = document.getElementById("page-top");

  if (pageTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        pageTop.classList.add("is-show");
      } else {
        pageTop.classList.remove("is-show");
      }
    });

    pageTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* =========================
     Works Scroll Animation
     ========================= */
  const worksItems = document.querySelectorAll(".works-item");

  if (worksItems.length) {
    const worksObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            worksObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    worksItems.forEach(item => worksObserver.observe(item));
  }

  /* =========================
     Fade-in Elements (.js-fade)
     ========================= */
  const fadeTargets = document.querySelectorAll(".js-fade");

  if (fadeTargets.length) {
    const fadeObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    fadeTargets.forEach(el => fadeObserver.observe(el));
  }

  /* =========================
     h2 Section Title Animation
     ========================= */
  const headings = document.querySelectorAll("h2");

  if (headings.length) {
    const headingObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            headingObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.8 }
    );

    headings.forEach(h2 => headingObserver.observe(h2));
  }

  /* =========================
     Service h3 Underline Shine
     ========================= */
  const service = document.querySelector(".service");
  const serviceCards = document.querySelectorAll(".service-card");

  if (service && serviceCards.length) {
    let fired = false;

    const serviceObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !fired) {
            fired = true;

            serviceCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("is-active");
              }, index * 500); // ← きらーんの間隔
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    serviceObserver.observe(service);
  }

});
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const overlay = document.querySelector('.overlay-menu');

  if (!hamburger || !overlay) return;

  hamburger.addEventListener('click', () => {
  const isOpen = overlay.classList.toggle('is-open');
  hamburger.classList.toggle('is-open'); // ← これ
  hamburger.setAttribute('aria-expanded', isOpen);
  overlay.setAttribute('aria-hidden', !isOpen);
});


  // 背景クリックで閉じる
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      overlay.setAttribute('aria-hidden', 'true');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const loading = document.getElementById('loading');
  if (!loading) return;

  const hasLoaded = sessionStorage.getItem('hasLoaded');

  if (hasLoaded) {
    // 2回目以降：即非表示
    loading.style.display = 'none';
  } else {
    // 初回：ローディングを表示
    sessionStorage.setItem('hasLoaded', 'true');
  }
});
