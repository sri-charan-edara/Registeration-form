document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();
  let message = document.getElementById("message");

  if (username.length < 3) {
    message.style.color = "#ff6b6b";
    message.textContent = "⚠ Username must be at least 3 characters.";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    message.style.color = "#ff6b6b";
    message.textContent = "⚠ Enter a valid email address.";
    return;
  }

  if (password.length < 6) {
    message.style.color = "#ff6b6b";
    message.textContent = "⚠ Password must be at least 6 characters.";
    return;
  }

  if (password !== confirmPassword) {
    message.style.color = "#ff6b6b";
    message.textContent = "⚠ Passwords do not match.";
    return;
  }

  message.style.color = "#4cd137";
  message.textContent = "✅ Registration successful 🎉";
  document.getElementById("registerForm").reset();
});
