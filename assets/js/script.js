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
    { icon: "assets/images/img1.png", name: "Knit jumper & scarf", tag: "Cold weather ❄️" },
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
 
// ---- GRAB THE 3 SCREENS ----
const screenStart = document.getElementById('screen-start');
const screenGame  = document.getElementById('screen-game');
const screenEnd   = document.getElementById('screen-end');

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

// Grab the Start button
const startBtn = document.getElementById('start-btn');

// When Start is clicked → call the function
startBtn.addEventListener('click', () => {
  showGame();
});
// ==============================================
//  GAME TIMER — counts down every second
// ==============================================

// Store how many seconds the player has left
let timeLeft = 45;

// Get the timer circle element from the HTML
const timerDisplay = document.getElementById('game-timer');

// Create a repeating function that runs every 1000ms (1 second)
const timerInterval = setInterval(() => {

  // Reduce the time by 1 second
  timeLeft--;

  // Update the number shown inside the timer circle
  timerDisplay.textContent = timeLeft;

  // If the time is 10 seconds or less → make the timer turn red
  if (timeLeft <= 10) {
    timerDisplay.classList.add('urgent'); 
  }

  // If the time reaches 0 → stop the timer completely
  if (timeLeft <= 0) {
    clearInterval(timerInterval); // stop the countdown
    endGame();                    // go to the end screen
  }

}, 1000); // 1000ms = 1 second
