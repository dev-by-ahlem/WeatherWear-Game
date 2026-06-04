// ==============================================
//  WEATHERWEAR GAME — script.js
//  Main game logic: data, API calls, timer,
//  card building, scoring and screen control.
// ==============================================


// ==============================================
//  SECTION 1: CITY LIST
//  Each city object holds a display name, country label with flag emoji,
//  and latitude/longitude coordinates used to fetch real weather data.
// ==============================================
const CITIES = [
 
  // --- Hot / Warm cities ---
  // These cities are reliably hot year-round — API will return "hot" naturally
  { name: "Dubai",        country: "UAE 🇦🇪",          lat: 25.2,  lon: 55.3   },
  { name: "Cairo",        country: "Egypt 🇪🇬",         lat: 30.1,  lon: 31.2   },
  { name: "Mumbai",       country: "India 🇮🇳",         lat: 19.1,  lon: 72.9   },
  { name: "Bangkok",      country: "Thailand 🇹🇭",      lat: 13.8,  lon: 100.5  },
  { name: "Riyadh",       country: "Saudi Arabia 🇸🇦",  lat: 24.7,  lon: 46.7   },
  { name: "Lagos",        country: "Nigeria 🇳🇬",       lat: 6.5,   lon: 3.4    },
  { name: "Doha",         country: "Qatar 🇶🇦",         lat: 25.3,  lon: 51.5   },
  { name: "Miami",        country: "USA 🇺🇸",           lat: 25.8,  lon: -80.2  },
  { name: "Barcelona",    country: "Spain 🇪🇸",         lat: 41.4,  lon: 2.2    },
  { name: "Tunis",        country: "Tunisia 🇹🇳",       lat: 36.8,  lon: 10.2   },
  { name: "Karachi",      country: "Pakistan 🇵🇰",      lat: 24.9,  lon: 67.0   },
  { name: "Dhaka",        country: "Bangladesh 🇧🇩",    lat: 23.8,  lon: 90.4   },
  { name: "Lahore",       country: "Pakistan 🇵🇰",      lat: 31.5,  lon: 74.3   },
 
  // --- Cold / Wet cities ---
  // These cities vary between cold, mild and rain depending on season
  { name: "Moscow",       country: "Russia 🇷🇺",        lat: 55.8,  lon: 37.6   },
  { name: "Oslo",         country: "Norway 🇳🇴",        lat: 59.9,  lon: 10.7   },
  { name: "Helsinki",     country: "Finland 🇫🇮",       lat: 60.2,  lon: 25.0   },
  { name: "Reykjavik",    country: "Iceland 🇮🇸",       lat: 64.1,  lon: -21.9  },
  { name: "Ulaanbaatar",  country: "Mongolia 🇲🇳",      lat: 47.9,  lon: 106.9  },
  { name: "Anchorage",    country: "USA 🇺🇸",           lat: 61.2,  lon: -149.9 },
  { name: "Stockholm",    country: "Sweden 🇸🇪",        lat: 59.3,  lon: 18.1   },
  { name: "Manchester",   country: "UK 🇬🇧",            lat: 53.5,  lon: -2.2   },
  { name: "Seattle",      country: "USA 🇺🇸",           lat: 47.6,  lon: -122.3 },
  { name: "Bergen",       country: "Norway 🇳🇴",        lat: 60.4,  lon: 5.3    },
  { name: "London",       country: "UK 🇬🇧",            lat: 51.5,  lon: -0.1   },
  { name: "Dublin",       country: "Ireland 🇮🇪",       lat: 53.3,  lon: -6.3   },
  { name: "Nairobi",      country: "Kenya 🇰🇪",         lat: -1.3,  lon: 36.8   },
  { name: "Tromsø",       country: "Norway 🇳🇴",        lat: 69.7,  lon: 19.0   },
 
  // --- Snowy cities (forcedType: "snow") ---
  // These cities are known to be snowy but the live API often returns
  // mild or rain codes for them, especially outside peak winter.
  // forcedType guarantees the game always treats them as snow.
  { name: "Rovaniemi",    country: "Finland 🇫🇮",       lat: 66.5,  lon: 25.7,  forcedType: "snow" },
  { name: "Sapporo",      country: "Japan 🇯🇵",         lat: 43.1,  lon: 141.3, forcedType: "snow" },
  { name: "Harbin",       country: "China 🇨🇳",         lat: 45.8,  lon: 126.5, forcedType: "snow" },
  { name: "Banff",        country: "Canada 🇨🇦",        lat: 51.2,  lon: -115.6,forcedType: "snow" },
  { name: "Yakutsk",      country: "Russia 🇷🇺",        lat: 62.0,  lon: 129.7, forcedType: "snow" },
  { name: "Ushuaia",      country: "Argentina 🇦🇷",     lat: -54.8, lon: -68.3, forcedType: "snow" },
  { name: "Bariloche",    country: "Argentina 🇦🇷",     lat: -41.1, lon: -71.3, forcedType: "snow" },
  { name: "Queenstown",   country: "New Zealand 🇳🇿",   lat: -45.0, lon: 168.7, forcedType: "snow" },
  { name: "Mount Cook",   country: "New Zealand 🇳🇿",   lat: -43.6, lon: 170.1, forcedType: "snow" },
  { name: "Dunedin",      country: "New Zealand 🇳🇿",   lat: -45.9, lon: 170.5, forcedType: "snow" },
  { name: "Punta Arenas", country: "Chile 🇨🇱",         lat: -53.2, lon: -70.9, forcedType: "snow" },
];

