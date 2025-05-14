const stories = [
  // Original 3 stories
  {
    lines: [
      "The ___1___ jumps over the lazy dog.",
      "It was a ___2___ and sunny day.",
      "The dog did not ___3___ at all.",
      "Birds were singing in the ___4___.",
      "Everyone enjoyed the ___5___ in the park.",
      "At the end, they all felt very ___6___.",
    ],
    blanks: ["fox", "bright", "bark", "trees", "picnic", "happy"],
    wordBank: [
      "fox",
      "dog",
      "bright",
      "dark",
      "bark",
      "meow",
      "trees",
      "sky",
      "picnic",
      "party",
      "happy",
      "sad",
    ],
  },
  {
    lines: [
      "Anna likes to ___1___ books every evening.",
      "Her favorite ___2___ is about space.",
      "She reads under the ___3___ light.",
      "Sometimes she writes her own ___4___.",
      "Her stories are full of ___5___.",
      "Reading makes her feel very ___6___.",
    ],
    blanks: ["read", "book", "lamp", "stories", "adventure", "joyful"],
    wordBank: [
      "read",
      "write",
      "book",
      "magazine",
      "lamp",
      "sun",
      "stories",
      "poems",
      "adventure",
      "fun",
      "joyful",
      "sad",
    ],
  },
  {
    lines: [
      "The little boy ___1___ a red balloon.",
      "He walked to the ___2___ near his house.",
      "There were many children playing ___3___.",
      "The sun was shining very ___4___.",
      "They all laughed and had a ___5___.",
      "It was a day full of ___6___.",
    ],
    blanks: ["held", "park", "games", "brightly", "fun", "happiness"],
    wordBank: [
      "held",
      "threw",
      "park",
      "school",
      "games",
      "books",
      "brightly",
      "darkly",
      "fun",
      "sadness",
      "happiness",
      "fear",
    ],
  },

  // 15 new stories
  {
    lines: [
      "The ___1___ climbed the tall mountain.",
      "It was a ___2___ and windy day.",
      "The climber wore a ___3___ jacket.",
      "He reached the ___4___ at sunset.",
      "The view was ___5___ and breathtaking.",
      "He felt ___6___ and proud.",
    ],
    blanks: ["hiker", "cold", "red", "peak", "beautiful", "happy"],
    wordBank: [
      "hiker",
      "runner",
      "cold",
      "hot",
      "red",
      "blue",
      "peak",
      "valley",
      "beautiful",
      "dark",
      "happy",
      "sad",
    ],
  },
  {
    lines: [
      "Sara ___1___ a delicious cake.",
      "She baked it for her ___2___.",
      "The cake was ___3___ and sweet.",
      "Everyone ___4___ it happily.",
      "They sang ___5___ songs.",
      "It was a ___6___ celebration.",
    ],
    blanks: ["baked", "birthday", "chocolate", "ate", "happy", "fun"],
    wordBank: [
      "baked",
      "made",
      "birthday",
      "wedding",
      "chocolate",
      "vanilla",
      "ate",
      "liked",
      "happy",
      "sad",
      "fun",
      "boring",
    ],
  },
  {
    lines: [
      "The ___1___ flew across the sky.",
      "It was a ___2___ bird with bright feathers.",
      "It sang a ___3___ melody.",
      "The children ___4___ to listen.",
      "The garden was full of ___5___.",
      "Everyone felt ___6___ and calm.",
    ],
    blanks: ["bird", "colorful", "sweet", "stopped", "flowers", "peaceful"],
    wordBank: [
      "bird",
      "plane",
      "colorful",
      "dull",
      "sweet",
      "loud",
      "stopped",
      "ran",
      "flowers",
      "trees",
      "peaceful",
      "noisy",
    ],
  },
  {
    lines: [
      "Tom and Jerry ___1___ a race.",
      "They ran ___2___ through the field.",
      "Tom was ___3___ but Jerry was faster.",
      "They reached the ___4___ together.",
      "Both were ___5___ and laughed.",
      "It was a ___6___ day.",
    ],
    blanks: ["had", "quickly", "tired", "finish", "happy", "fun"],
    wordBank: [
      "had",
      "won",
      "quickly",
      "slowly",
      "tired",
      "energetic",
      "finish",
      "start",
      "happy",
      "sad",
      "fun",
      "boring",
    ],
  },
  {
    lines: [
      "The ___1___ shines brightly at night.",
      "Stars ___2___ around it.",
      "The sky is ___3___ and clear.",
      "People ___4___ at the beauty.",
      "It inspires ___5___ and dreams.",
      "Night is ___6___ and silent.",
    ],
    blanks: ["moon", "twinkle", "dark", "gaze", "hope", "peaceful"],
    wordBank: [
      "moon",
      "sun",
      "twinkle",
      "shine",
      "dark",
      "bright",
      "gaze",
      "run",
      "hope",
      "fear",
      "peaceful",
      "loud",
    ],
  },
  {
    lines: [
      "The farmer ___1___ the fields every morning.",
      "He uses a ___2___ to plow the land.",
      "The crops are ___3___ and healthy.",
      "Birds ___4___ above the farm.",
      "The sun ___5___ warmly.",
      "The farmer feels ___6___.",
    ],
    blanks: ["tends", "tractor", "green", "fly", "shines", "content"],
    wordBank: [
      "tends",
      "waters",
      "tractor",
      "plow",
      "green",
      "dry",
      "fly",
      "walk",
      "shines",
      "rains",
      "content",
      "sad",
    ],
  },
  {
    lines: [
      "Lucy ___1___ her bike to school.",
      "The road was ___2___ and smooth.",
      "She wore a ___3___ helmet.",
      "Friends ___4___ her along the way.",
      "They talked about their ___5___.",
      "It was a ___6___ morning.",
    ],
    blanks: ["rides", "flat", "blue", "joined", "plans", "bright"],
    wordBank: [
      "rides",
      "walks",
      "flat",
      "hilly",
      "blue",
      "red",
      "joined",
      "ignored",
      "plans",
      "games",
      "bright",
      "dark",
    ],
  },
  {
    lines: [
      "The cat ___1___ on the warm windowsill.",
      "It watched the ___2___ outside.",
      "Birds ___3___ and chirped.",
      "The sun ___4___ softly.",
      "The house was ___5___ and cozy.",
      "The cat felt ___6___.",
    ],
    blanks: ["slept", "garden", "flew", "shone", "quiet", "relaxed"],
    wordBank: [
      "slept",
      "jumped",
      "garden",
      "street",
      "flew",
      "ran",
      "shone",
      "hid",
      "quiet",
      "noisy",
      "relaxed",
      "anxious",
    ],
  },
  {
    lines: [
      "The children ___1___ in the playground.",
      "They ___2___ on swings and slides.",
      "Laughter ___3___ in the air.",
      "Parents ___4___ nearby.",
      "The day was ___5___ and sunny.",
      "Everyone felt ___6___.",
    ],
    blanks: ["played", "swung", "echoed", "watched", "warm", "joyful"],
    wordBank: [
      "played",
      "slept",
      "swung",
      "ran",
      "echoed",
      "faded",
      "watched",
      "ignored",
      "warm",
      "cold",
      "joyful",
      "sad",
    ],
  },
  {
    lines: [
      "The chef ___1___ a new recipe.",
      "He used ___2___ ingredients.",
      "The dish smelled ___3___.",
      "Guests ___4___ to taste it.",
      "They said it was ___5___.",
      "The chef felt ___6___.",
    ],
    blanks: ["created", "fresh", "delicious", "waited", "amazing", "proud"],
    wordBank: [
      "created",
      "copied",
      "fresh",
      "old",
      "delicious",
      "bad",
      "waited",
      "left",
      "amazing",
      "boring",
      "proud",
      "sad",
    ],
  },
  {
    lines: [
      "The artist ___1___ a beautiful painting.",
      "She used ___2___ colors.",
      "The canvas was ___3___.",
      "Visitors ___4___ her work.",
      "They felt ___5___ and inspired.",
      "The gallery was ___6___.",
    ],
    blanks: ["painted", "vibrant", "large", "admired", "moved", "bright"],
    wordBank: [
      "painted",
      "sketched",
      "vibrant",
      "dull",
      "large",
      "small",
      "admired",
      "ignored",
      "moved",
      "bored",
      "bright",
      "dark",
    ],
  },
  {
    lines: [
      "The dog ___1___ happily in the yard.",
      "It chased the ___2___ ball.",
      "The children ___3___ with joy.",
      "The sun ___4___ high in the sky.",
      "The grass was ___5___.",
      "It was a ___6___ afternoon.",
    ],
    blanks: ["played", "red", "laughed", "shone", "green", "perfect"],
    wordBank: [
      "played",
      "slept",
      "red",
      "blue",
      "laughed",
      "cried",
      "shone",
      "hid",
      "green",
      "dry",
      "perfect",
      "bad",
    ],
  },
  {
    lines: [
      "The teacher ___1___ the lesson clearly.",
      "Students ___2___ attentively.",
      "The classroom was ___3___.",
      "Everyone ___4___ questions.",
      "The topic was ___5___.",
      "It was a ___6___ day of learning.",
    ],
    blanks: [
      "explained",
      "listened",
      "quiet",
      "asked",
      "interesting",
      "productive",
    ],
    wordBank: [
      "explained",
      "ignored",
      "listened",
      "talked",
      "quiet",
      "noisy",
      "asked",
      "avoided",
      "interesting",
      "boring",
      "productive",
      "wasteful",
    ],
  },
  {
    lines: [
      "The gardener ___1___ the flowers carefully.",
      "She watered the ___2___ plants.",
      "Bees ___3___ around the garden.",
      "The air smelled ___4___.",
      "The garden was full of ___5___.",
      "It was a ___6___ place.",
    ],
    blanks: ["tended", "young", "buzzed", "fresh", "colors", "peaceful"],
    wordBank: [
      "tended",
      "ignored",
      "young",
      "old",
      "buzzed",
      "flew",
      "fresh",
      "stale",
      "colors",
      "weeds",
      "peaceful",
      "chaotic",
    ],
  },
  {
    lines: [
      "The musician ___1___ a beautiful song.",
      "The audience ___2___ quietly.",
      "The melody was ___3___.",
      "Lights ___4___ softly on stage.",
      "Everyone felt ___5___.",
      "It was a ___6___ performance.",
    ],
    blanks: ["played", "listened", "soothing", "glowed", "moved", "memorable"],
    wordBank: [
      "played",
      "sang",
      "listened",
      "ignored",
      "soothing",
      "loud",
      "glowed",
      "dimmed",
      "moved",
      "bored",
      "memorable",
      "forgettable",
    ],
  },
]

