document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox") as HTMLElement;
  const lightboxImg = lightbox.querySelector(
    ".lightbox-image"
  ) as HTMLImageElement;
  const closeBtn = lightbox.querySelector(".close") as HTMLElement;
  const thumbnails = Array.from(
    document.querySelectorAll<HTMLImageElement>(".thumbnail")
  );

  thumbnails.forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.remove("hidden");
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.classList.add("hidden");
    lightboxImg.src = "";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add("hidden");
      lightboxImg.src = "";
    }
  });
});
