const stories = [
  // Easy difficulty stories
  {
    difficulty: "easy",
    lines: [
      "The ___1___ jumps over the lazy dog.",
      "It was a ___2___ and sunny day.",
      "The dog did not ___3___ at all.",
      "Birds were singing in the ___4___.",
      "Everyone enjoyed the ___5___ in the park.",
      "At the end, they all felt very ___6___."
    ],
    blanks: ["fox", "bright", "bark", "trees", "picnic", "happy"],
    wordBank: ["fox", "dog", "bright", "dark", "bark", "meow", "trees", "sky", "picnic", "party", "happy", "sad"]
  },
  {
    difficulty: "easy",
    lines: [
      "Anna likes to ___1___ books every evening.",
      "Her favorite ___2___ is about space.",
      "She reads under the ___3___ light.",
      "Sometimes she writes her own ___4___.",
      "Her stories are full of ___5___.",
      "Reading makes her feel very ___6___."
    ],
    blanks: ["read", "book", "lamp", "stories", "adventure", "joyful"],
    wordBank: ["read", "write", "book", "magazine", "lamp", "sun", "stories", "poems", "adventure", "fun", "joyful", "sad"]
  },
  {
    difficulty: "easy",
    lines: [
      "The little boy ___1___ a red balloon.",
      "He walked to the ___2___ near his house.",
      "There were many children playing ___3___.",
      "The sun was shining very ___4___.",
      "They all laughed and had a ___5___.",
      "It was a day full of ___6___."
    ],
    blanks: ["held", "park", "games", "brightly", "fun", "happiness"],
    wordBank: ["held", "threw", "park", "school", "games", "books", "brightly", "darkly", "fun", "sadness", "happiness", "fear"]
  },

  // Medium difficulty stories
  {
    difficulty: "medium",
    lines: [
      "The ___1___ climbed the tall mountain.",
      "It was a ___2___ and windy day.",
      "The climber wore a ___3___ jacket.",
      "He reached the ___4___ at sunset.",
      "The view was ___5___ and breathtaking.",
      "He felt ___6___ and proud."
    ],
    blanks: ["hiker", "cold", "red", "peak", "beautiful", "happy"],
    wordBank: ["hiker", "runner", "cold", "hot", "red", "blue", "peak", "valley", "beautiful", "dark", "happy", "sad"]
  },
  {
    difficulty: "medium",
    lines: [
      "Sara ___1___ a delicious cake.",
      "She baked it for her ___2___.",
      "The cake was ___3___ and sweet.",
      "Everyone ___4___ it happily.",
      "They sang ___5___ songs.",
      "It was a ___6___ celebration."
    ],
    blanks: ["baked", "birthday", "chocolate", "ate", "happy", "fun"],
    wordBank: ["baked", "made", "birthday", "wedding", "chocolate", "vanilla", "ate", "liked", "happy", "sad", "fun", "boring"]
  },
  {
    difficulty: "medium",
    lines: [
      "The ___1___ flew across the sky.",
      "It was a ___2___ bird with bright feathers.",
      "It sang a ___3___ melody.",
      "The children ___4___ to listen.",
      "The garden was full of ___5___.",
      "Everyone felt ___6___ and calm."
    ],
    blanks: ["bird", "colorful", "sweet", "stopped", "flowers", "peaceful"],
    wordBank: ["bird", "plane", "colorful", "dull", "sweet", "loud", "stopped", "ran", "flowers", "trees", "peaceful", "noisy"]
  },

  // Hard difficulty stories
  {
    difficulty: "hard",
    lines: [
      "The teacher ___1___ the lesson clearly.",
      "Students ___2___ attentively.",
      "The classroom was ___3___.",
      "Everyone ___4___ questions.",
      "The topic was ___5___.",
      "It was a ___6___ day of learning."
    ],
    blanks: ["explained", "listened", "quiet", "asked", "interesting", "productive"],
    wordBank: ["explained", "ignored", "listened", "talked", "quiet", "noisy", "asked", "avoided", "interesting", "boring", "productive", "wasteful"]
  },
  {
    difficulty: "hard",
    lines: [
      "The gardener ___1___ the flowers carefully.",
      "She watered the ___2___ plants.",
      "Bees ___3___ around the garden.",
      "The air smelled ___4___.",
      "The garden was full of ___5___.",
      "It was a ___6___ place."
    ],
    blanks: ["tended", "young", "buzzed", "fresh", "colors", "peaceful"],
    wordBank: ["tended", "ignored", "young", "old", "buzzed", "flew", "fresh", "stale", "colors", "weeds", "peaceful", "chaotic"]
  },
  {
    difficulty: "hard",
    lines: [
      "The musician ___1___ a beautiful song.",
      "The audience ___2___ quietly.",
      "The melody was ___3___.",
      "Lights ___4___ softly on stage.",
      "Everyone felt ___5___.",
      "It was a ___6___ performance."
    ],
    blanks: ["played", "listened", "soothing", "glowed", "moved", "memorable"],
    wordBank: ["played", "sang", "listened", "ignored", "soothing", "loud", "glowed", "dimmed", "moved", "bored", "memorable", "forgettable"]
  }
];

