// ==============================================
//  WEATHERWEAR GAME — app.js
// ==============================================


// ==============================================
//  CITY DATA
// ==============================================
const CITIES = [

  // --- HOT cities ---
  { name: "Dubai",       country: "UAE 🇦🇪",         weather: "hot",  emoji: "☀️",  temp: 40, desc: "Blazing sun" },
  { name: "Cairo",       country: "Egypt 🇪🇬",        weather: "hot",  emoji: "🌞",  temp: 37, desc: "Very hot & sunny" },
  { name: "Mumbai",      country: "India 🇮🇳",        weather: "hot",  emoji: "☀️",  temp: 33, desc: "Warm and humid" },
  { name: "Bangkok",     country: "Thailand 🇹🇭",     weather: "hot",  emoji: "🌞",  temp: 35, desc: "Hot and humid" },
  { name: "Riyadh",      country: "Saudi Arabia 🇸🇦", weather: "hot",  emoji: "☀️",  temp: 42, desc: "Extreme heat" },
  { name: "Lagos",       country: "Nigeria 🇳🇬",      weather: "hot",  emoji: "🌤️", temp: 31, desc: "Hot and tropical" },
  { name: "Doha",        country: "Qatar 🇶🇦",        weather: "hot",  emoji: "🌞",  temp: 39, desc: "Scorching heat" },
  { name: "Miami",       country: "USA 🇺🇸",          weather: "hot",  emoji: "☀️",  temp: 30, desc: "Sunny and warm" },
  { name: "Barcelona",   country: "Spain 🇪🇸",        weather: "hot",  emoji: "🌤️", temp: 28, desc: "Warm and sunny" },
  { name: "Tunis",       country: "Tunisia 🇹🇳",      weather: "hot",  emoji: "☀️",  temp: 34, desc: "Hot Mediterranean sun" },
  { name: "Karachi",     country: "Pakistan 🇵🇰",     weather: "hot",  emoji: "🌞",  temp: 36, desc: "Hot and humid" },

  // --- COLD cities ---
  { name: "Moscow",      country: "Russia 🇷🇺",       weather: "cold", emoji: "🌨️", temp: -5,  desc: "Freezing cold" },
  { name: "Oslo",        country: "Norway 🇳🇴",       weather: "cold", emoji: "❄️",  temp: -2,  desc: "Very cold" },
  { name: "Helsinki",    country: "Finland 🇫🇮",      weather: "cold", emoji: "🌨️", temp: -3,  desc: "Bitter cold" },
  { name: "Reykjavik",   country: "Iceland 🇮🇸",      weather: "cold", emoji: "❄️",  temp: 3,   desc: "Cold and windy" },
  { name: "Ulaanbaatar", country: "Mongolia 🇲🇳",     weather: "cold", emoji: "🌨️", temp: -10, desc: "Extreme cold" },
  { name: "Anchorage",   country: "USA 🇺🇸",          weather: "cold", emoji: "🌨️", temp: -4,  desc: "Cold and grey" },
  { name: "Stockholm",   country: "Sweden 🇸🇪",       weather: "cold", emoji: "❄️",  temp: 1,   desc: "Cold and icy" },

  // --- RAIN cities ---
  { name: "Manchester",  country: "UK 🇬🇧",           weather: "rain", emoji: "🌧️", temp: 10, desc: "Pouring rain" },
  { name: "Seattle",     country: "USA 🇺🇸",          weather: "rain", emoji: "🌧️", temp: 12, desc: "Drizzly and grey" },
  { name: "Bergen",      country: "Norway 🇳🇴",       weather: "rain", emoji: "🌧️", temp: 9,  desc: "Rainy as always!" },
  { name: "Dhaka",       country: "Bangladesh 🇧🇩",   weather: "rain", emoji: "🌧️", temp: 28, desc: "Monsoon rain" },
  { name: "London",      country: "UK 🇬🇧",           weather: "rain", emoji: "🌧️", temp: 11, desc: "Typical drizzle" },
  { name: "Dublin",      country: "Ireland 🇮🇪",      weather: "rain", emoji: "🌧️", temp: 10, desc: "Wet and grey" },
  { name: "Nairobi",     country: "Kenya 🇰🇪",        weather: "rain", emoji: "⛈️", temp: 19, desc: "Afternoon showers" },
  { name: "Lahore",      country: "Pakistan 🇵🇰",     weather: "rain", emoji: "🌧️", temp: 25, desc: "Monsoon season" },

  // --- SNOW cities ---
  { name: "Tromsø",      country: "Norway 🇳🇴",       weather: "snow", emoji: "❄️",  temp: -8,  desc: "Heavy snowfall" },
  { name: "Rovaniemi",   country: "Finland 🇫🇮",      weather: "snow", emoji: "⛄",  temp: -12, desc: "Deep snow" },
  { name: "Sapporo",     country: "Japan 🇯🇵",        weather: "snow", emoji: "❄️",  temp: -5,  desc: "Heavy snowfall" },
  { name: "Harbin",      country: "China 🇨🇳",        weather: "snow", emoji: "⛄",  temp: -18, desc: "Ice city!" },
  { name: "Banff",       country: "Canada 🇨🇦",       weather: "snow", emoji: "🌨️", temp: -10, desc: "Mountain blizzard" },
  { name: "Yakutsk",     country: "Russia 🇷🇺",       weather: "snow", emoji: "❄️",  temp: -30, desc: "Extreme blizzard" },
];