// ==============================================
//  SECTION 2: OUTFIT DATA
//  Each weather type ("hot", "cold", "rain", "snow", "mild") has an array
//  of outfit objects. Each outfit has:
//    icon — emoji or an <img> tag pointing to a local image asset
//    name — the outfit display name shown on the card
//    tag  — the weather label shown beneath the name
// ==============================================
const OUTFITS = {

  // Outfits correct for hot weather
  hot: [
    { icon: "🩳",  name: "Shorts",        tag: "Hot weather ☀️" },
    { icon: "👗",  name: "Summer Dress",  tag: "Hot weather ☀️" },
    { icon: "<img src='assets/images/icons-outfits/skirt.webp' class='card-img-icon' loading='lazy'>", name: "Skirt",          tag: "Hot weather ☀️" },
    { icon: "👚",  name: "Crop Top",      tag: "Hot weather ☀️" },
    { icon: "🥿",  name: "Summer Sandals",tag: "Hot weather ☀️" },
    { icon: "🩴",  name: "Flip flops",    tag: "Hot weather ☀️" },
    { icon: "👒",  name: "Sun Hat",       tag: "Hot weather ☀️" },
    { icon: "🩱",  name: "Swimwear",      tag: "Hot weather ☀️" },
    { icon: "🧢",  name: "Cap",           tag: "Hot weather ☀️" },
  ],

  // Outfits correct for cold weather
  cold: [
    { icon: "👖",  name: "Jeans",         tag: "Cold weather ❄️" },
    { icon: "<img src='assets/images/icons-outfits/coat.webp'         class='card-img-icon' loading='lazy'>", name: "Winter coat",    tag: "Cold weather ❄️" },
    { icon: "<img src='assets/images/icons-outfits/jacket.webp'       class='card-img-icon' loading='lazy'>", name: "Jacket",         tag: "Cold weather ❄️" },
    { icon: "🧣",  name: "Scarf",         tag: "Cold weather ❄️" },
    { icon: "<img src='assets/images/icons-outfits/boots.webp'        class='card-img-icon' loading='lazy'>", name: "Boots",          tag: "Cold weather ❄️" },
    { icon: "🧦",  name: "Thick socks",   tag: "Cold weather ❄️" },
    { icon: "<img src='assets/images/icons-outfits/women-boots.webp'  class='card-img-icon' loading='lazy'>", name: "Knee boots",     tag: "Cold weather ❄️" },
    { icon: "<img src='assets/images/icons-outfits/thick-jumper.webp' class='card-img-icon' loading='lazy'>", name: "Thick Jumper",   tag: "Cold weather ❄️" },
    { icon: "<img src='assets/images/icons-outfits/jumper-scarf.webp' class='card-img-icon' loading='lazy'>", name: "Jumper & scarf", tag: "Cold weather ❄️" },
    { icon: "<img src='assets/images/icons-outfits/winter-hat.webp'   class='card-img-icon' loading='lazy'>", name: "Winter Hat",     tag: "Cold weather ❄️" },
  ],

  // Outfits correct for rainy weather
  rain: [
    { icon: "🌂",  name: "Brolly",             tag: "Rainy day 🌧️" },
    { icon: "☂️",  name: "Umbrella",           tag: "Rainy day 🌧️" },
    { icon: "<img src='assets/images/icons-outfits/rain-coat.webp'         class='card-img-icon' loading='lazy'>", name: "Rain Coat",         tag: "Rainy day 🌧️" },
    { icon: "<img src='assets/images/icons-outfits/waterproof-boots.webp'  class='card-img-icon' loading='lazy'>", name: "Waterproof boots",  tag: "Rainy day 🌧️" },
    { icon: "<img src='assets/images/icons-outfits/waterproof-jacket.webp' class='card-img-icon' loading='lazy'>", name: "Waterproof Jacket", tag: "Rainy day 🌧️" },
    { icon: "<img src='assets/images/icons-outfits/waterproof-suit.webp'   class='card-img-icon' loading='lazy'>", name: "Waterproof Suit",   tag: "Rainy day 🌧️" },
    { icon: "<img src='assets/images/icons-outfits/rain-hat.webp'          class='card-img-icon' loading='lazy'>", name: "Rain Hat",          tag: "Rainy day 🌧️" },
  ],

  // Outfits correct for snowy weather
  snow: [
    { icon: "<img src='assets/images/icons-outfits/snow-suit.webp'      class='card-img-icon' loading='lazy'>", name: "Snow Suit",  tag: "Snowy day ⛄" },
    { icon: "<img src='assets/images/icons-outfits/snow-gloves.webp'    class='card-img-icon' loading='lazy'>", name: "Snow Gloves",tag: "Snowy day ⛄" },
    { icon: "<img src='assets/images/icons-outfits/ski-jacket.webp'     class='card-img-icon' loading='lazy'>", name: "Ski jacket", tag: "Snowy day ⛄" },
    { icon: "<img src='assets/images/icons-outfits/scarf-hat-snow.webp' class='card-img-icon' loading='lazy'>", name: "Hat & scarf",tag: "Snowy day ⛄" },
    { icon: "🎿",                                                                                                 name: "Ski Shoes",  tag: "Snowy day ⛄" },
    { icon: "<img src='assets/images/icons-outfits/snow-boots.webp'     class='card-img-icon' loading='lazy'>", name: "Snow Boots", tag: "Snowy day ⛄" },
  ],

  // Outfits correct for mild/overcast weather
  mild: [
    { icon: "🧥",  name: "Light jacket",  tag: "Mild weather ⛅" },
    { icon: "👟",  name: "Trainers",      tag: "Mild weather ⛅" },
    { icon: "<img src='assets/images/icons-outfits/light-trousers.webp' class='card-img-icon' loading='lazy'>", name: "Light Trousers", tag: "Mild weather ⛅" },
    { icon: "<img src='assets/images/icons-outfits/shirt.webp'          class='card-img-icon' loading='lazy'>", name: "Light Shirt",    tag: "Mild weather ⛅" },
    { icon: "<img src='assets/images/icons-outfits/light-shoes.webp'    class='card-img-icon' loading='lazy'>", name: "Light Shoes",    tag: "Mild weather ⛅" },
    { icon: "<img src='assets/images/icons-outfits/suit-tie.webp'       class='card-img-icon' loading='lazy'>", name: "Suit & Tie",     tag: "Mild weather ⛅" },
    { icon: "<img src='assets/images/icons-outfits/light-jacket.webp'   class='card-img-icon' loading='lazy'>", name: "Light Jacket",   tag: "Mild weather ⛅" },
    { icon: "<img src='assets/images/icons-outfits/trench.webp'         class='card-img-icon' loading='lazy'>", name: "Women Trench",   tag: "Mild weather ⛅" },
  ],
};


