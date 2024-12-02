// tippy START
tippy("#copyButton", {
  content: "Copied!",
  animation: "fade",
  trigger: "click",
  theme: "variable",
  delay: [0, 800],
});
// tippy END

// copy START
document.getElementById("copyButton").addEventListener("click", () => {
  const copyInput = document.getElementById("copyInput");
  navigator.clipboard.writeText(copyInput.value);
});
// copy END

// header&footer calculation START
const header = document.getElementById("header");
const footer = document.getElementById("footer");

function updateVariableValues() {
  if (header && footer) {
    const headerHeight = header.offsetHeight;
    const footerHeight = footer.offsetHeight;

    document.documentElement.style.setProperty(
      "--header-height",
      `${headerHeight}px`
    );
    document.documentElement.style.setProperty(
      "--footer-height",
      `${footerHeight}px`
    );
  }
}

window.addEventListener("resize", updateVariableValues);
window.addEventListener("load", updateVariableValues);
updateVariableValues();
// header&footer calculation END

// transition START
document
  .getElementById("transition-button")
  .addEventListener("click", () =>
    document.querySelector(".second-container").classList.add("active")
  );
// transition END

// player START
const player = document.getElementById("player");
const soundButton = document.querySelector(".sound-button");
const soundIcon = soundButton.querySelector("img");

function playMusic() {
  if (player.paused) {
    player.play();
    updateIcon(true);
  }
}

function toggleMusic() {
  if (player.paused) {
    player.play();
    updateIcon(true);
  } else {
    player.pause();
    updateIcon(false);
  }
}

function updateIcon(isPlaying) {
  const path = "./assets/images/";
  if (isPlaying) {
    soundIcon.src = path + "audio-icon.svg";
    soundIcon.alt = "Audio Playing Icon";
  } else {
    soundIcon.src = path + "audio-muted-icon.svg";
    soundIcon.alt = "Audio Muted Icon";
  }
}

soundButton.addEventListener("click", toggleMusic);
// player END