// (Keep your existing JavaScript logic below unchanged)

let currentStoryIndex = 0
let currentLineIndex = 0
let tokensEarned = 0

const titlePage = document.getElementById("title-page")
const personalInfo = document.getElementById("personal-info")
const questions = document.getElementById("questions")
const storyBuilder = document.getElementById("story-builder")

const startBtn = document.getElementById("start-btn")
const infoForm = document.getElementById("info-form")
const quizForm = document.getElementById("quiz-form")

const storyLineEl = document.getElementById("story-line")
const blankInput = document.getElementById("blank-input")
const wordBankEl = document.getElementById("word-bank")
const feedbackEl = document.getElementById("feedback")
const checkBtn = document.getElementById("check-btn")
const nextBtn = document.getElementById("next-btn")
const completionEl = document.getElementById("completion")
const completionMsg = document.getElementById("completion-msg")
const newStoryBtn = document.getElementById("new-story-btn")

startBtn.addEventListener("click", () => {
  titlePage.classList.add("hidden")
  personalInfo.classList.remove("hidden")
})

infoForm.addEventListener("submit", (e) => {
  e.preventDefault()
  personalInfo.classList.add("hidden")
  questions.classList.remove("hidden")
})

quizForm.addEventListener("submit", (e) => {
  e.preventDefault()
  questions.classList.add("hidden")
  startStoryBuilder()
})

