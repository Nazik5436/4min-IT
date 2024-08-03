document.addEventListener('DOMContentLoaded', (event) => {
  loadSettings();
});

function saveSettings() {
  const colorScheme = document.getElementById('color-scheme').value;
  const fontSize = document.getElementById('font-size').value;
  const language = document.getElementById('language').value;

  localStorage.setItem('colorScheme', colorScheme);
  localStorage.setItem('fontSize', fontSize);
  localStorage.setItem('language', language);

  applySettings();
}

function loadSettings() {
  const colorScheme = localStorage.getItem('colorScheme') || 'light';
  const fontSize = localStorage.getItem('fontSize') || '16';
  const language = localStorage.getItem('language') || 'en';

  document.getElementById('color-scheme').value = colorScheme;
  document.getElementById('font-size').value = fontSize;
  document.getElementById('language').value = language;

  applySettings();
}

function applySettings() {
  const colorScheme = document.getElementById('color-scheme').value;
  const fontSize = document.getElementById('font-size').value;

  document.body.className = colorScheme;
  document.body.style.fontSize = fontSize + 'px';
}
