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
    // 🌨️ SNOWY — Southern Hemisphere winter (snowing NOW in May/June)
{ name: "Ushuaia",      country: "Argentina 🇦🇷",   lat: -54.8, lon: -68.3 },
{ name: "Bariloche",    country: "Argentina 🇦🇷",   lat: -41.1, lon: -71.3 },
{ name: "Queenstown",   country: "New Zealand 🇳🇿",  lat: -45.0, lon: 168.7 },
{ name: "Mount Cook",   country: "New Zealand 🇳🇿",  lat: -43.6, lon: 170.1 },
{ name: "Dunedin",      country: "New Zealand 🇳🇿",  lat: -45.9, lon: 170.5 },
{ name: "Punta Arenas", country: "Chile 🇨🇱",        lat: -53.2, lon: -70.9 },
{ name: "Ushuaia",      country: "Argentina 🇦🇷",   lat: -54.8, lon: -68.3 },
{ name: "Bariloche",    country: "Argentina 🇦🇷",   lat: -41.1, lon: -71.3 },
{ name: "Queenstown",   country: "New Zealand 🇳🇿",  lat: -45.0, lon: 168.7 },
{ name: "Mount Cook",   country: "New Zealand 🇳🇿",  lat: -43.6, lon: 170.1 },
{ name: "Dunedin",      country: "New Zealand 🇳🇿",  lat: -45.9, lon: 170.5 },
{ name: "Punta Arenas", country: "Chile 🇨🇱",        lat: -53.2, lon: -70.9 },
];


// ==============================================
//  OUTFIT DATA
// ==============================================
const OUTFITS = {

  hot: [
    { icon: "🩳", name: "Shorts",           tag: "Hot weather ☀️" },
    { icon: "👗", name: "Summer dress",      tag: "Hot weather ☀️" },
    { icon: "🩱", name: "Bodysuit",          tag: "Hot weather ☀️" },
    { icon: "<img src='assets/images/icons-outfits/skirt.webp' class='card-img-icon'>", name: "Skirt", tag: "Hot weather ☀️" },
    { icon: "👚", name: "Crop top",          tag: "Hot weather ☀️" },
    { icon: "🥿", name: "Sandals & vest",    tag: "Hot weather ☀️" },
    { icon: "🩴", name: "Flip flops",        tag: "Hot weather ☀️" },
    { icon: "👒", name: "Sun hat & dress",   tag: "Hot weather ☀️" },
    { icon: "👙", name: "Swimwear",          tag: "Hot weather ☀️" },
    { icon: "🧢", name: "Cap & light shirt", tag: "Hot weather ☀️" },
  ],

  cold: [
    { icon: "👖", name: "Jeans",          tag: "Cold weather ❄️" },  // BUG 5 FIXED — wrong tag corrected
    { icon: "<img src='assets/images/icons-outfits/coat.webp' class='card-img-icon'>", name: "Winter coat", tag: "Cold weather ❄️" },
    { icon: "<img src='assets/images/icons-outfits/jacket.webp' class='card-img-icon'>", name: "Jacket",            tag: "Cold weather ❄️" },
    { icon: "🧣", name: "Scarf & wool coat", tag: "Cold weather ❄️" },
    { icon: "<img src='assets/images/icons-outfits/boots.webp' class='card-img-icon'>", name: "Boots", tag: "Cold weather ❄️" },
    { icon: "🧦", name: "Thick socks & coat",tag: "Cold weather ❄️" },
    { icon: "👢", name: "Knee boots & coat", tag: "Cold weather ❄️" },
    { icon: "<img src='assets/images/icons-outfits/thick-jumper.webp' class='card-img-icon'>", name: "Thick Jumper", tag: "Cold weather ❄️" },
    { icon: "<img src='assets/images/icons-outfits/jumper-scarf.webp' class='card-img-icon'>", name: "Jumper & scarf", tag: "Cold weather ❄️" },
    { icon: "<img src='assets/images/icons-outfits/winter-hat.webp' class='card-img-icon'>", name: "Winter Hat", tag: "Cold weather ❄️" },
  ],

  rain: [
    { icon: "🌂", name: "Brolly",                tag: "Rainy day 🌧️" },
    { icon: "☂️", name: "Brolly & coat",          tag: "Rainy day 🌧️" },  // BUG 2 FIXED — name added
    { icon: "<img src='assets/images/icons-outfits/rain-coat.webp' class='card-img-icon'>",         name: "Rain Coat",          tag: "Rainy day 🌧️" },
    { icon: "<img src='assets/images/icons-outfits/waterproof-boots.webp' class='card-img-icon'>",  name: "Waterproof boots",   tag: "Rainy day 🌧️" },
    { icon: "<img src='assets/images/icons-outfits/waterproof-jacket.webp' class='card-img-icon'>", name: "Waterproof Jacket",  tag: "Rainy day 🌧️" },
    { icon: "<img src='assets/images/icons-outfits/waterproof-suit.webp' class='card-img-icon'>",   name: "Waterproof Suit",     tag: "Rainy day 🌧️" },
    { icon: "<img src='assets/images/icons-outfits/rain-hat.webp' class='card-img-icon'>", name: "Rain Hat ",tag: "Rainy day 🌧️" },
  ],

  snow: [
    { icon: "<img src='assets/images/icons-outfits/snow-suit.webp' class='card-img-icon'>",     name: "Snow Suit",       tag: "Snowy day ⛄" },
    { icon: "<img src='assets/images/icons-outfits/snow-gloves.webp' class='card-img-icon'>",   name: "Snow Gloves",tag: "Snowy day ⛄" },
    { icon: "<img src='assets/images/icons-outfits/ski-jacket.webp' class='card-img-icon'>",    name: "Ski jacket",      tag: "Snowy day ⛄" },
    { icon: "<img src='assets/images/icons-outfits/scarf-hat-snow.webp' class='card-img-icon'>",name: "Hat & scarf",  tag: "Snowy day ⛄" },
    { icon: "🎿",  name: "Ski Shoes", tag: "Snowy day ⛄" },
    { icon: "<img src='assets/images/icons-outfits/snow-boots.webp' class='card-img-icon'>",    name: "Snow Boots",      tag: "Snowy day ⛄" },
    

  ],

  // BUG 1 FIXED — mild is now INSIDE the OUTFITS object
  mild: [
    { icon: "🧥", name: "Light jacket",      tag: "Mild weather ⛅" },
    { icon: "👟", name: "Trainers",  tag: "Mild weather ⛅" },
    { icon:"<img src='assets/images/icons-outfits/light-trousers.webp' class='card-img-icon'>", name: "Light Trousers", tag: "Mild weather ⛅" },
    { icon: "<img src='assets/images/icons-outfits/shirt.webp' class='card-img-icon'>", name: "Light Shirt",     tag: "Mild weather ⛅" },
    { icon: "<img src='assets/images/icons-outfits/light-shoes.webp' class='card-img-icon'>", name: "Light Shoes",       tag: "Mild weather ⛅" },
    { icon: "<img src='assets/images/icons-outfits/suit-tie.webp' class='card-img-icon'>", name: "Suit & Tie",      tag: "Mild weather ⛅" },
    { icon: "<img src='assets/images/icons-outfits/light-jacket.webp' class='card-img-icon'>", name: "light Jacket", tag:"Mild weather ⛅" },
    { icon: "<img src='assets/images/icons-outfits/trench.webp' class='card-img-icon'>", name: "Women Trench", tag:"Mild weather ⛅" },
  ],
}