// Game state variables
let currentStoryIndex = 0;
let currentLineIndex = 0;
let tokensEarned = 0;
let timer;
let timeLeft = 30;

// DOM elements
const titlePage = document.getElementById('title-page');
const personalInfo = document.getElementById('personal-info');
const questions = document.getElementById('questions');
const storyBuilder = document.getElementById('story-builder');

const startBtn = document.getElementById('start-btn');
const instructionsBtn = document.getElementById('instructions-btn');
const infoForm = document.getElementById('info-form');
const quizForm = document.getElementById('quiz-form');

const storyLineEl = document.getElementById('story-line');
const blankInput = document.getElementById('blank-input');
const wordBankEl = document.getElementById('word-bank');
const feedbackEl = document.getElementById('feedback');
const checkBtn = document.getElementById('check-btn');
const nextBtn = document.getElementById('next-btn');
const completionEl = document.getElementById('completion');
const completionMsg = document.getElementById('completion-msg');
const newStoryBtn = document.getElementById('new-story-btn');
const timerEl = document.getElementById('timer');
const timeLeftEl = document.getElementById('time-left');
const tokenCounter = document.getElementById('token-counter');
const questionCounter = document.getElementById('question-counter');
const totalQuestions = document.getElementById('total-questions');
const progressBar = document.getElementById('progress-bar');

// Modal elements
const instructionsModal = document.getElementById('instructions-modal');
const closeModal = document.querySelector('.close-modal');

// Event Listeners
startBtn.addEventListener('click', () => {
  titlePage.classList.add('hidden');
  personalInfo.classList.remove('hidden');
});

instructionsBtn.addEventListener('click', () => {
  instructionsModal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
  instructionsModal.classList.add('hidden');
});

infoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  saveUserData();
  personalInfo.classList.add('hidden');
  questions.classList.remove('hidden');
});

quizForm.addEventListener('submit', (e) => {
  e.preventDefault();
  questions.classList.add('hidden');
  startStoryBuilder();
});

checkBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', nextLine);
newStoryBtn.addEventListener('click', loadNewStory);

// Load saved user data on page load
window.addEventListener('DOMContentLoaded', loadUserData);

// Game functions
function saveUserData() {
  const userData = {
    name: document.getElementById('name').value,
    age: document.getElementById('age').value,
    email: document.getElementById('email').value,
    country: document.getElementById('country').value,
    language: document.getElementById('language').value,
    difficulty: document.getElementById('difficulty').value,
    timedMode: document.getElementById('timed-mode').checked
  };
  localStorage.setItem('lenzifyUser', JSON.stringify(userData));
}

function loadUserData() {
  const savedData = localStorage.getItem('lenzifyUser');
  if (savedData) {
    const userData = JSON.parse(savedData);
    document.getElementById('name').value = userData.name || '';
    document.getElementById('age').value = userData.age || '';
    document.getElementById('email').value = userData.email || '';
    document.getElementById('country').value = userData.country || '';
    document.getElementById('language').value = userData.language || '';
    document.getElementById('difficulty').value = userData.difficulty || 'medium';
    document.getElementById('timed-mode').checked = userData.timedMode || false;
  }
}

function startStoryBuilder() {
  storyBuilder.classList.remove('hidden');
  tokensEarned = 0;
  currentStoryIndex = 0;
  currentLineIndex = 0;

  const difficulty = document.getElementById('difficulty').value;
  const filteredStories = stories.filter(story => story.difficulty === difficulty);

  if (filteredStories.length > 0) {
    currentStoryIndex = Math.floor(Math.random() * filteredStories.length);
    loadStory(filteredStories[currentStoryIndex]);
  } else {
    loadStory(stories[0]);
  }
}

function loadStory(story) {
  currentLineIndex = 0;
  completionEl.classList.add('hidden');
  checkBtn.disabled = true;
  nextBtn.disabled = true;
  feedbackEl.textContent = '';
  blankInput.value = '';
  blankInput.readOnly = true;

  if (document.getElementById('timed-mode').checked) {
    timerEl.classList.remove('hidden');
    startTimer();
  } else {
    timerEl.classList.add('hidden');
    clearTimer();
  }

  updateProgress();
  renderLine(story);
  renderWordBank(story);
}

