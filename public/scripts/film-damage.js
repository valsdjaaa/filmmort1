document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const FRAME_COUNT = 20;
  const PATH = "/film/";
  const PREFIX = "filmflick_";
  const EXT = ".jpg";
  const PAD = 5;
  const FPS = 14;

  function pad(n) {
    return String(n).padStart(PAD, "0");
  }

  const frames = Array.from(
    { length: FRAME_COUNT },
    (_, i) => `${PATH}${PREFIX}${pad(i)}${EXT}`
  );

  let last = -1;

  function tick() {
    let i;
    do {
      i = Math.floor(Math.random() * frames.length);
    } while (i === last);

    last = i;
    header.style.backgroundImage = `url("${frames[i]}")`;

    // 25% šanse za horizontalni flip
    header.style.transform =
      Math.random() < 0.25 ? "scaleX(-1)" : "scaleX(1)";
  }

  setInterval(tick, 1000 / FPS);
  tick();
});
