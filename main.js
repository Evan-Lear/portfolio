(() => {
  const C = window.CONTENT || {};
  const $ = (s) => document.querySelector(s);
  const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const hide = (id) => { const el = document.getElementById(id); if (el) el.style.display = "none"; };
  const has = (a) => Array.isArray(a) && a.length > 0;

  document.title = C.name ? `${C.name} — ${C.role || "Portfolio"}` : "Portfolio";
  document.querySelector('meta[name="description"]').content = C.tagline || "";

  const initials = (C.name || "?").split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  $("#logo").textContent = initials;
  $("#name").textContent = C.name || "";
  $("#role").textContent = [C.role, C.location].filter(Boolean).join(" · ");
  $("#tagline").textContent = C.tagline || "";
  if (C.available) $("#badge").hidden = false;
  if (C.resumeUrl) { const r = $("#resume"); r.href = C.resumeUrl; r.hidden = false; }

  $("#socials").innerHTML = (C.socials || []).map((s) =>
    `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`).join("");

  $("#photo-wrap").innerHTML = C.photo
    ? `<img src="${esc(C.photo)}" alt="${esc(C.name)}" />`
    : `<div class="avatar">${esc(initials)}</div>`;

  // About
  if (has(C.about)) $("#about-text").innerHTML = C.about.map((p) => `<p>${esc(p)}</p>`).join("");
  if (has(C.stats)) $("#stats").innerHTML = C.stats.map((s) =>
    `<div class="stat"><div class="stat-v">${esc(s.value)}</div><div class="stat-l">${esc(s.label)}</div></div>`).join("");
  if (!has(C.about) && !has(C.stats)) hide("about");

  // Experience
  if (has(C.experience)) {
    $("#timeline").innerHTML = C.experience.map((e) => `
      <li class="tl-item reveal">
        <div class="tl-period">${esc(e.period)}</div>
        <div class="tl-body">
          <h3>${esc(e.title)} <span class="at">@ ${e.url ? `<a href="${esc(e.url)}" target="_blank" rel="noopener">${esc(e.company)}</a>` : esc(e.company)}</span></h3>
          ${has(e.points) ? `<ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}
        </div>
      </li>`).join("");
  } else hide("experience");

  // Projects
  if (has(C.projects)) {
    $("#project-grid").innerHTML = C.projects.map((p, i) => `
      <article class="card reveal">
        ${p.image ? `<img class="card-img" src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy" />`
                  : `<div class="card-img placeholder" style="--h:${(i * 67) % 360}">${esc(p.title)}</div>`}
        <div class="card-body">
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.description)}</p>
          ${has(p.tags) ? `<ul class="tags">${p.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
          <div class="card-links">
            ${p.link ? `<a href="${esc(p.link)}" target="_blank" rel="noopener">Live ↗</a>` : ""}
            ${p.repo ? `<a href="${esc(p.repo)}" target="_blank" rel="noopener">Code ↗</a>` : ""}
          </div>
        </div>
      </article>`).join("");
  } else hide("projects");

  // Skills
  if (has(C.skills)) {
    $("#skill-groups").innerHTML = C.skills.map((g) => `
      <div class="skill-group reveal"><h4>${esc(g.group)}</h4>
        <ul class="tags">${(g.items || []).map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>`).join("");
  } else hide("skills");

  // Education
  if (has(C.education)) {
    $("#edu").innerHTML = C.education.map((e) => `
      <div class="edu-item reveal"><div><strong>${esc(e.school)}</strong><div class="muted">${esc(e.degree)}</div></div>
      <div class="muted mono">${esc(e.period)}</div></div>`).join("");
  } else hide("education");

  // Contact
  $("#contact-blurb").textContent = C.contactBlurb || "";
  if (C.email) { const b = $("#email-btn"); b.href = `mailto:${C.email}`; b.textContent = C.email; }
  else $("#email-btn").style.display = "none";

  $("#footer-name").textContent = `© ${C.name || ""}`;
  $("#year").textContent = new Date().getFullYear();

  // Theme toggle
  $("#theme").addEventListener("click", () => {
    const root = document.documentElement;
    const cur = root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = cur === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // Reveal on scroll
  const io = "IntersectionObserver" in window ? new IntersectionObserver((ents) => ents.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  }), { threshold: 0.1 }) : null;
  document.querySelectorAll(".reveal").forEach((el) => io ? io.observe(el) : el.classList.add("in"));
})();
