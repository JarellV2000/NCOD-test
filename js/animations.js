
document.addEventListener("DOMContentLoaded", () => {
  // Reveal elements smoothly as the page loads.
  const revealItems = document.querySelectorAll(
    ".hero, .mode-card, .play-panel, .preview-card, .checklist"
  );

  revealItems.forEach((element, index) => {
    element.classList.add("reveal");
    element.style.animationDelay = `${Math.min(index * 70, 420)}ms`;
  });

  // Add a small press animation to buttons.
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("pointerdown", () => {
      button.style.transform = "scale(0.97)";
    });

    const reset = () => {
      button.style.transform = "";
    };

    button.addEventListener("pointerup", reset);
    button.addEventListener("pointercancel", reset);
    button.addEventListener("pointerleave", reset);
  });

  // Respect accessibility settings that reduce motion.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.classList.add("reduced-motion");
  }
});
