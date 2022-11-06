const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector("#txtUsername").value.trim();
    const password = document.querySelector("#txtPassword").value.trim();
  
    if (username && password) {
      // trying to login
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Failed to log in");
      }
    }
  };
  
  document
    .querySelector("#loginForm")
    .addEventListener("submit", loginFormHandler);