// ==============================================
//  OUTFIT DATA
//  Each outfit now has a unique 'img' emoji/icon
//  9 outfits per weather type — no repeats
// ==============================================
const OUTFITS = {

  // ☀️ HOT — 9 unique outfits
  hot: [
    { icon: "🩳", name: "Shorts",             tag: "Hot weather ☀️" },
    { icon: "👗", name: "Summer dress",        tag: "Hot weather ☀️" },
    { icon: "🩱", name: "Bodysuit",            tag: "Hot weather ☀️" },
    { icon: "👚", name: "Crop top & skirt",    tag: "Hot weather ☀️" },
    { icon: "🥿", name: "Sandals & vest",      tag: "Hot weather ☀️" },
    { icon: "🩴", name: "Flip flops",          tag: "Hot weather ☀️" },
    { icon: "👒", name: "Sun hat & dress",     tag: "Hot weather ☀️" },
    { icon: "👙", name: "Swimwear",            tag: "Hot weather ☀️" },
    { icon: "🧢", name: "Cap & light shirt",   tag: "Hot weather ☀️" },
  ],

  // ❄️ COLD — 9 unique outfits
  cold: [
    { icon: "🧥", name: "Winter coat",         tag: "Cold weather ❄️" },
    { icon: "🧤", name: "Gloves & jacket",     tag: "Cold weather ❄️" },
    { icon: "🧣", name: "Scarf & wool coat",   tag: "Cold weather ❄️" },
    { icon: "🥾", name: "Snow boots & parka",  tag: "Cold weather ❄️" },
    { icon: "🧦", name: "Thick socks & coat",  tag: "Cold weather ❄️" },
    { icon: "👢", name: "Knee boots & coat",   tag: "Cold weather ❄️" },
    { icon: "🎿", name: "Thermal layers",      tag: "Cold weather ❄️" },
    { icon: "🧶", name: "Knit jumper & scarf", tag: "Cold weather ❄️" },
    { icon: "🪖", name: "Fur hat & puffer",    tag: "Cold weather ❄️" },
  ],

  // 🌧️ RAIN — 9 unique outfits
  rain: [
    { icon: "🌂", name: "Umbrella & mac",      tag: "Rainy day 🌧️" },
    { icon: "☂️", name: "Brolly & coat",       tag: "Rainy day 🌧️" },
    { icon: "👢", name: "Wellies & raincoat",  tag: "Rainy day 🌧️" },
    { icon: "🥾", name: "Waterproof boots",    tag: "Rainy day 🌧️" },
    { icon: "🧥", name: "Trench coat",         tag: "Rainy day 🌧️" },
    { icon: "🩱", name: "Poncho",              tag: "Rainy day 🌧️" },
    { icon: "🎒", name: "Waterproof jacket",   tag: "Rainy day 🌧️" },
    { icon: "👖", name: "Waterproof trousers", tag: "Rainy day 🌧️" },
    { icon: "🧤", name: "Gloves & rain hat",   tag: "Rainy day 🌧️" },
  ],

  // ⛄ SNOW — 9 unique outfits
  snow: [
    { icon: "🧥", name: "Snowsuit & boots",    tag: "Snowy day ⛄" },
    { icon: "🧤", name: "Mittens & puffer",    tag: "Snowy day ⛄" },
    { icon: "⛷️", name: "Ski jacket",          tag: "Snowy day ⛄" },
    { icon: "🧣", name: "Puffer & scarf",      tag: "Snowy day ⛄" },
    { icon: "🧦", name: "Thermal socks",       tag: "Snowy day ⛄" },
    { icon: "👢", name: "Snow boots",          tag: "Snowy day ⛄" },
    { icon: "🎿", name: "Ski suit & goggles",  tag: "Snowy day ⛄" },
    { icon: "🧶", name: "Wool hat & layers",   tag: "Snowy day ⛄" },
    { icon: "🪖", name: "Fur coat & hat",      tag: "Snowy day ⛄" },
  ],
};


