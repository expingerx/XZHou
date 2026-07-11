const menuButton = document.querySelector("[data-menu-button]");
const navigation = document.querySelector("[data-navigation]");

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function setMenu(open) {
  if (!menuButton || !navigation) return;

  navigation.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.innerHTML = open
    ? '<i data-lucide="x" aria-hidden="true"></i><span class="sr-only">Close navigation</span>'
    : '<i data-lucide="menu" aria-hidden="true"></i><span class="sr-only">Open navigation</span>';
  refreshIcons();
}

menuButton?.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 720) setMenu(false);
});

refreshIcons();