function renderLine(story) {
  const line = story.lines[currentLineIndex];
  const blankPattern = new RegExp(`___${currentLineIndex + 1}___`, 'g');
  const displayLine = line.replace(blankPattern, '______');
  storyLineEl.textContent = displayLine;
}

function renderWordBank(story) {
  wordBankEl.innerHTML = '';

  // Shuffle word bank
  const shuffledWords = [...story.wordBank].sort(() => Math.random() - 0.5);

  shuffledWords.forEach(word => {
    const wordBtn = document.createElement('div');
    wordBtn.classList.add('word');
    wordBtn.textContent = word;
    wordBtn.addEventListener('click', () => {
      blankInput.value = word;
      checkBtn.disabled = false;
      feedbackEl.textContent = '';
      nextBtn.disabled = true;

      // Highlight selected word
      document.querySelectorAll('.word').forEach(w => w.classList.remove('selected'));
      wordBtn.classList.add('selected');
      
      // Reset timer if in timed mode
      if (document.getElementById('timed-mode').checked) {
        resetTimer();
      }
    });
    wordBankEl.appendChild(wordBtn);
  });
}

function checkAnswer() {
  const story = stories[currentStoryIndex];
  if (!story || !story.blanks || currentLineIndex >= story.blanks.length) {
    feedbackEl.textContent = 'Error: Story data incomplete';
    feedbackEl.className = 'feedback incorrect';
    return;
  }

  const answer = story.blanks[currentLineIndex];
  const userInput = blankInput.value.trim().toLowerCase();

  if (userInput === answer.toLowerCase()) {
    feedbackEl.textContent = 'Correct!';
    feedbackEl.className = 'feedback correct';
    tokensEarned++;
    playSound('correct-sound');
    checkBtn.disabled = true;
    nextBtn.disabled = false;
    updateProgress();

    // In timed mode, stop timer on correct answer
    if (document.getElementById('timed-mode').checked) {
      clearTimer();
    }
  } else {
    feedbackEl.textContent = 'Incorrect, try again.';
    feedbackEl.className = 'feedback incorrect';
    playSound('wrong-sound');
  }
}

function nextLine() {
  currentLineIndex++;
  const story = stories[currentStoryIndex];

  if (currentLineIndex >= story.lines.length) {
    showCompletion();
  } else {
    blankInput.value = '';
    feedbackEl.textContent = '';
    checkBtn.disabled = true;
    nextBtn.disabled = true;
    renderLine(story);
    renderWordBank(story);
    updateProgress();

    // Reset timer if in timed mode
    if (document.getElementById('timed-mode').checked) {
      resetTimer();
    }
  }
}

function showCompletion() {
  storyLineEl.textContent = '';
  blankInput.value = '';
  blankInput.readOnly = true;
  wordBankEl.innerHTML = '';
  checkBtn.disabled = true;
  nextBtn.disabled = true;
  completionEl.classList.remove('hidden');
  completionMsg.innerHTML = `Great job! You earned <span class="token">${tokensEarned}</span> tokens of appreciation! 🎉`;
  playSound('complete-sound');
  clearTimer();
}

function loadNewStory() {
  let newIndex;
  const difficulty = document.getElementById('difficulty').value;
  const filteredStories = stories.filter(story => story.difficulty === difficulty);

  do {
    newIndex = Math.floor(Math.random() * filteredStories.length);
  } while (filteredStories.length > 1 && newIndex === currentStoryIndex);

  currentStoryIndex = newIndex;
  tokensEarned = 0;
  loadStory(filteredStories[currentStoryIndex]);
}

function updateProgress() {
  const story = stories[currentStoryIndex];
  const progress = (currentLineIndex / story.lines.length) * 100;
  progressBar.style.width = `${progress}%`;
  questionCounter.textContent = currentLineIndex + 1;
  tokenCounter.textContent = tokensEarned;
  totalQuestions.textContent = story.lines.length;
}

// Timer functions
function startTimer() {
  timeLeft = 30;
  timeLeftEl.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timeLeftEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      feedbackEl.textContent = "Time's up! Try another word.";
      feedbackEl.className = "feedback incorrect";
      playSound('wrong-sound');
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  startTimer();
}

function clearTimer() {
  clearInterval(timer);
  timerEl.classList.add('hidden');
}

// Audio functions
function playSound(soundId) {
  const sound = document.getElementById(soundId);
  if (sound) {
    sound.currentTime = 0;
    sound.play().catch(e => console.log('Audio playback failed:', e));
  }
}