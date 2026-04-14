const ROUND_SIZE = 10;

const sentences = [
  {
    text: "Har du _________ planer for weekenden, eller skal du bare slappe af hjemme?",
    answer: "nogen",
    explanation: "(nogen – foran flertal i spørgsmål.)"
  },
  {
    text: "Der var ikke _________ elever, der forstod opgaven med det samme.",
    answer: "nogen",
    explanation: "(nogen – foran flertal med ikke.)"
  },
  {
    text: "Jeg har ikke _________ imod at hjælpe dig, hvis du har brug for det.",
    answer: "noget",
    explanation: "(noget – når det står alene om noget ubestemt. På engelsk: “anything”.)"
  },
  {
    text: "Der er sket _________ mærkeligt i opgangen. Der står en cykel midt på trappen.",
    answer: "noget",
    explanation: "(noget – når det står alene om noget ubestemt. På engelsk: “something”.)"
  },
  {
    text: "Vi har desværre ikke _________ mælk tilbage, så du må drikke din kaffe sort.",
    answer: "noget",
    explanation: "(noget – foran utælleligt substantiv.)"
  },
  {
    text: "Skal vi tage _________ med til mødet, fx kaffe eller kage?",
    answer: "noget",
    explanation: "(noget – når det står alene om noget ubestemt: tage noget med.)"
  },
  {
    text: "Han har aldrig haft _________ problemer med naboerne før.",
    answer: "nogen",
    explanation: "(nogen – foran flertal med aldrig: problemer er flertal.)"
  },
  {
    text: "Jeg kan høre _________ ude i køkkenet, men jeg ved ikke, hvem det er.",
    answer: "nogen",
    explanation: "(nogen – når det står alene om en eller flere personer.)"
  },
  {
    text: "Der stod _________ mennesker og ventede foran butikken, før den åbnede.",
    answer: "nogle",
    explanation: "(nogle – foran flertal: mennesker er flertal.)"
  },
  {
    text: "Jeg synes, vi skal lave _________ hyggeligt i aften og se en film.",
    answer: "noget",
    explanation: "(noget – når det står alene om noget ubestemt: På engelsk: “something”.)"
  },
  {
    text: "Hun sagde ikke _________ hele vejen hjem. Hun var helt stille.",
    answer: "noget",
    explanation: "(noget – når det står alene om noget ubestemt: På engelsk: “anything”.)"
  },
  {
    text: "Jeg har ikke fået _________ at spise i dag, så nu er jeg virkelig sulten.",
    answer: "noget",
    explanation: "(noget – når det står alene om noget ubestemt: fast udtryk få noget at spise.)"
  },
  {
    text: "De har aldrig haft _________ bil, så de cykler altid.",
    answer: "nogen",
    explanation: "(nogen – foran n-ord med aldrig: bil er et n-ord.)"
  },
  {
    text: "Kan du se _________, der ligger under bordet?",
    answer: "noget",
    explanation: "(noget – når det står alene om noget ubestemt: På engelsk: “something”.)"
  },
  {
    text: "Hun læser tit _________ spændende romaner på biblioteket.",
    answer: "nogle",
    explanation: "(nogle – foran flertal: romaner er flertal.)"
  },
  {
    text: "Har du _________ bøger om Danmark, jeg kan låne?",
    answer: "nogen",
    explanation: "(nogen – foran flertal i spørgsmål.)"
  },
  {
    text: "Vi har ikke _________ brød tilbage, så jeg må ned i butikken.",
    answer: "noget",
    explanation: "(noget – foran utælleligt substantiv. Her: “brød” som fænomen ligesom “mælk”, ikke fx to franskbrød, som man kan tælle.)"
  },
  {
    text: "Er der _________, der har set mine nøgler?",
    answer: "nogen",
    explanation: "(nogen – når det står alene om en eller flere personer. På engelsk: “anyone” eller “anybody”.)"
  },
  {
    text: "Der er sket _________ godt i dag. Jeg har fået svar fra universitetet.",
    answer: "noget",
    explanation: "(noget – når det står alene om noget ubestemt. På engelsk: “something”.)"
  },
  {
    text: "Han har aldrig haft _________ interesse for sport.",
    answer: "nogen",
    explanation: "(nogen – foran n-ord med aldrig: interesse er et n-ord.)"
  },
  {
    text: "Jeg kan høre _________ grine ude på gangen.",
    answer: "nogen",
    explanation: "(nogen – når det står alene om en eller flere personer.)"
  },
  {
    text: "Hun vil gerne købe _________ nye sko, men hun har ikke råd lige nu.",
    answer: "nogle",
    explanation: "(nogle – foran flertal: sko er flertal.)"
  },
  {
    text: "Skal vi lave _________ sammen i eftermiddag?",
    answer: "noget",
    explanation: "(noget – når det står alene om noget ubestemt. På engelsk: “something”.)"
  },
  {
    text: "Der var ikke _________ gæster til festen, fordi mange var syge.",
    answer: "nogen",
    explanation: "(nogen – foran flertal med “ikke”.)"
  },
  {
    text: "Jeg har ikke _________ imod at vente fem minutter mere.",
    answer: "noget",
    explanation: "(noget – når det står alene om noget ubestemt. På engelsk: “anything”.)"
  },
  {
    text: "Er der _________ problemer med printeren igen?",
    answer: "nogen",
    explanation: "(nogen – foran flertal i spørgsmål.)"
  },
  {
    text: "Jeg så _________ stå og vente ved busstoppestedet i regnen.",
    answer: "nogen",
    explanation: "(nogen – når det står alene om en eller flere personer.)"
  },
  {
    text: "Hun sagde ikke _________ under hele mødet.",
    answer: "noget",
    explanation: "(noget – når det står alene om noget ubestemt. På engelsk: “anything”.)"
  },
  {
    text: "De har ikke _________ børn.",
    answer: "nogen",
    explanation: "(nogen – foran flertal med “ikke”.)"
  },
  {
    text: "Har du _________ tøj, jeg kan låne til festen?",
    answer: "noget",
    explanation: "(noget – foran utælleligt substantiv.)"
  },
  {
    text: "Der stod _________ cykler foran stationen.",
    answer: "nogle",
    explanation: "(nogle – foran flertal.)"
  },
  {
    text: "Jeg har ikke fået _________ søvn i nat, så jeg er meget træt.",
    answer: "noget",
    explanation: "(noget – foran utælleligt substantiv.)"
  },
  {
    text: "Han købte _________ gamle plader på loppemarkedet.",
    answer: "nogle",
    explanation: "(nogle – foran flertal.)"
  },
  {
    text: "Er der _________ i vejen med computeren? Den larmer mærkeligt.",
    answer: "noget",
    explanation: "(noget – når det står alene om noget ubestemt. På engelsk: “something”.)"
  },
  {
    text: "Vi har aldrig haft _________ kat, kun hunde.",
    answer: "nogen",
    explanation: "(nogen – foran n-ord med aldrig.)"
  },
  {
    text: "Jeg vil gerne købe _________ frugt.",
    answer: "noget",
    explanation: "(noget – foran utælleligt substantiv. Her: “frugt” som fænomen ligesom “mælk”, ikke enkelte frugter, som man kan tælle.)"
  },
  {
    text: "Kan du høre _________, der spiller musik ovenpå?",
    answer: "nogen",
    explanation: "(nogen – når det står alene om en eller flere personer.)"
  },
  {
    text: "Der lå _________ stykker papir på bordet, som ingen havde ryddet op.",
    answer: "nogle",
    explanation: "(stykker er flertal.)"
  },
  {
    text: "Hun har aldrig sagt _________ dårligt om sine kolleger.",
    answer: "noget",
    explanation: "(noget – når det står alene om noget ubestemt. På engelsk: “anything”.)"
  },
  {
    text: "Jeg fandt _________ spændende i avisen i morges.",
    answer: "noget",
    explanation: "(noget – når det står alene om noget ubestemt. På engelsk: “something”.)"
  },
  {
    text: "Der kom _________ unge ind på caféen og satte sig ved vinduet.",
    answer: "nogle",
    explanation: "(nogle – foran flertal.)"
  },
  {
    text: "Han har ikke _________ arbejde lige nu, så han søger hele tiden.",
    answer: "noget",
    explanation: "(noget – foran t-ord med “ikke”.)"
  },
  {
    text: "Er der _________ af jer, der ved, hvordan man logger ind?",
    answer: "nogen",
    explanation: "(nogen – når det står alene om en eller flere personer.)"
  },
  {
    text: "Jeg vil gerne have _________ mere suppe, hvis der er mere tilbage.",
    answer: "noget",
    explanation: "(noget – foran utælleligt substantiv.)"
  },
  {
    text: "Vi så _________ flotte fugle nede ved søen i går.",
    answer: "nogle",
    explanation: "(nogle – foran flertal.)"
  },
  {
    text: "Der er ikke _________ sukker i teen, men den smager fint alligevel.",
    answer: "noget",
    explanation: "(noget – foran utælleligt substantiv.)"
  },
  {
    text: "Jeg tror, der står _________ vigtigt i den mail, så læs den lige igen.",
    answer: "noget",
    explanation: "(noget – når det står alene om noget ubestemt. På engelsk: “something”.)"
  }
];

