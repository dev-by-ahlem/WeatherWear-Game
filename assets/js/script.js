// ==============================================
//  WEATHERWEAR GAME — script.js
// ==============================================


// ==============================================
//  CITY LIST
// ==============================================
const CITIES = [
  { name: "Dubai",        country: "UAE 🇦🇪",          lat: 25.2, lon: 55.3   },
  { name: "Cairo",        country: "Egypt 🇪🇬",         lat: 30.1, lon: 31.2   },
  { name: "Mumbai",       country: "India 🇮🇳",         lat: 19.1, lon: 72.9   },
  { name: "Bangkok",      country: "Thailand 🇹🇭",      lat: 13.8, lon: 100.5  },
  { name: "Riyadh",       country: "Saudi Arabia 🇸🇦",  lat: 24.7, lon: 46.7   },
  { name: "Lagos",        country: "Nigeria 🇳🇬",       lat: 6.5,  lon: 3.4    },
  { name: "Doha",         country: "Qatar 🇶🇦",         lat: 25.3, lon: 51.5   },
  { name: "Miami",        country: "USA 🇺🇸",           lat: 25.8, lon: -80.2  },
  { name: "Barcelona",    country: "Spain 🇪🇸",         lat: 41.4, lon: 2.2    },
  { name: "Tunis",        country: "Tunisia 🇹🇳",       lat: 36.8, lon: 10.2   },
  { name: "Karachi",      country: "Pakistan 🇵🇰",      lat: 24.9, lon: 67.0   },
  { name: "Moscow",       country: "Russia 🇷🇺",        lat: 55.8, lon: 37.6   },
  { name: "Oslo",         country: "Norway 🇳🇴",        lat: 59.9, lon: 10.7   },
  { name: "Helsinki",     country: "Finland 🇫🇮",       lat: 60.2, lon: 25.0   },
  { name: "Reykjavik",    country: "Iceland 🇮🇸",       lat: 64.1, lon: -21.9  },
  { name: "Ulaanbaatar",  country: "Mongolia 🇲🇳",      lat: 47.9, lon: 106.9  },
  { name: "Anchorage",    country: "USA 🇺🇸",           lat: 61.2, lon: -149.9 },
  { name: "Stockholm",    country: "Sweden 🇸🇪",        lat: 59.3, lon: 18.1   },
  { name: "Manchester",   country: "UK 🇬🇧",            lat: 53.5, lon: -2.2   },
  { name: "Seattle",      country: "USA 🇺🇸",           lat: 47.6, lon: -122.3 },
  { name: "Bergen",       country: "Norway 🇳🇴",        lat: 60.4, lon: 5.3    },
  { name: "Dhaka",        country: "Bangladesh 🇧🇩",    lat: 23.8, lon: 90.4   },
  { name: "London",       country: "UK 🇬🇧",            lat: 51.5, lon: -0.1   },
  { name: "Dublin",       country: "Ireland 🇮🇪",       lat: 53.3, lon: -6.3   },
  { name: "Nairobi",      country: "Kenya 🇰🇪",         lat: -1.3, lon: 36.8   },
  { name: "Lahore",       country: "Pakistan 🇵🇰",      lat: 31.5, lon: 74.3   },
  { name: "Tromsø",       country: "Norway 🇳🇴",        lat: 69.7, lon: 19.0   },
  { name: "Rovaniemi",    country: "Finland 🇫🇮",       lat: 66.5, lon: 25.7   },
  { name: "Sapporo",      country: "Japan 🇯🇵",         lat: 43.1, lon: 141.3  },
  { name: "Harbin",       country: "China 🇨🇳",         lat: 45.8, lon: 126.5  },
  { name: "Banff",        country: "Canada 🇨🇦",        lat: 51.2, lon: -115.6 },
  { name: "Yakutsk",      country: "Russia 🇷🇺",        lat: 62.0, lon: 129.7  },
];