function startStoryBuilder() {
  storyBuilder.classList.remove("hidden")
  tokensEarned = 0
  currentStoryIndex = 0
  currentLineIndex = 0
  loadStory(currentStoryIndex)
}

function loadStory(index) {
  currentLineIndex = 0
  completionEl.classList.add("hidden")
  checkBtn.disabled = true
  nextBtn.disabled = true
  feedbackEl.textContent = ""
  blankInput.value = ""
  blankInput.readOnly = true
  renderLine()
  renderWordBank()
}

function renderLine() {
  const story = stories[currentStoryIndex]
  const line = story.lines[currentLineIndex]
  const displayLine = line.replace(`___${currentLineIndex + 1}___`, "_____")
  storyLineEl.textContent = displayLine
}

function renderWordBank() {
  const story = stories[currentStoryIndex]
  wordBankEl.innerHTML = ""
  story.wordBank.forEach((word) => {
    const wordBtn = document.createElement("div")
    wordBtn.classList.add("word")
    wordBtn.textContent = word
    wordBtn.addEventListener("click", () => {
      blankInput.value = word
      checkBtn.disabled = false
      feedbackEl.textContent = ""
      nextBtn.disabled = true
    })
    wordBankEl.appendChild(wordBtn)
  })
}

checkBtn.addEventListener("click", () => {
  const story = stories[currentStoryIndex]
  const answer = story.blanks[currentLineIndex]
  const userInput = blankInput.value.trim().toLowerCase()
  if (userInput === answer.toLowerCase()) {
    feedbackEl.textContent = "Correct!"
    feedbackEl.className = "feedback correct"
    tokensEarned++
    checkBtn.disabled = true
    nextBtn.disabled = false
  } else {
    feedbackEl.textContent = "Incorrect, try again."
    feedbackEl.className = "feedback incorrect"
  }
})

nextBtn.addEventListener("click", () => {
  currentLineIndex++
  if (currentLineIndex >= stories[currentStoryIndex].lines.length) {
    showCompletion()
  } else {
    blankInput.value = ""
    feedbackEl.textContent = ""
    checkBtn.disabled = true
    nextBtn.disabled = true
    renderLine()
  }
})

function showCompletion() {
  storyLineEl.textContent = ""
  blankInput.value = ""
  blankInput.readOnly = true
  wordBankEl.innerHTML = ""
  checkBtn.disabled = true
  nextBtn.disabled = true
  completionEl.classList.remove("hidden")
  completionMsg.innerHTML = `Great job! You earned <span class="token">${tokensEarned}</span> tokens of appreciation! 🎉`
}

newStoryBtn.addEventListener("click", () => {
  let newIndex
  do {
    newIndex = Math.floor(Math.random() * stories.length)
  } while (newIndex === currentStoryIndex)
  currentStoryIndex = newIndex
  tokensEarned = 0
  loadStory(currentStoryIndex)
})
