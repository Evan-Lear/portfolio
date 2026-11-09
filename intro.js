// Opening animation for the home page. The CSS runs the whole timeline on its own
// (so the overlay always clears even if this script fails); this file fills in the
// name, handles click/key to skip, and tells reveal.js when the curtain lifts.
(() => {
  const root = document.documentElement;
  const intro = document.getElementById("intro");
  if (!intro) return;
  if (!root.classList.contains("intro-active")) { intro.remove(); return; }

  const C = window.CONTENT || {};
  const name = C.name || "";
  const initials = name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  intro.querySelector(".intro-mark").textContent = initials;
  intro.querySelector(".intro-name").innerHTML = [...name].map((ch, i) =>
    ch === " " ? '<span class="sp"> </span>'
               : `<span class="ch" style="--i:${i}">${ch.replace(/[&<>"']/g, "")}</span>`).join("");
  intro.querySelector(".intro-role").textContent = C.role || "";
  intro.setAttribute("aria-label", `${name} — ${C.role || ""}`);

  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    root.classList.remove("intro-active");
    intro.remove();
    removeEventListener("keydown", skip);
  };
  const lifted = () => document.dispatchEvent(new Event("intro:done"));

  const skip = () => {
    if (finished) return;
    intro.classList.add("intro-skip");
    lifted();
    setTimeout(finish, 350);
  };
  intro.addEventListener("click", skip);
  addEventListener("keydown", skip);

  // Curtain starts lifting at 1.75s; let the hero cascade in as it moves.
  const t1 = setTimeout(lifted, 1850);
  setTimeout(() => { clearTimeout(t1); finish(); }, 2900);
})();
