// Fake login with JSON Server
const API = "http://127.0.0.1:5000";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const res = await fetch(`${API}/users?email=${email}&password=${password}`);
      const users = await res.json();

      if (users.length > 0) {
        localStorage.setItem("user", JSON.stringify(users[0]));
        if (users[0].role === "admin") {
          window.location.href = "admin.html";
        } else {
          window.location.href = "products.html";
        }
      } else {
        alert("Invalid credentials!");
      }
    });
  }
});
