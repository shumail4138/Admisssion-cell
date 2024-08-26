document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Mocking user authentication (replace with actual logic)
  if (username === 'admin' && password === 'password') {
    // Redirect to dashboard or another page on successful login
    window.location.href = 'placementcell.html', "_blank";
  } else {
    document.getElementById('errorMessage').textContent = 'Invalid username or password. Please try again.';
  }
});
