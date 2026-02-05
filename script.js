document.addEventListener("DOMContentLoaded", function () {
  const fontSizeInput = document.getElementById("fontsize");
  const fontColorInput = document.getElementById("fontcolor");
  const form = document.querySelector("form");

  // Prevent JS crash if elements are missing
  if (!fontSizeInput || !fontColorInput || !form) {
    return;
  }

  // -------- APPLY STYLES FROM COOKIES ON PAGE LOAD --------
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    document.body.style.fontSize = savedFontSize + "px";
  }

  if (savedFontColor) {
    document.body.style.color = savedFontColor;
  }

  // -------- FORM SUBMIT HANDLER --------
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fontSize = fontSizeInput.value;
    const fontColor = fontColorInput.value;

    // Save to cookies
    document.cookie = `fontsize=${fontSize}; path=/`;
    document.cookie = `fontcolor=${fontColor}; path=/`;

    // Apply styles immediately
    document.body.style.fontSize = fontSize + "px";
    document.body.style.color = fontColor;
  });
});

// -------- COOKIE HELPER FUNCTION --------
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