const TOTAL_ROUNDS = Math.ceil(sentences.length / ROUND_SIZE);

const sentenceText = document.getElementById("sentenceText");
const choices = document.getElementById("choices");
const feedbackMessage = document.getElementById("feedbackMessage");
const correctAnswer = document.getElementById("correctAnswer");
const explanation = document.getElementById("explanation");
const nextBtn = document.getElementById("nextBtn");
const newRoundBtn = document.getElementById("newRoundBtn");
const progressInfo = document.getElementById("progressInfo");
const progressBar = document.getElementById("progressBar");
const roundSummary = document.getElementById("roundSummary");
const scoreText = document.getElementById("scoreText");
const roundsLeftText = document.getElementById("roundsLeftText");

let remainingPool = [];
let currentRound = [];
let currentIndex = 0;
let currentRoundNumber = 1;
let correctCount = 0;
let locked = false;

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function prepareGame() {
  remainingPool = shuffle(sentences);
  currentRoundNumber = 1;
  startRound();
}

function startRound() {
  roundSummary.classList.add("hidden");
  newRoundBtn.classList.add("hidden");

  currentRound = remainingPool.splice(0, ROUND_SIZE);
  currentIndex = 0;
  correctCount = 0;
  locked = false;

  renderQuestion();
}

function getCurrentItem() {
  return currentRound[currentIndex];
}

