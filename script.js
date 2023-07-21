  function register() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Validation - Check if the username and password fields are not empty
    if (username.trim() === "" || password.trim() === "") {
      alert("Please fill in all the fields");
      return;
    }
    
    // Check if the username is already registered
    if (localStorage.getItem(username)) {
      alert("Username already exists");
      return;
    }
    
    // Store the username and password in local storage
    localStorage.setItem(username, password);
    
    // Display a success message
    window.location.href = "https://krishnaprasath.netlify.app/";
    alert("Registration successful!");
    
    // Clear the form fields
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  }

  function login() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    
    // Validation - Check if the username and password fields are not empty
    if (username.trim() === "" || password.trim() === "") {
      alert("Please fill in all the fields");
      return;
    }
    
    // Check if the username exists and the password matches
    var storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
      window.location.href = "https://krishnaprasath.netlify.app/";
      alert("Login successful");
    } else {
      alert("Invalid username or password");
    }
    
    // Clear the form fields
    document.getElementById("login-username").value = "";
    document.getElementById("login-password").value = "";
  }