// ==============================================
//  GAME CONSTANTS
// ==============================================
const GAME_DURATION   = 45;  // total seconds per game
const CARDS_PER_ROUND = 9;   // 9 cards shown each round (3 rows x 3 columns)


// ==============================================
//  GAME STATE
// ==============================================
let score         = 0;
let cityCount     = 0;
let results       = [];
let timeLeft      = GAME_DURATION;
let gameTimerID   = null;
let roundTimerID  = null;
let roundTimeLeft = 3;
let answered      = false;
let currentCity   = null;
let correctOutfit = null;


// ==============================================
//  DOM REFERENCES
// ==============================================
const screenStart      = document.getElementById('screen-start');
const screenGame       = document.getElementById('screen-game');
const screenEnd        = document.getElementById('screen-end');
const highscoreDisplay = document.getElementById('highscore-display');
const cityCountEl      = document.getElementById('city-count');
const gameTimerEl      = document.getElementById('game-timer');
const scoreDisplay     = document.getElementById('score-display');
const bannerEmoji      = document.getElementById('banner-emoji');
const bannerCity       = document.getElementById('banner-city');
const bannerDesc       = document.getElementById('banner-desc');
const outfitGrid       = document.getElementById('outfit-grid');
const feedbackBar      = document.getElementById('feedback-bar');
const progressDots     = document.getElementById('progress-dots');
const endBigEmoji      = document.getElementById('end-big-emoji');
const endScore         = document.getElementById('end-score');
const endMessage       = document.getElementById('end-message');
const newHighscore     = document.getElementById('new-highscore');
const endDotsRow       = document.getElementById('end-dots-row');

highscoreDisplay.textContent = localStorage.getItem('wgHS') || 0;


// ==============================================
//  DARK / LIGHT MODE TOGGLE
// ==============================================
const themeToggle = document.getElementById('theme-toggle');
let isDark = false;

themeToggle.addEventListener('click', () => {
  isDark = !isDark;
  document.documentElement.setAttribute('data-dark', isDark ? '1' : '0');
  themeToggle.textContent = isDark ? '☀️ Light' : '🌙 Dark';
});


// ==============================================
//  SCREEN SWITCHERS (Section 3)
//  Clean functions to show/hide the 3 screens
// ==============================================
function showStart() {
  screenStart.style.display = 'block';
  screenGame.style.display  = 'none';
  screenEnd.style.display   = 'none';
}

function showGame() {
  screenStart.style.display = 'none';
  screenGame.style.display  = 'block';
  screenEnd.style.display   = 'none';
}

function showEnd() {
  screenStart.style.display = 'none';
  screenGame.style.display  = 'none';
  screenEnd.style.display   = 'block';
}


// ==============================================
//  HELPER FUNCTIONS
// ==============================================

