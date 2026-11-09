// Fade-and-rise elements into view as you scroll.
// Elements that enter the screen together appear one after another.
(() => {
  const SELECTORS = [
    // home page
    ".hero-text > *:not([hidden])", ".hero-photo",
    ".section .eyebrow", ".prose p", ".stats .stat",
    ".tl-item", ".card", ".skill-group", ".edu-item",
    ".contact .big", "#contact-blurb", "#email-btn",
    // work pages
    ".work-page > .back", ".work-hero > *", ".work-cover", ".work-results .stat",
    ".work-section", ".coming-soon", ".work-next .eyebrow-plain", ".work-next-item",
  ].join(",");

  const reduced = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced || !("IntersectionObserver" in window)) return; // content simply shows

  const els = document.querySelectorAll(SELECTORS);
  document.documentElement.classList.add("reveal-on");
  els.forEach((el) => el.classList.add("reveal"));

  const done = (el) => {
    // Hand control back to the element's own hover transitions once it has appeared.
    el.classList.remove("reveal", "in");
    el.style.removeProperty("--d");
  };

  const io = new IntersectionObserver((entries) => {
    const visible = entries.filter((e) => e.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left);
    visible.forEach((en, i) => {
      const el = en.target;
      io.unobserve(el);
      el.style.setProperty("--d", `${Math.min(i, 8) * 90}ms`);
      el.addEventListener("transitionend", (ev) => { if (ev.propertyName === "opacity") done(el); }, { once: false });
      requestAnimationFrame(() => el.classList.add("in"));
      setTimeout(() => done(el), 2000); // safety net
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

  els.forEach((el) => io.observe(el));
})();
