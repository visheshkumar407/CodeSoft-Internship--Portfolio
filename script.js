const typingText = ["Creative Developer", "UI/UX Explorer", "React Coder"];
let i = 0, j = 0, isDeleting = false;

function type() {
  const target = document.querySelector('.typing');
  if (!target) return;
  let word = typingText[i];
  target.textContent = isDeleting
    ? word.substring(0, j--)
    : word.substring(0, j++);

  if (j === word.length + 1) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (j === 0 && isDeleting) {
    isDeleting = false;
    i = (i + 1) % typingText.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}
type();

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    const trigger = window.innerHeight * 0.85;
    if (top < trigger) el.classList.add("show");
  });
});
