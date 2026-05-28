# 👥 User Stories & Acceptance Criteria — WeatherGame 🌍

---

## ✅ Must-Have

### 0️⃣ User Story 0 – Dark and light mode toggle (could-have)

**User story:**  
As a player, I want to switch between dark and light mode, so I can play comfortably in different lighting conditions and according to my personal preference.

### Acceptance Criteria
- A toggle button is visible in the navbar at all times.
- Clicking it switches the entire interface between light and dark colour schemes.
- The button label updates to reflect the current mode.
- All screens, cards, and UI elements adapt correctly to both modes.

### Tasks
- Define two sets of CSS variables: default (light) under `:root` and dark under `[data-dark="1"]`.
- Toggle the `data-dark` attribute on the `<html>` element when the button is clicked.
- Update the button text between "🌙 Dark" and "☀️ Light" on each toggle.

### 1️⃣ User Story 1 – Gameplay with timed rounds (must-have)

**User story:**  
As a player, I want to see a random city with its real current weather and choose the correct outfit from a set of cards, so I can play a fast and engaging guessing game.

### Acceptance Criteria
- A random city is displayed each round with its real live weather fetched from an external API.
- Nine outfit cards are shown per round — one correct and eight wrong — shuffled in a random order.
- The player can click a card to submit their answer before time runs out.
- The correct card is highlighted green and the wrong card red after the player answers.

### Tasks
- Integrate the Open-Meteo API to fetch live weather data using city coordinates.
- Implement the `buildCards()` function to generate 1 correct and 8 wrong outfit cards per round.
- Implement the `checkAnswer()` function to compare the clicked card against the correct weather type.
- Apply `.correct` and `.wrong` CSS classes to the cards after the player answers.

---

### 2️⃣ User Story 2 – 45-second game timer with urgent state (must-have)

**User story:**  
As a player, I want a visible countdown timer that limits my total game time to 45 seconds, so I feel pressure and urgency while playing.

### Acceptance Criteria
- A circular timer is displayed in the HUD and counts down from 45 to 0.
- The timer turns red when 10 or fewer seconds remain.
- The game ends automatically when the timer reaches zero.

### Tasks
- Implement `startGameTimer()` using `setInterval` to decrement `timeLeft` every second.
- Update the timer display in the DOM each tick.
- Add the `.urgent` CSS class to the timer element when `timeLeft` drops to 10 or below.
- Call `endGame()` when `timeLeft` reaches zero and clear both the game and round timers.

---

### 3️⃣ User Story 3 – Instant feedback after each answer (must-have)

**User story:**  
As a player, I want to immediately see whether my answer was correct or wrong after clicking a card, so I can learn and stay engaged with the game.

### Acceptance Criteria
- A feedback bar appears below the cards after every answer showing a clear message.
- Correct answers show a green bar with "+1 point" and the outfit name.
- Wrong answers show a red bar with "−1 point" and the correct outfit name.
- Skipped rounds show a neutral bar revealing the correct answer.

### Tasks
- Implement `showFeedback()` to display a coloured message bar below the outfit grid.
- Apply `.correct-fb`, `.wrong-fb`, and `.skip-fb` CSS classes depending on the outcome.
- Pass the correct outfit name into the feedback message for all three outcomes.

---

### 4️⃣ User Story 4 – Scoring system with positive and negative points (must-have)

**User story:**  
As a player, I want my score to increase when I answer correctly and decrease when I answer wrongly, so I am rewarded for accuracy and penalised for guessing randomly.

### Acceptance Criteria
- The score starts at 0 at the beginning of every game.
- A correct answer adds 1 point to the score.
- A wrong answer subtracts 1 point from the score.
- A skipped round (time ran out) does not change the score.
- The current score is always visible in the HUD during gameplay.

### Tasks
- Initialise `score = 0` in `resetState()`.
- Increment `score++` on correct answers and decrement `score--` on wrong answers in `checkAnswer()`.
- Update `scoreDisplay.textContent` after every answer.

---

### 5️⃣ User Story 5 – End screen with result summary and navigation (must-have)

**User story:**  
As a player, I want to see my final score and a personalised result message when the game ends, so I know how well I did and can choose to play again or go back home.

### Acceptance Criteria
- The game screen is replaced by an end screen when the timer hits zero.
- The final score is displayed prominently.
- A result message and emoji are shown based on the score range.
- A "Play Again" button restarts the game immediately.
- A "Home" button returns to the start screen.

### Tasks
- Implement `endGame()` to call `showEnd()` and populate the score, emoji, and message.
- Define four message tiers: 8+, 5–7, 2–4, and below 2.
- Wire up `play-again-btn` and `home-btn` click listeners to the correct functions.

