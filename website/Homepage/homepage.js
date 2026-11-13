const imageSizeToggle = document.getElementById("image-size-toggle");
const featuredImages = document.getElementById("featured-artists");
const featuredControls = document.querySelector(".featured-controls");

if (!imageSizeToggle || !featuredImages || !featuredControls) {
  throw new Error("The featured-image size control could not be initialized.");
}

imageSizeToggle.addEventListener("click", () => {
  const isCompact = featuredImages.classList.toggle("is-compact");
  imageSizeToggle.setAttribute("aria-pressed", String(isCompact));
});

featuredControls.hidden = false;
