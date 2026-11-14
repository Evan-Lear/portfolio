(() => {
  const C = window.CONTENT || {};
  const $ = (s) => document.querySelector(s);
  const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const has = (a) => Array.isArray(a) && a.length > 0;
  const asset = (p = "") => (/^(https?:|\/|data:)/.test(p) ? p : "/" + p);

  // Slug from /work/<slug>, or ?slug=<slug> as a fallback
  const fromPath = location.pathname.match(/\/work\/([^/]+)\/?$/);
  const slug = decodeURIComponent((fromPath && fromPath[1]) || new URLSearchParams(location.search).get("slug") || "");
  const projects = C.projects || [];
  const idx = projects.findIndex((p) => p.slug === slug);
  const p = projects[idx];

  $("#footer-name").textContent = `© ${C.name || ""}`;
  $("#year").textContent = new Date().getFullYear();

  const main = $("#work");
  if (!p) {
    document.title = `Not found — ${C.name || "Portfolio"}`;
    main.innerHTML = `
      <a class="back" href="/#projects">← All work</a>
      <h1 class="work-title">Page not found</h1>
      <p class="muted">That work category doesn't exist. <a href="/#projects">See all work</a>.</p>`;
  } else {
    const pg = p.page || {};
    const sections = (pg.sections || []).filter((s) => s && (s.heading || s.body || has(s.images)));
    document.title = `${p.title} — ${C.name || "Portfolio"}`;
    document.querySelector('meta[name="description"]').content = p.description || "";

    const others = projects.filter((x, i) => i !== idx && x.slug);
    main.innerHTML = `
      <a class="back" href="/#projects">← All work</a>
      <header class="work-hero">
        <p class="eyebrow-plain">Selected Work</p>
        <h1 class="work-title">${esc(p.title)}</h1>
        <p class="work-lede">${esc(pg.intro || p.description || "")}</p>
        ${has(p.tags) ? `<ul class="tags">${p.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
      </header>

      ${p.image ? `<img class="work-cover" src="${esc(asset(p.image))}" alt="${esc(p.title)}" />`
                : `<div class="work-cover placeholder${p.metric ? " metric" : ""}" style="--h:${30 - Math.max(idx, 0) * 7}">${esc(p.metric || p.title)}</div>`}

      ${has(pg.results) ? `<div class="work-results">${pg.results.map((r) =>
        `<div class="stat"><div class="stat-v">${esc(r.value)}</div><div class="stat-l">${esc(r.label)}</div></div>`).join("")}</div>` : ""}

      ${sections.length ? sections.map((s) => `
        <section class="work-section">
          ${s.heading ? `<h2>${esc(s.heading)}</h2>` : ""}
          ${s.body ? String(s.body).split(/\n\s*\n/).map((para) => `<p>${esc(para)}</p>`).join("") : ""}
          ${has(s.images) ? `<div class="work-gallery">${s.images.map((src) =>
            `<a href="${esc(asset(src))}" target="_blank" rel="noopener"><img src="${esc(asset(src))}" alt="${esc(s.heading || p.title)}" loading="lazy" /></a>`).join("")}</div>` : ""}
          ${s.link && s.link.url ? `<p><a class="text-link" href="${esc(s.link.url)}" target="_blank" rel="noopener">${esc(s.link.label || "View")} ↗</a></p>` : ""}
        </section>`).join("")
      : `<div class="coming-soon">
          <h2>Case studies coming soon</h2>
          <p class="muted">I'm putting together the full story behind this work: the goals, what I made and the results. In the meantime, I'm happy to walk you through it.</p>
          ${C.email ? `<a class="btn primary" href="mailto:${esc(C.email)}">Get in touch</a>` : ""}
        </div>`}

      ${others.length ? `
        <nav class="work-next">
          <p class="eyebrow-plain">More work</p>
          <div class="work-next-grid">${others.map((o) => `
            <a class="work-next-item" href="/work/${encodeURIComponent(o.slug)}">
              <span class="work-next-title">${esc(o.title)}</span><span aria-hidden="true">→</span>
            </a>`).join("")}</div>
        </nav>` : ""}`;
  }

  $("#theme").addEventListener("click", () => {
    const root = document.documentElement;
    const cur = root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = cur === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
})();
