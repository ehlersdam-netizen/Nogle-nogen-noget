newRoundBtn.addEventListener("click", () => {
  if (currentRoundNumber < TOTAL_ROUNDS) {
    currentRoundNumber += 1;
    startRound();
  } else {
    remainingPool = shuffle(sentences);
    currentRoundNumber = 1;
    newRoundBtn.textContent = "Ny runde";
    startRound();
  }
});
