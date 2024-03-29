function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  // Check if entered credentials match the provided ones
  if (username === "priyanshutyagi002@gmail.com" && password === "Aadi@8218") {
    alert("Login successful!");
    // Redirect to profile page or perform other actions here
    // Example: window.location.href = "profile.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
}
  