// ==============================================
//  SECTION 3: WEATHER API — Open-Meteo (free, no API key needed)
//  These functions interpret raw weather data from the API
//  and convert it into a simple type string the game can use.
// ==============================================

// Fetches live weather data for a given city from the Open-Meteo API.
// "async" means this function runs in the background without freezing the page.
async function fetchWeather(city) {
  // Builds the API URL using the city's latitude and longitude
  const url = "https://api.open-meteo.com/v1/forecast?latitude=" + city.lat + "&longitude=" + city.lon + "&current_weather=true";

  // Sends the HTTP request and waits for the response
  const response = await fetch(url);// fetch means downnload data from an url and store it in response 
  // Converts the API JSON response into a json object we can work with
    const data = await response.json();
  // Rounds the temperature to a whole number
  const temp = Math.round(data.current_weather.temperature);

  // Reads the WMO weather condition code
  const code = data.current_weather.weathercode;

  // Converts the code + temperature into our simplified game type
  const type = getWeatherType(code, temp);

  // Returns a neat object with everything the game needs
  return {
    type:  type,
    temp:  temp,
    emoji: getWeatherEmoji(type),
    desc:  getWeatherDesc(type, temp)
  };
  console.log("Weather:", city.name, temp, code);
}

// Converts a WMO weather code + temperature into one of five game types.
// Weather codes are standard numbers the Open-Meteo API returns
// (e.g. 61 = rain, 71 = snow, etc.)
function getWeatherType(code, temp) {
  // WMO codes for snow and blizzard conditions → "snow"
  if ([71, 72, 73, 74, 75, 76, 77, 85, 86].includes(code)) return "snow";

  // WMO codes for drizzle, rain, showers and storms → "rain"
  if ([51, 52, 53, 55, 56, 57, 61, 62, 63, 64, 65, 66, 67, 80, 81, 82, 95, 96, 99].includes(code)) return "rain";

  // Temperature-based fallback when there is no rain or snow code
  if (temp >= 20) return "hot";   // 20°C and above = hot
  if (temp >= 10) return "mild";  // 10–19°C = mild
  return "cold";                  // Below 10°C = cold
}

