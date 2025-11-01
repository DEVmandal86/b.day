// Detect device type and log message
window.addEventListener("load", () => {
  const video = document.getElementById("myVideo");
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    console.log("Mobile device detected");
    // Example: autoplay muted on mobile (if needed)
    video.muted = true;
    video.play().catch(() => {
      console.log("Autoplay prevented by browser");
    });
  } else {
    console.log("Desktop browser detected");
  }
});
