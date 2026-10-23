
const gameModes = [
  {
    name: "Friends",
    icon: "👥",
    description: "Fun, real & freaky",
    questions: [
      "What's a secret you've never told this group?",
      "Who's most likely to get caught lying?",
      "What's the wildest thing you've done for attention?"
    ]
  },
  {
    name: "Talking Stage",
    icon: "💬",
    description: "Light, flirty & real",
    questions: [
      "What's your biggest green flag?",
      "Have you ever entertained two people at once?",
      "What's an instant turn-off for you?"
    ]
  },
  {
    name: "Couples",
    icon: "❤️",
    description: "Deep, flirty & real talk",
    questions: [
      "What made you fall for your partner?",
      "What's something you wish your partner understood?",
      "What's your favorite memory together?"
    ]
  },
  {
    name: "Confessionals Pt 2",
    icon: "🤫",
    description: "Anonymous confessions & guesses",
    questions: [
      "Get ready for the confession round."
    ]
  },
  {
    name: "Who's Most Likely To",
    icon: "🔥",
    description: "Vote with your friends",
    questions: [
      "Who's most likely to become famous?",
      "Who's most likely to text their ex?",
      "Who's most likely to start drama?"
    ]
  },
  {
    name: "Dare or Drink",
    icon: "🥤",
    description: "Take the dare or pass",
    questions: [
      "Do your best celebrity impression.",
      "Let the group pick your next profile picture.",
      "Tell the group an embarrassing story."
    ]
  }
];

let currentMode = null;
let currentQuestionIndex = 0;

function startGameMode(modeName) {
  currentMode = gameModes.find(mode => mode.name === modeName);
  currentQuestionIndex = 0;

  if (!currentMode) return;

  const title = document.getElementById("game-title");
  const question = document.getElementById("game-question");
  const panel = document.getElementById("game-panel");

  if (title) title.textContent = currentMode.name;
  if (question) question.textContent = currentMode.questions[0];
  if (panel) panel.hidden = false;

  document.getElementById("modes")?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function nextQuestion() {
  if (!currentMode) return;

  currentQuestionIndex =
    (currentQuestionIndex + 1) % currentMode.questions.length;

  const question = document.getElementById("game-question");
  if (question) {
    question.textContent = currentMode.questions[currentQuestionIndex];
  }
}

function exitGameMode() {
  currentMode = null;
  currentQuestionIndex = 0;

  const panel = document.getElementById("game-panel");
  if (panel) panel.hidden = true;
}

window.startGameMode = startGameMode;
window.nextQuestion = nextQuestion;
window.exitGameMode = exitGameMode;