// Returns the display emoji for each weather type
function getWeatherEmoji(type) {
  // A lookup object — the key is the type string, the value is the emoji
  const emojis = { hot: "☀️", cold: "🥶", rain: "🌧️", snow: "❄️", mild: "⛅" };
  return emojis[type];
}

// Builds the short weather description shown under the city name in the banner
function getWeatherDesc(type, temp) {
  if (type === "hot")  return "Hot & sunny · "   + temp + "°C";
  if (type === "cold") return "Cold weather · "  + temp + "°C";
  if (type === "rain") return "Rainy · "         + temp + "°C";
  if (type === "snow") return "Snowing · "       + temp + "°C";
  if (type === "mild") return "Mild & cloudy · " + temp + "°C";
}




// ==============================================
//  SECTION 4: GAME CONSTANTS
//  Fixed values that control how the game behaves.
//  Changing these numbers adjusts the difficulty.
// ==============================================

// Total seconds the player has for one full game session
const GAME_DURATION = 45;

// How many outfit cards are shown per round (1 correct + 8 wrong distractors)
const CARDS_PER_ROUND = 9;


// ==============================================
//  SECTION 5: GAME STATE
//  Variables that change as the game runs.
//  They track score, timers, and the current question.
// ==============================================

// Player's current score (increases on correct, decreases on wrong)
let score = 0;

// How many cities have been shown so far this session
let cityCount = 0;

// Seconds remaining on the 45-second game countdown
let timeLeft = GAME_DURATION;

// ID for the main 45-second game timer (used to stop it with clearInterval)
let gameTimerID = null;

// ID for the 3-second per-round auto-skip timer
let roundTimerID = null;

// Tracks whether the player has already answered the current round
let answered = false;

// The city object currently being shown (name, country, lat, lon)
let currentCity = null;

// The weather object for the current city (type, temp, emoji, desc)
let currentWeather = null;

// The single correct outfit object for the current round
let correctOutfit = null;

// Stores the pre-fetched data for the next city so it loads instantly
let nextCityData = null;


// ==============================================
//  SECTION 6: DOM REFERENCES
//  Grabbing HTML elements once and storing them in variables.
//  This is faster than calling getElementById repeatedly.
// ==============================================

// The three full-page screens
const screenStart = document.getElementById('screen-start');
const screenGame  = document.getElementById('screen-game');
const screenEnd   = document.getElementById('screen-end');

// Start screen elements
const highscoreDisplay = document.getElementById('highscore-display');

// Game HUD elements
const cityCountEl  = document.getElementById('city-count');
const gameTimerEl  = document.getElementById('game-timer');
const scoreDisplay = document.getElementById('score-display');

