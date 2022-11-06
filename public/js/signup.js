const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const userName = document.querySelector("#username-input-signup").value.trim();
    //const email = document.querySelector("#txtEmail").value.trim().toLowerCase();
    const password = document.querySelector("#password-input-signup").value.trim();
  
    if (userName && password) {
      // trying to create a user
      const response = await fetch("/api/users/", {
        method: "POST",
        body: JSON.stringify({ username: userName, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Failed to create user.");
      }
    }
  };
  
  document
    .querySelector("#signup-form")
    .addEventListener("submit", loginFormHandler);