// ==============================================
//  OUTFIT DATA
// ==============================================
const OUTFITS = {

  hot: [
    { icon: "🩳", name: "Shorts",           tag: "Hot weather ☀️" },
    { icon: "👗", name: "Summer dress",      tag: "Hot weather ☀️" },
    { icon: "🩱", name: "Bodysuit",          tag: "Hot weather ☀️" },
    { icon: "👚", name: "Crop top & skirt",  tag: "Hot weather ☀️" },
    { icon: "🥿", name: "Sandals & vest",    tag: "Hot weather ☀️" },
    { icon: "🩴", name: "Flip flops",        tag: "Hot weather ☀️" },
    { icon: "👒", name: "Sun hat & dress",   tag: "Hot weather ☀️" },
    { icon: "👙", name: "Swimwear",          tag: "Hot weather ☀️" },
    { icon: "🧢", name: "Cap & light shirt", tag: "Hot weather ☀️" },
  ],

  cold: [
    { icon: "🧥", name: "Winter coat",         tag: "Cold weather ❄️" },
    { icon: "🧤", name: "Gloves & jacket",      tag: "Cold weather ❄️" },
    { icon: "🧣", name: "Scarf & wool coat",    tag: "Cold weather ❄️" },
    { icon: "🥾", name: "Snow boots & parka",   tag: "Cold weather ❄️" },
    { icon: "🧦", name: "Thick socks & coat",   tag: "Cold weather ❄️" },
    { icon: "👢", name: "Knee boots & coat",    tag: "Cold weather ❄️" },
    { icon: "🎿", name: "Thermal layers",       tag: "Cold weather ❄️" },
    { icon: "🧶", name: "Knit jumper & scarf",  tag: "Cold weather ❄️" },
    { icon: "🪖", name: "Fur hat & puffer",     tag: "Cold weather ❄️" },
  ],

  rain: [
    { icon: "🌂", name: "Umbrella & mac",       tag: "Rainy day 🌧️" },
    { icon: "☂️", name: "Brolly & coat",         tag: "Rainy day 🌧️" },
    { icon: "👢", name: "Wellies & raincoat",    tag: "Rainy day 🌧️" },
    { icon: "🥾", name: "Waterproof boots",      tag: "Rainy day 🌧️" },
    { icon: "🧥", name: "Trench coat",           tag: "Rainy day 🌧️" },
    { icon: "🩱", name: "Poncho",                tag: "Rainy day 🌧️" },
    { icon: "🎒", name: "Waterproof jacket",     tag: "Rainy day 🌧️" },
    { icon: "👖", name: "Waterproof trousers",   tag: "Rainy day 🌧️" },
    { icon: "🧤", name: "Gloves & rain hat",     tag: "Rainy day 🌧️" },
  ],

  snow: [
    { icon: "🧥", name: "Snowsuit & boots",      tag: "Snowy day ⛄" },
    { icon: "🧤", name: "Mittens & puffer",       tag: "Snowy day ⛄" },
    { icon: "⛷️", name: "Ski jacket",             tag: "Snowy day ⛄" },
    { icon: "🧣", name: "Puffer & scarf",         tag: "Snowy day ⛄" },
    { icon: "🧦", name: "Thermal socks",          tag: "Snowy day ⛄" },
    { icon: "👢", name: "Snow boots",             tag: "Snowy day ⛄" },
    { icon: "🎿", name: "Ski suit & goggles",     tag: "Snowy day ⛄" },
    { icon: "🧶", name: "Wool hat & layers",      tag: "Snowy day ⛄" },
    { icon: "🪖", name: "Fur coat & hat",         tag: "Snowy day ⛄" },
  ],
};


// ==============================================
//  GAME CONSTANTS
// ==============================================
const GAME_DURATION   = 45;
const CARDS_PER_ROUND = 9;


// ==============================================
//  GAME STATE
// ==============================================
let score          = 0;
let cityCount      = 0;
let timeLeft       = GAME_DURATION;
let gameTimerID    = null;
let roundTimerID   = null;
let answered       = false;
let currentCity    = null;
let currentWeather = null;
let correctOutfit  = null;
let nextCityData   = null;  // pre-fetched next city


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
const endBigEmoji      = document.getElementById('end-big-emoji');
const endScore         = document.getElementById('end-score');
const endMessage       = document.getElementById('end-message');
const newHighscore     = document.getElementById('new-highscore');

// Load saved high score on page open
highscoreDisplay.textContent = localStorage.getItem('wgHS') || 0;


// ==============================================
//  DARK / LIGHT MODE TOGGLE
// ==============================================
const themeToggle = document.getElementById('theme-toggle');
let isDark = false;

themeToggle.addEventListener('click', function() {
  isDark = !isDark;
  document.documentElement.setAttribute('data-dark', isDark ? '1' : '0');
  themeToggle.textContent = isDark ? '☀️ Light' : '🌙 Dark';
});


// ==============================================
//  SCREEN SWITCHERS
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
//  RESET GAME STATE
// ==============================================
function resetState() {
  score         = 0;
  cityCount     = 0;
  timeLeft      = GAME_DURATION;
  answered      = false;
  nextCityData  = null;

  if (gameTimerID)  clearInterval(gameTimerID);
  if (roundTimerID) clearInterval(roundTimerID);

  document.body.className  = '';
  scoreDisplay.textContent = 0;
}


// ==============================================
//  START GAME
// ==============================================
function startGame() {
  resetState();
  showGame();
  startGameTimer();
  showNextCity();
}


// ==============================================
//  RESTART GAME — stays on game screen
// ==============================================
function restartGame() {
  resetState();
  startGameTimer();
  showNextCity();
}


// ==============================================
//  45-SECOND GAME TIMER
// ==============================================
function startGameTimer() {
  gameTimerEl.textContent = timeLeft;
  gameTimerEl.classList.remove('urgent');

  gameTimerID = setInterval(function() {
    timeLeft--;
    gameTimerEl.textContent = timeLeft;

    if (timeLeft <= 10) {
      gameTimerEl.classList.add('urgent');
    }

    if (timeLeft <= 0) {
      clearInterval(gameTimerID);
      clearInterval(roundTimerID);
      endGame();
    }
  }, 1000);
}