// Weather banner elements
const bannerEmoji = document.getElementById('banner-emoji');
const bannerCity  = document.getElementById('banner-city');
const bannerDesc  = document.getElementById('banner-desc');

// Outfit grid and feedback bar
const outfitGrid  = document.getElementById('outfit-grid');
const feedbackBar = document.getElementById('feedback-bar');

// End screen elements
const endBigEmoji  = document.getElementById('end-big-emoji');
const endScore     = document.getElementById('end-score');
const endMessage   = document.getElementById('end-message');
const newHighscore = document.getElementById('new-highscore');

// Load the saved high score from localStorage when the page first opens.
// localStorage.getItem returns null if nothing is saved, so || 0 defaults to 0.
highscoreDisplay.textContent = localStorage.getItem('wgHS') || 0;//Show the saved high score, but if there isn’t one yet, show 0


// ==============================================
//  SECTION 7: DARK / LIGHT MODE TOGGLE
//  Switches the visual theme when the player clicks the button.
// ==============================================

// Grab the toggle button from the navbar
const themeToggle = document.getElementById('theme-toggle');

// Tracks whether dark mode is currently active
let isDark = false;

// Listen for a click on the theme button
themeToggle.addEventListener('click', function () {
  // Flip the dark mode flag each time the button is clicked
  isDark = !isDark;

  // Set data-dark="1" on <html> to activate dark CSS variables, or "0" to deactivate
  document.documentElement.setAttribute('data-dark', isDark ? '1' : '0');

  // Update the button label to show what clicking it will do next
  themeToggle.textContent = isDark ? '☀️ Light' : '🌙 Dark';
});


// ==============================================
//  SECTION 8: SCREEN SWITCHERS
//  Shows one screen at a time by setting display styles.
//  Only one screen should ever be visible at once.
// ==============================================

// Shows the start/home screen and hides the others
function showStart() {
  screenStart.style.display = 'flex';  // flex so its card stays vertically centred
  screenGame.style.display  = 'none';
  screenEnd.style.display   = 'none';
}

// Shows the main game screen and hides the others
function showGame() {
  screenStart.style.display = 'none';
  screenGame.style.display  = 'block';
  screenEnd.style.display   = 'none';
}

// Shows the end/results screen and hides the others
function showEnd() {
  screenStart.style.display = 'none';
  screenGame.style.display  = 'none';
  screenEnd.style.display   = 'flex';  // flex so its card stays vertically centred
}


// ==============================================
//  SECTION 9: HELPER FUNCTIONS
//  Small reusable utilities used throughout the game.
// ==============================================

// Returns a single random element from any array
function pickRandom(arr) {
  // Math.random() gives a decimal between 0 and 1.
  // Multiplying by arr.length and flooring gives a valid random index.
  return arr[Math.floor(Math.random() * arr.length)];
}