---

## 🔵 Should-Have

---

### 6️⃣ User Story 6 – Persistent high score across sessions (should-have)

**User story:**  
As a returning player, I want my best score to be saved between sessions, so I can challenge myself to beat my own record every time I play.

### Acceptance Criteria
- The best score is displayed on the start screen when the page loads.
- If the player beats their previous best, the new score is saved automatically.
- A "🎉 New best score!" badge appears on the end screen when a new record is set.
- The high score persists after closing and reopening the browser tab.

### Tasks
- Use `localStorage.getItem('wgHS')` to load the saved high score on page load.
- Compare `score` against the saved value in `endGame()` and call `localStorage.setItem()` if beaten.
- Show or hide the `new-highscore` badge element based on whether the record was broken.

---

### 7️⃣ User Story 7 – Auto-skip for slow rounds (should-have)

**User story:**  
As a player, I want the game to move on automatically if I take too long on a round, so the pace of the game stays fast and the 45-second timer remains meaningful.

### Acceptance Criteria
- Each round has a 3-second window for the player to click a card.
- If no card is clicked within 3 seconds, the round is skipped automatically.
- The correct outfit is revealed and a "Too slow!" message is shown.
- The game then moves to the next city after a short delay.

### Tasks
- Implement `startRoundTimer()` using `setInterval` with a 3-second countdown.
- Call `handleSkip()` automatically when `roundTimeLeft` reaches zero and `answered` is still false.
- Implement `handleSkip()` to reveal the correct card and show the skip feedback bar.

---

### 8️⃣ User Story 8 – Dynamic weather background (should-have)

**User story:**  
As a player, I want the page background to change to a weather-themed animated GIF each round, so the game feels visually immersive and the weather condition is immediately obvious.

### Acceptance Criteria
- The background changes to a relevant animated GIF when a new city is shown.
- Four backgrounds are available: hot, cold, rain, and snow.
- A semi-transparent overlay ensures the text and cards remain readable over the GIF.
- The background is removed when the game ends and the end screen is shown.

### Tasks
- Implement `setWeatherBg()` to remove previous weather classes and add the new one to `document.body`.
- Define `.weather-hot`, `.weather-cold`, `.weather-rain`, `.weather-snow` CSS classes with GIF background URLs.
- Add a `::before` pseudo-element overlay in CSS to maintain text readability.
- Call `document.body.className = ''` in `endGame()` and `resetState()` to clear the background.


### 9️⃣ User Story 9 – Instant city transitions via pre-fetching (should-have)

**User story:**  
As a player, I want the next city to load instantly after I answer, so there is no waiting or loading delay that breaks the pace of the game.
 
### Acceptance Criteria
- After answering, the next city appears immediately with no visible loading state.
- The "Fetching real weather..." loading message only appears for the very first city of a game.
- Pre-fetching happens silently in the background while the player is reading the current round.

### Tasks
- Implement `prefetchNextCity()` to fetch weather data for a randomly selected city and store it in `nextCityData`.
- Call `prefetchNextCity()` immediately after loading the current city in `showNextCity()`.
- In `showNextCity()`, check if `nextCityData` exists and use it instantly before falling back to a live fetch.

---

## 🟡 Could-Have

1️⃣0️⃣ User Story 10 – Difficulty levels (could-have)
**User story:** 
As a player, I want to choose a difficulty level before starting the game, so can challenge myself as my skills improve or play casually at my own pace.
### Acceptance Criteria

- Three difficulty options are available on the start screen: Easy, Medium, and Hard.
- Easy gives the player 5 seconds per round and 60 seconds total.
- Medium keeps the current settings: 3 seconds per round and 45 seconds total.
- Hard gives the player 2 seconds per round and 30 seconds total.
- The selected difficulty is clearly highlighted before the game starts.

### Tasks

- Add three difficulty buttons to the start screen HTML.
- Store the selected difficulty in a variable and adjust GAME_DURATION and - - round timer length accordingly.
- Highlight the active difficulty button using a CSS class.


1️⃣1️⃣ User Story 11 – Sound effects and audio feedback (could-have)
**User story:** 
As a player, I want to hear sound effects when I answer correctly or wrongly, so the game feels more lively and satisfying to play.
### Acceptance Criteria

- A positive sound plays when the player selects the correct outfit.
- A negative sound plays when the player selects a wrong outfit.
- A ticking sound plays when the game timer drops below 10 seconds.
- A mute/unmute button is available in the navbar so the player can turn sounds off.

### Tasks

- Add audio files for correct, wrong, and ticking sounds.
Trigger the appropriate audio in checkAnswer() and inside the game timer interval.
- Add a mute toggle button to the navbar that sets a global isMuted flag.