// ==============================================
//  WEATHER API — Open-Meteo (free, no key)
// ==============================================

function getWeatherType(code, temp) {
  if ([71,72,73,74,75,76,77,85,86].includes(code)) return "snow";
  if ([51,52,53,55,56,57,61,62,63,64,65,66,67,80,81,82,95,96,99].includes(code)) return "rain";
  if (temp >= 20) return "hot";
  if (temp >= 10) return "mild";
  return "cold";
}

function getWeatherEmoji(type) {
  const emojis = { hot: "☀️", cold: "🥶", rain: "🌧️", snow: "❄️", mild: "⛅" };
  return emojis[type];
}

function getWeatherDesc(type, temp) {
  if (type === "hot")  return "Hot & sunny · " + temp + "°C";
  if (type === "cold") return "Cold weather · " + temp + "°C";
  if (type === "rain") return "Rainy · " + temp + "°C";
  if (type === "snow") return "Snowing · " + temp + "°C";
  if (type === "mild") return "Mild & cloudy · " + temp + "°C";
}

async function fetchWeather(city) {

  const url = "https://api.open-meteo.com/v1/forecast?latitude=" + city.lat + "&longitude=" + city.lon + "&current_weather=true";
  const response = await fetch(url);
  const data     = await response.json();
  const temp     = Math.round(data.current_weather.temperature);
  const code     = data.current_weather.weathercode;
  const type     = getWeatherType(code, temp);
  return { type: type, temp: temp, emoji: getWeatherEmoji(type), desc: getWeatherDesc(type, temp) };
}


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
let nextCityData   = null;


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
  screenStart.style.display = 'flex';   // ✅ changed from 'block'
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
  screenEnd.style.display   = 'flex';   // ✅ changed from 'block'
}


