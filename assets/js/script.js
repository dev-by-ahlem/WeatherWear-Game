// ==============================================
//  DARK / LIGHT MODE TOGGLE
// ==============================================
const themeToggle = document.getElementById('theme-toggle');
let isDark = false;
 
// When the user clicks the themeToggle button, run this function
themeToggle.addEventListener('click', () => {

  // Flip the value of isDark (true becomes false, false becomes true)
  // This is how we "toggle" between dark and light mode
  isDark = !isDark;

  // Apply the new theme to the <html> element by setting the data-dark attribute
  // If isDark is true → set data-dark="1"
  // If isDark is false → set data-dark="0"
  document.documentElement.setAttribute('data-dark', isDark ? '1' : '0');

  // Change the button text depending on the current theme
  // If dark mode is ON → show "☀️ Light"
  // If dark mode is OFF → show "🌙 Dark"
  themeToggle.textContent = isDark ? '☀️ Light' : '🌙 Dark';
});
