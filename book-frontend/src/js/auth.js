const API_URL = "http://localhost:1337/api";

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch(`${API_URL}/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        identifier: email,
        password
      })
    });

    const data = await response.json();

    if (data.jwt) {
      localStorage.setItem("token", data.jwt);
      window.location.href = "/books/";
    } else {
      alert("Login failed");
    }

  } catch (error) {
    console.error(error);
  }
}

async function signup() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  try {
    const response = await fetch(`${API_URL}/auth/local/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    });

    const data = await response.json();

    if (data.jwt) {
      localStorage.setItem("token", data.jwt);
      window.location.href = "/books/";
    } else {
      alert("Signup failed");
    }

  } catch (error) {
    console.error(error);
  }
}