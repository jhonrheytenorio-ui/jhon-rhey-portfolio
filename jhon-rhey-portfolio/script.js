/* =====================================================
   Jhon Rhey Tenorio – Portfolio Scripts
   Plain JavaScript, no libraries needed.
   ===================================================== */

document.documentElement.classList.add("js");

/* ---------- 1. Mobile menu ---------- */
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

function setMenu(open) {
  navMenu.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

navToggle.addEventListener("click", () => {
  setMenu(!navMenu.classList.contains("open"));
});

// Close the menu after choosing a link, or when pressing Escape
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});

/* ---------- 2. Header shadow on scroll ---------- */
const header = document.querySelector(".site-header");
function onScroll() {
  header.classList.toggle("scrolled", window.scrollY > 10);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- 3. Highlight the current section in the nav ---------- */
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");

if ("IntersectionObserver" in window) {
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
          });
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => spy.observe(s));

  /* ---------- 4. Fade-in on scroll ---------- */
  const reveal = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));
} else {
  // Very old browsers: just show everything
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
}

/* ---------- 5. Project details modal ---------- */
// To edit project details, change the text below.
const projects = {
  budgettrack: {
    title: "JPCS BudgetTrack",
    subtitle: "A Web-Based Budget Monitoring and Expense Transparency System",
    description:
      "A proposed web-based system designed to help the Junior Philippine Computer Society – Lipa Chapter manage budget allocations, record expenses, monitor remaining funds, and improve financial transparency for organizational activities.",
    areas: ["Web Development", "System Analysis and Design", "Budget Monitoring", "Database Management"],
  },
  campusconnect: {
    title: "Campus Connect",
    subtitle: "A Sustainable Marketplace and Service Platform",
    description:
      "A proposed campus platform designed to encourage students to reuse, share, exchange, or give away items while helping them discover useful student services.",
    areas: ["Web Development", "User Interface Design", "Database Management", "Sustainability and Circular Economy"],
  },
};

const modal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");
let lastTrigger = null;

document.querySelectorAll("[data-project]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const data = projects[btn.dataset.project];
    if (!data) return;

    document.getElementById("modalTitle").textContent = data.title;
    document.getElementById("modalSubtitle").textContent = data.subtitle;
    document.getElementById("modalDescription").textContent = data.description;

    const list = document.getElementById("modalAreas");
    list.innerHTML = "";
    data.areas.forEach((area) => {
      const li = document.createElement("li");
      li.textContent = area;
      list.appendChild(li);
    });

    lastTrigger = btn;
    if (typeof modal.showModal === "function") {
      modal.showModal();
    } else {
      modal.setAttribute("open", "");
    }
  });
});

function closeModal() {
  if (typeof modal.close === "function") modal.close();
  else modal.removeAttribute("open");
  if (lastTrigger) lastTrigger.focus();
}

modalClose.addEventListener("click", closeModal);
// Click on the dark backdrop closes the modal too
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

/* ---------- 6. Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
