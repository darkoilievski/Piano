window.addEventListener("keydown", (e) => {
  const pressedKey = e.key;
  let keyLetter = document.querySelector(
    `div[data-key="${pressedKey}"]`
  );
  if (!keyLetter) return;
  let audio = document.querySelector(
    `audio[data-key="${pressedKey}"]`
  );

  audio.currentTime = 0;
  audio.play();
  console.log(keyLetter);

  keyLetter.classList.add("active");

  audio.addEventListener("ended", (e) => {
    keyLetter.classList.remove("active");
  });
});
