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