function renderSentenceWithBlank(text) {
  return text.replace("_________", '<span class="blank" aria-hidden="true"></span>');
}

function renderQuestion() {
  const item = getCurrentItem();

  sentenceText.innerHTML = renderSentenceWithBlank(item.text);

  feedbackMessage.textContent = "";
  feedbackMessage.className = "feedback-message";
  correctAnswer.innerHTML = "";
  explanation.innerHTML = "";

  nextBtn.disabled = true;
  locked = false;

  updateMeta();
  resetChoiceButtons();
}

function updateMeta() {
  progressInfo.textContent = `${currentIndex + 1}/${currentRound.length} sætninger`;
  progressBar.style.width = `${((currentIndex + 1) / currentRound.length) * 100}%`;
}

function resetChoiceButtons() {
  document.querySelectorAll(".choice-btn").forEach((btn) => {
    btn.disabled = false;
    btn.classList.remove("correct", "wrong", "neutral-dim");
  });
}

function disableChoices() {
  document.querySelectorAll(".choice-btn").forEach((btn) => {
    btn.disabled = true;
  });
}

function showFeedback(isCorrect, chosenValue) {
  const item = getCurrentItem();

  sentenceText.innerHTML = renderSentenceWithBlank(item.text);

  if (isCorrect) {
    feedbackMessage.textContent = "Rigtigt.";
    feedbackMessage.className = "feedback-message success";
    correctCount += 1;
  } else {
    feedbackMessage.textContent = `Forkert. Du valgte “${chosenValue}”.`;
    feedbackMessage.className = "feedback-message error";
  }

  correctAnswer.innerHTML = `Korrekt svar: <strong>${item.answer}</strong>`;
  explanation.innerHTML = item.explanation;

  nextBtn.disabled = false;
}

function isAnswerCorrect(choice, answer) {
  return choice === answer;
}

choices.addEventListener("click", (event) => {
  const btn = event.target.closest(".choice-btn");
  if (!btn || locked) return;

  const chosen = btn.dataset.choice;
  const item = getCurrentItem();
  const allButtons = document.querySelectorAll(".choice-btn");

  locked = true;
  disableChoices();

  if (isAnswerCorrect(chosen, item.answer)) {
    btn.classList.add("correct");
    allButtons.forEach((button) => {
      if (button !== btn) button.classList.add("neutral-dim");
    });
    showFeedback(true, chosen);
  } else {
    btn.classList.add("wrong");
    allButtons.forEach((button) => {
      if (button.dataset.choice === item.answer) {
        button.classList.add("correct");
      } else if (button !== btn) {
        button.classList.add("neutral-dim");
      }
    });
    showFeedback(false, chosen);
  }
});

nextBtn.addEventListener("click", () => {
  currentIndex += 1;

  if (currentIndex < currentRound.length) {
    renderQuestion();
    return;
  }

  endRound();
});

function endRound() {
  choices.querySelectorAll("button").forEach((btn) => {
    btn.disabled = true;
  });
  nextBtn.disabled = true;

  roundSummary.classList.remove("hidden");
  scoreText.textContent = `Du havde ${correctCount} rigtige ud af ${currentRound.length}.`;

  if (currentRoundNumber < TOTAL_ROUNDS) {
    roundsLeftText.textContent = "Du kan nu starte en ny runde.";
    newRoundBtn.textContent = "Ny runde";
    newRoundBtn.classList.remove("hidden");
  } else {
    roundsLeftText.textContent = "Du har gennemført alle runder.";
    newRoundBtn.textContent = "Start forfra";
    newRoundBtn.classList.remove("hidden");
  }
}

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

prepareGame();
