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