// ==============================================
//  HELPER FUNCTIONS
// ==============================================

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(arr) {
  let copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function showFeedback(type, msg) {
  feedbackBar.textContent   = msg;
  feedbackBar.className     = 'feedback-bar ' + type + '-fb';
  feedbackBar.style.display = 'block';
}

function showLoading() {
  feedbackBar.textContent   = '🌍 Fetching real weather...';
  feedbackBar.className     = 'feedback-bar skip-fb';
  feedbackBar.style.display = 'block';
}

// BUG 3 FIXED — mild added to remove list
function setWeatherBg(weather) {
  document.body.classList.remove('weather-hot', 'weather-cold', 'weather-rain', 'weather-snow', 'weather-mild');
  document.body.classList.add('weather-' + weather);
}


// ==============================================
//  PRE-FETCH
// ==============================================
async function prefetchNextCity() {
  let city    = pickRandom(CITIES);
  let weather = await fetchWeather(city);
  nextCityData = { city: city, weather: weather };
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
//  RESTART GAME
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


// ==============================================
//  SHOW NEXT CITY
// ==============================================
async function showNextCity() {
  answered = false;
  feedbackBar.style.display = 'none';
  feedbackBar.className     = 'feedback-bar';

  cityCount++;
  cityCountEl.textContent = cityCount;

  if (nextCityData) {
    currentCity    = nextCityData.city;
    currentWeather = nextCityData.weather;
    nextCityData   = null;
  } else {
    currentCity = pickRandom(CITIES);
    showLoading();
    currentWeather = await fetchWeather(currentCity);
    feedbackBar.style.display = 'none';
  }
/* 👇 Testing for dev tool
  console.log(currentCity.name, '| temp:', currentWeather.temp, '| code from API gives type:', currentWeather.type);
*/
  prefetchNextCity();

  bannerEmoji.textContent = currentWeather.emoji;
  bannerCity.textContent  = currentCity.name + ', ' + currentCity.country;
  bannerDesc.textContent  = currentWeather.desc;

  setWeatherBg(currentWeather.type);

  correctOutfit = pickRandom(OUTFITS[currentWeather.type]);
  buildCards();
  startRoundTimer();
}


// ==============================================
//  3-SECOND ROUND TIMER
// ==============================================
function startRoundTimer() {
  let roundTimeLeft = 3;
  if (roundTimerID) clearInterval(roundTimerID);

  roundTimerID = setInterval(function() {
    roundTimeLeft--;
    if (roundTimeLeft <= 0) {
      clearInterval(roundTimerID);
      if (!answered) handleSkip();
    }
  }, 1000);
}


// ==============================================
//  BUILD OUTFIT CARDS
// ==============================================
function buildCards() {
  outfitGrid.innerHTML = '';

  const wrongKeys = Object.keys(OUTFITS).filter(function(k) {
    return k !== currentWeather.type;
  });

  let wrongPool = [];
  wrongKeys.forEach(function(k) {
    OUTFITS[k].forEach(function(outfit) {
      wrongPool.push({ key: k, outfit: outfit });
    });
  });

  const wrongItems = shuffle(wrongPool).slice(0, CARDS_PER_ROUND - 1);

  const allCards = shuffle([
    { key: currentWeather.type, outfit: correctOutfit },
    ...wrongItems
  ]);

  allCards.forEach(function(item) {
    let card = document.createElement('div');
    card.className   = 'outfit-card';
    card.dataset.key = item.key;

    card.innerHTML =
      '<span class="card-icon">' + item.outfit.icon + '</span>' +
      '<div class="card-name">'  + item.outfit.name + '</div>'  +
      '<div class="card-tag">'   + item.outfit.tag  + '</div>';

    card.addEventListener('click', function() {
      checkAnswer(item.key, card);
    });

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

  outfitGrid.querySelectorAll('.outfit-card').forEach(function(card) {
    card.classList.add('disabled');
    if (card.dataset.key === currentWeather.type) {
      card.classList.add('correct');
    }
  });

  if (clickedKey === currentWeather.type) {
    score++;
    showFeedback('correct', '✅ Correct! +1 point — ' + correctOutfit.name);
  } else {
    score--;
    clickedCard.classList.add('wrong');
    showFeedback('wrong', '❌ Wrong! −1 point — Correct: ' + correctOutfit.name);
  }

  scoreDisplay.textContent = score;

  setTimeout(function() {
    if (timeLeft > 0) showNextCity();
  }, 1200);
}


// ==============================================
//  HANDLE SKIP
// ==============================================
function handleSkip() {
  answered = true;

  outfitGrid.querySelectorAll('.outfit-card').forEach(function(card) {
    card.classList.add('disabled');
    if (card.dataset.key === currentWeather.type) {
      card.classList.add('correct');
    }
  });

  showFeedback('skip', '⏱ Too slow! — Correct: ' + correctOutfit.name);

  setTimeout(function() {
    if (timeLeft > 0) showNextCity();
  }, 1200);
}


// ==============================================
//  END GAME
// ==============================================
function endGame() {
  clearInterval(roundTimerID);
  document.body.className = '';
  showEnd();

  endScore.textContent = score;

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
}


// ==============================================
//  BUTTON EVENT LISTENERS
// ==============================================

document.getElementById('start-btn').addEventListener('click', function() {
  startGame();
});

document.getElementById('play-again-btn').addEventListener('click', function() {
  startGame();
});

document.getElementById('home-btn').addEventListener('click', function() {
  document.body.className = '';
  highscoreDisplay.textContent = localStorage.getItem('wgHS') || 0;
  showStart();
});