// Returns a random item from any array
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Returns a shuffled copy of an array (Fisher-Yates)
function shuffle(arr) {
  let a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Shows the feedback bar with correct colour and message
function showFeedback(type, msg) {
  feedbackBar.textContent   = msg;
  feedbackBar.className     = 'feedback-bar ' + type + '-fb';
  feedbackBar.style.display = 'block';
}

// Adds a new orange dot for the current city
function addDot() {
  let d = document.createElement('div');
  d.className = 'dot active';
  progressDots.appendChild(d);
}

// Changes the last dot colour to green / red / grey
function updateLastDot(result) {
  let dots = progressDots.querySelectorAll('.dot');
  if (dots.length) dots[dots.length - 1].className = 'dot ' + result;
}

// Swaps the GIF background to match the weather type
function setWeatherBg(weather) {
  document.body.classList.remove('weather-hot', 'weather-cold', 'weather-rain', 'weather-snow');
  document.body.classList.add('weather-' + weather);
}


// ==============================================
//  START GAME
// ==============================================
function startGame() {
  // Reset all state
  score = 0; cityCount = 0; results = []; timeLeft = GAME_DURATION; answered = false;

  // Clear GIF background
  document.body.className = '';

  // Reset HUD
  scoreDisplay.textContent = 0;
  progressDots.innerHTML   = '';

  // Show game screen using our clean function
  showGame();

  startGameTimer();
  showNextCity();
}


// ==============================================
//  45-SECOND GAME TIMER
// ==============================================
function startGameTimer() {
  if (gameTimerID) clearInterval(gameTimerID);
  gameTimerEl.textContent = timeLeft;
  gameTimerEl.classList.remove('urgent');

  gameTimerID = setInterval(() => {
    timeLeft--;
    gameTimerEl.textContent = timeLeft;
    if (timeLeft <= 10) gameTimerEl.classList.add('urgent');
    if (timeLeft <= 0) {
      clearInterval(gameTimerID);
      clearInterval(roundTimerID);
      endGame();
    }
  }, 1000);
}


// ==============================================
//  SHOW NEXT CITY
// ==============================================
function showNextCity() {
  answered = false;
  feedbackBar.style.display = 'none';
  feedbackBar.className     = 'feedback-bar';

  cityCount++;
  cityCountEl.textContent = cityCount;

  currentCity = CITIES[Math.floor(Math.random() * CITIES.length)];

  bannerEmoji.textContent = currentCity.emoji;
  bannerCity.textContent  = currentCity.name + ', ' + currentCity.country;
  bannerDesc.textContent  = currentCity.desc + ' · ' + currentCity.temp + '°C';

  setWeatherBg(currentCity.weather);

  correctOutfit = pickRandom(OUTFITS[currentCity.weather]);
  buildCards();
  addDot();
  startRoundTimer();
}


// ==============================================
//  3-SECOND ROUND TIMER
// ==============================================
function startRoundTimer() {
  roundTimeLeft = 3;
  if (roundTimerID) clearInterval(roundTimerID);

  roundTimerID = setInterval(() => {
    roundTimeLeft--;
    if (roundTimeLeft <= 0) {
      clearInterval(roundTimerID);
      if (!answered) handleSkip();
    }
  }, 1000);
}


// ==============================================
//  BUILD OUTFIT CARDS
//  Creates 9 cards: 1 correct + 8 wrong
//  All unique icons — no repeats per round
// ==============================================
function buildCards() {
  outfitGrid.innerHTML = '';

  // Get all weather types except the current one
  const wrongKeys = Object.keys(OUTFITS).filter(k => k !== currentCity.weather);

  // Collect ALL outfits from wrong weather types
  let wrongPool = [];
  wrongKeys.forEach(k => {
    OUTFITS[k].forEach(outfit => wrongPool.push({ key: k, outfit }));
  });

  // Shuffle the pool and take 8 unique wrong outfits
  const wrongItems = shuffle(wrongPool).slice(0, CARDS_PER_ROUND - 1);

  // Combine 1 correct + 8 wrong, then shuffle all 9
  const allCards = shuffle([
    { key: currentCity.weather, outfit: correctOutfit },
    ...wrongItems
  ]);

  // Create a card element for each outfit
  allCards.forEach(item => {
    let card = document.createElement('div');
    card.className   = 'outfit-card';
    card.dataset.key = item.key;

    card.innerHTML =
      `<span class="card-icon">${item.outfit.icon}</span>` +
      `<div class="card-name">${item.outfit.name}</div>` +
      `<div class="card-tag">${item.outfit.tag}</div>`;

    card.addEventListener('click', () => checkAnswer(item.key, card));
    outfitGrid.appendChild(card);
  });
}


// ==============================================
//  CHECK ANSWER
// ==============================================
function checkAnswer(clickedKey, clickedCard) {
  if (answered) return;
  answered = true;
  clearInterval(roundTimerID);

  // Disable all cards and highlight the correct one green
  outfitGrid.querySelectorAll('.outfit-card').forEach(card => {
    card.classList.add('disabled');
    if (card.dataset.key === currentCity.weather) card.classList.add('correct');
  });

  if (clickedKey === currentCity.weather) {
    score++;
    results.push('correct');
    showFeedback('correct', '✅ Correct! +1 point — ' + correctOutfit.name);
  } else {
    score--;
    results.push('wrong');
    clickedCard.classList.add('wrong');
    showFeedback('wrong', '❌ Wrong! −1 point — Correct: ' + correctOutfit.name);
  }

  scoreDisplay.textContent = score;
  updateLastDot(results[results.length - 1]);

  setTimeout(() => { if (timeLeft > 0) showNextCity(); }, 1200);
}


// ==============================================
//  HANDLE SKIP
// ==============================================
function handleSkip() {
  answered = true;
  results.push('skip');

  outfitGrid.querySelectorAll('.outfit-card').forEach(card => {
    card.classList.add('disabled');
    if (card.dataset.key === currentCity.weather) card.classList.add('correct');
  });

  showFeedback('skip', '⏱ Too slow! — Correct: ' + correctOutfit.name);
  updateLastDot('skip');

  setTimeout(() => { if (timeLeft > 0) showNextCity(); }, 1200);
}


// ==============================================
//  END GAME
// ==============================================
function endGame() {
  clearInterval(roundTimerID);

  // Show end screen using our clean function
  showEnd();

  endScore.textContent = score;
  document.body.className = '';

  if (score >= 8) {
    endBigEmoji.textContent = '🏆';
    endMessage.textContent  = "Amazing! You're a weather genius!";
  } else if (score >= 5) {
    endBigEmoji.textContent = '⛅';
    endMessage.textContent  = 'Not bad! Keep practising 👕';
  } else if (score >= 2) {
    endBigEmoji.textContent = '🌧️';
    endMessage.textContent  = 'You got soaked! Try again 😅';
  } else {
    endBigEmoji.textContent = '⛈️';
    endMessage.textContent  = 'A total storm! Needs more practice 😬';
  }

  let best = parseInt(localStorage.getItem('wgHS') || 0);
  if (score > best) {
    localStorage.setItem('wgHS', score);
    highscoreDisplay.textContent = score;
    newHighscore.style.display   = 'inline-block';
  } else {
    newHighscore.style.display = 'none';
  }

  endDotsRow.innerHTML = '';
  results.forEach(r => {
    let dot = document.createElement('div');
    dot.className   = 'end-dot ' + r;
    dot.textContent = r === 'correct' ? '✓' : r === 'wrong' ? '✗' : '−';
    endDotsRow.appendChild(dot);
  });
}


// ==============================================
//  BUTTON EVENT LISTENERS
// ==============================================

// Start button on welcome screen
document.getElementById('start-btn').addEventListener('click', startGame);

// Play Again button on end screen
document.getElementById('play-again-btn').addEventListener('click', startGame);

// Home button on end screen — goes back to start
document.getElementById('home-btn').addEventListener('click', () => {
  document.body.className = '';
  highscoreDisplay.textContent = localStorage.getItem('wgHS') || 0;
  showStart();  // uses our clean function
});