// Returns a new shuffled copy of an array without changing the original.
// Uses the Fisher-Yates algorithm — a reliable standard shuffle method.
function shuffle(arr) {
  // Spread into a new array so we don't mutate the original
  let copy = [...arr];

  // Walk backwards through the array
  for (let i = copy.length - 1; i > 0; i--) {
    // Pick a random index from 0 up to i (inclusive)
    let j = Math.floor(Math.random() * (i + 1));

    // Swap elements at positions i and j using destructuring
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Displays a coloured message in the feedback bar below the cards.
// type is "correct", "wrong" or "skip" — matches CSS class names in style.css
function showFeedback(type, msg) {
  feedbackBar.textContent   = msg;
  feedbackBar.className     = 'feedback-bar ' + type + '-fb';
  feedbackBar.style.display = 'block';
}

// Shows a neutral "fetching weather…" message while the API call is in progress
function showLoading() {
  feedbackBar.textContent   = '🌍 Fetching real weather...';
  feedbackBar.className     = 'feedback-bar skip-fb';
  feedbackBar.style.display = 'block';
}

// Removes all weather background classes from <body>, then adds the correct one.
// This swaps the animated GIF background to match the current weather type.
function setWeatherBg(weather) {
  // Remove all five weather classes first to start clean
  document.body.classList.remove('weather-hot', 'weather-cold', 'weather-rain', 'weather-snow', 'weather-mild');

  // Add the class that matches the current weather (e.g. "weather-rain")
  document.body.classList.add('weather-' + weather);
}


// ==============================================
//  SECTION 10: PRE-FETCH
//  Loads the next city's weather in the background while the player
//  is still answering the current round, so the next round feels instant.
// ==============================================
async function prefetchNextCity() {
  // Pick a random city from the list
  let city = pickRandom(CITIES);

  // Fetch its live weather data from the API
  let weather = await fetchWeather(city);

  // Store the result globally so showNextCity() can use it immediately
  nextCityData = { city: city, weather: weather };
}


// ==============================================
//  SECTION 11: RESET GAME STATE
//  Resets all tracking variables back to their starting values.
//  Called at the beginning of every new game.
// ==============================================
function resetState() {
  score        = 0;
  cityCount    = 0;
  timeLeft     = GAME_DURATION;
  answered     = false;
  nextCityData = null;

  // Stop any running timers to prevent them overlapping with the new game
  if (gameTimerID)  clearInterval(gameTimerID);// built in function that stops a timer when given its ID
  if (roundTimerID) clearInterval(roundTimerID);

  // Remove all weather background classes from the body
  document.body.className = '';

  // Reset the on-screen score counter to 0
  scoreDisplay.textContent = 0;
}


// ==============================================
//  SECTION 12: START GAME
//  Entry point when the player clicks "Start Game" from the home screen.
// ==============================================
function startGame() {
  // Clear all state from any previous game
  resetState();

  // Switch to the game screen
  showGame();

  // Begin the 45-second countdown
  startGameTimer();

  // Load and display the first city/question
  showNextCity();
}


// ==============================================
//  SECTION 13: RESTART GAME
//  Used by the "Play Again" button — re-uses the game screen that is
//  already visible, so no screen switch is needed.
// ==============================================
function restartGame() {
  resetState();
  startGameTimer();
  showNextCity();
}


// ==============================================
//  SECTION 14: 45-SECOND GAME TIMER
//  Counts down every second. Turns red at 10 seconds.
//  Ends the game when it reaches zero.
// ==============================================
function startGameTimer() {
  // Show the starting time immediately (no 1-second delay)
  gameTimerEl.textContent = timeLeft;

  // Remove the red "urgent" style in case it was set in a previous game
  gameTimerEl.classList.remove('urgent');

  // setInterval calls the function every 1000ms (1 second)
  gameTimerID = setInterval(function () {
    // Decrease the time remaining by 1 second
    timeLeft--;

    // Update the on-screen timer number
    gameTimerEl.textContent = timeLeft;

    // When 10 or fewer seconds remain, turn the timer circle red
    if (timeLeft <= 10) {
      gameTimerEl.classList.add('urgent');
    }

    // When time runs out, stop both timers and trigger the end screen
    if (timeLeft <= 0) {
      clearInterval(gameTimerID);
      clearInterval(roundTimerID);
      endGame();
    }
  }, 1000);
}


// ==============================================
//  SECTION 15: SHOW NEXT CITY
//  Loads the next question: picks a city, fetches its weather,
//  updates the banner, and builds the outfit cards.
//  "async" because it may need to wait for an API call.
// ==============================================
async function showNextCity() {
  // Reset the answered flag so the player can click cards again
  answered = false;

  // Hide and reset the feedback bar for the new round
  feedbackBar.style.display = 'none';
  feedbackBar.className     = 'feedback-bar';

  // Increase the city counter and display it in the HUD
  cityCount++;
  cityCountEl.textContent = cityCount;

  // Use the pre-fetched city if available (instant load) …
  if (nextCityData) {
    currentCity    = nextCityData.city;
    currentWeather = nextCityData.weather;
    nextCityData   = null;  // Clear it so it's not reused
  } else {
    // … otherwise pick a random city and fetch live weather now (shows loading message)
    currentCity = pickRandom(CITIES);
    showLoading();
    currentWeather = await fetchWeather(currentCity);
    feedbackBar.style.display = 'none';  // Hide the loading message once data arrives
  }

  // Uncomment the line below during development to debug weather data in the console:
  // console.log(currentCity.name, '| temp:', currentWeather.temp, '| code from API gives type:', currentWeather.type);

  // Start loading the next city in the background while the player answers
  prefetchNextCity();

  // Update the weather banner with the new city's information
  bannerEmoji.textContent = currentWeather.emoji;
  bannerCity.textContent  = currentCity.name + ', ' + currentCity.country;
  bannerDesc.textContent  = currentWeather.desc;

  // Swap the animated background GIF to match the weather
  setWeatherBg(currentWeather.type);

  // Pick a random correct outfit from the matching weather category
  correctOutfit = pickRandom(OUTFITS[currentWeather.type]);

  // Build and display the 9 clickable outfit cards
  buildCards();

  // Start the 3-second auto-skip countdown for this round
  startRoundTimer();
}


// ==============================================
//  SECTION 16: 3-SECOND ROUND TIMER
//  If the player doesn't click within 3 seconds, handleSkip() fires.
//  Resets each round so every city gets a fresh 3 seconds.
// ==============================================
function startRoundTimer() {
  // Each round starts fresh from 3 seconds
  let roundTimeLeft = 3;

  // Stop any previous round timer that might still be running
  if (roundTimerID) clearInterval(roundTimerID);

  // Count down every second
  roundTimerID = setInterval(function () {
    roundTimeLeft--;

    // When it hits zero and the player hasn't answered, auto-skip
    if (roundTimeLeft <= 0) {
      clearInterval(roundTimerID);
      if (!answered) handleSkip();
    }
  }, 1000);
}


// ==============================================
//  SECTION 17: BUILD OUTFIT CARDS
//  Dynamically creates the clickable outfit cards for each round.
//  Always 1 correct card + (CARDS_PER_ROUND - 1) wrong cards, shuffled.
// ==============================================
function buildCards() {
  // Clear any cards from the previous round
  outfitGrid.innerHTML = '';

  // Collect all weather type keys EXCEPT the current one (these are the "wrong" types)
  const wrongKeys = Object.keys(OUTFITS).filter(function (k) {
    return k !== currentWeather.type;
  });

  // Build an array of all outfits from the wrong categories
  let wrongPool = [];
  wrongKeys.forEach(function (k) { //loops through the wrong weather types
    OUTFITS[k].forEach(function (outfit) {//nestead loop to iterate through each outfit in those wrong types
    // Store outfit + it's weather key together 
      wrongPool.push({ key: k, outfit: outfit });
    });
    // Now we have an array (wrongPool) with objects like { key: "rain", outfit: { icon: "🌂", name: "Brolly", tag: "Rainy day 🌧️" }
  });

  // Shuffle the array and take the first 8 wrong cards (from 0 to 9 minus 1)
  const wrongItems = shuffle(wrongPool).slice(0, CARDS_PER_ROUND - 1);// 

  // Combine the 1 correct card with the wrong ones, then shuffle everything together
  const allCards = shuffle([
    { key: currentWeather.type, outfit: correctOutfit },//one obj that contains the correct outfit
    ...wrongItems  // "..." spreads the array that contains the wrong items into the outer array which contains 1 correct item
  ]);

  // Create a DOM card element for each item and add it to the grid
  allCards.forEach(function (item) {
    // Create a new <div> element for this card
    let card = document.createElement('div');

    // Apply the outfit-card CSS class for styling
    card.className = 'outfit-card';

    // Store the weather category key on the card so we can check it on click
    card.dataset.key = item.key;

    // Inject the icon (emoji or <img>), name and tag into the card's HTML
    card.innerHTML =
      '<span class="card-icon">' + item.outfit.icon + '</span>' +
      '<div class="card-name">'  + item.outfit.name + '</div>'  +
      '<div class="card-tag">'   + item.outfit.tag  + '</div>';

    // When this card is clicked, run checkAnswer with the card's key(type of weather) and the element (outfit)
    card.addEventListener('click', function () {
      checkAnswer(item.key, card);
    });

    // Add the finished card to the grid on screen as child element
    outfitGrid.appendChild(card);
  });
}


// ==============================================
//  SECTION 18: CHECK ANSWER
//  Runs when the player clicks an outfit card.
//  Compares the clicked card's weather key to the correct weather type.
// ==============================================
function checkAnswer(clickedKey, clickedCard) {
  // Ignore the click if the player already answered this round
  if (answered) return;

  // Mark this round as answered so further clicks are ignored
  answered = true;

  // Stop the 3-second auto-skip timer since the player has answered
  clearInterval(roundTimerID);

  // Disable all cards and highlight the correct one in green
  outfitGrid.querySelectorAll('.outfit-card').forEach(function (card) {
    // Disable pointer events so no more cards can be clicked
    card.classList.add('disabled');

    // Highlight whichever card belongs to the correct weather type
    if (card.dataset.key === currentWeather.type) {
      card.classList.add('correct');
    }
  });

  // Check if the player's chosen key matches the correct weather type
  if (clickedKey === currentWeather.type) {
    // Correct answer — add 1 to score
    score++;
    showFeedback('correct', '✅ Correct! +1 point — ' + correctOutfit.name);
  } else {
    // Wrong answer — subtract 1 from score
    score--;
    // Also highlight the clicked card in red to show the mistake
    clickedCard.classList.add('wrong');
    showFeedback('wrong', '❌ Wrong! −1 point — Correct: ' + correctOutfit.name);
  }
  
  // Update the score display in the HUD
  scoreDisplay.textContent = score;

  // After 1.2 seconds, move to the next city (if time hasn't run out)
  setTimeout(function () {
    if (timeLeft > 0) showNextCity();
  }, 1200);
}


// ==============================================
//  SECTION 19: HANDLE SKIP
//  Triggered automatically if the player doesn't click within 3 seconds.
//  No score change — just reveals the answer and moves on.
// ==============================================
function handleSkip() {
  // Mark as answered to prevent any delayed clicks from registering
  answered = true;

  // Disable all cards and highlight the correct one in green
  outfitGrid.querySelectorAll('.outfit-card').forEach(function (card) {
    card.classList.add('disabled');
    if (card.dataset.key === currentWeather.type) {
      card.classList.add('correct');
    }
  });

  // Show a neutral "too slow" message
  showFeedback('skip', '⏱ Too slow! — Correct: ' + correctOutfit.name);

  // start a delay of 1.2 s start a delay.After the delay finishes, run the code inside.”
  setTimeout(function () { //Built in func for delay
    if (timeLeft > 0) showNextCity();//Check if the game is still running:Load the next city and start a new round.”
  }, 1200);
}


// ==============================================
//  SECTION 20: END GAME
//  Called when the 45-second timer reaches zero.
//  Shows the results screen with score, message and high-score logic.
// ==============================================
function endGame() {
  // Stop the round timer in case a round was still active
  clearInterval(roundTimerID);

  // Remove the weather background GIF class
  document.body.className = '';

  // Switch to the end/results screen
  showEnd();

  // Display the player's final score
  endScore.textContent = score;

  // Show a different emoji and message depending on how well the player did
  if (score >= 8) {
    endBigEmoji.textContent = '🌞';
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

  // Read the current high score from localStorage (defaults to 0 if not set)
  let best = parseInt(localStorage.getItem('wgHS') || 0);//js function that converts a string to a number. localStorage only stores strings, so we need to convert it back to a number to compare with the player's score.

  // If the player beat the high score, save it and show the gold badge
  if (score > best) {
    endBigEmoji.textContent = '🏆';
    // Save the new high score to localStorage so it persists between sessions
    localStorage.setItem('wgHS', score);
    // Update the high score display on the start screen
    highscoreDisplay.textContent = score;

    // Show the "New High Score!" badge
    newHighscore.style.display = 'inline-block';
  } else {
    // Hide the badge if no new record was set
    newHighscore.style.display = 'none';
  }
}


// ==============================================
//  SECTION 21: BUTTON EVENT LISTENERS
//  Connects each button in the HTML to the correct game function.
//  These run once when the page loads and stay active the whole time.
// ==============================================

// "Start Game" button on the home/start screen
document.getElementById('start-btn').addEventListener('click', function () {
  startGame();
});

// "Play Again" button on the end/results screen
document.getElementById('play-again-btn').addEventListener('click', function () {
  startGame();
});

// "Home" button on the end/results screen — returns to the start screen
document.getElementById('home-btn').addEventListener('click', function () {
  // Remove any weather background GIF class left over from the game
  document.body.className = '';

  // Refresh the high score display in case it was updated this session
  highscoreDisplay.textContent = localStorage.getItem('wgHS') || 0;

  // Show the start screen
  showStart();
});