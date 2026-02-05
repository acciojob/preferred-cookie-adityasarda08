//your JS code here. If required.
// Helper: set a cookie
function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/`;
}

// Helper: get a cookie
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const [key, value] = cookies[i].split("=");
    if (key === name) {
      return value;
    }
  }
  return null;
}

// Apply preferences using CSS variables
function applyPreferences(fontSize, fontColor) {
  if (fontSize) {
    document.documentElement.style.setProperty(
      "--fontsize",
      fontSize + "px"
    );
  }

  if (fontColor) {
    document.documentElement.style.setProperty(
      "--fontcolor",
      fontColor
    );
  }
}

// Apply saved preferences on page load
window.addEventListener("DOMContentLoaded", function () {
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    document.getElementById("fontsize").value = savedFontSize;
  }

  if (savedFontColor) {
    document.getElementById("fontcolor").value = savedFontColor;
  }

  applyPreferences(savedFontSize, savedFontColor);
});

// Handle Save button click
document
  .getElementById("preferences-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const fontSize = document.getElementById("fontsize").value;
    const fontColor = document.getElementById("fontcolor").value;

    setCookie("fontsize", fontSize);
    setCookie("fontcolor", fontColor);

    applyPreferences(fontSize, fontColor);
  });
