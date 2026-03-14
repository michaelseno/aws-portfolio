(function () {
  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const btn = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  const closeNav = () => {
    if (!nav || !btn) return;
    nav.classList.remove("nav--open");
    btn.setAttribute("aria-expanded", "false");
  };

  if (btn && nav) {
    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("nav--open");
      btn.setAttribute("aria-expanded", String(open));
    });

    document.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (!nav.classList.contains("nav--open")) return;
      if (target.closest(".nav") || target.closest(".nav-toggle")) return;
      closeNav();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeNav();
      }
    });
  }

  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const targetId = a.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const el = document.querySelector(targetId);
      if (!el) return;

      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });

      closeNav();
    });
  });

  // Active section hint on desktop nav
  const sections = ["about", "approach", "projects", "contact"];
  const navLinks = sections
    .map((id) => document.querySelector(`.nav a[href="#${id}"]`))
    .filter(Boolean);

  if ("IntersectionObserver" in window && navLinks.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          const link = document.querySelector(`.nav a[href="#${id}"]`);
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach((item) => item.classList.remove("is-active"));
            link.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }
})();
