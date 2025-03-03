/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPassword = (inputPassword, inputIcon) => {
  const input = document.getElementById(inputPassword),
        iconEye = document.getElementById(inputIcon)

  iconEye.addEventListener('click', () => {
    // Change password to text
    if (input.type === 'password') {
      // Switch to text
      input.type = 'text'

      // Add icon
      iconEye.classList.add('ri-eye-line')

      // Remove icon
      iconEye.classList.remove('ri-eye-off-line')
    } else {
      // Change to password
      input.type = 'password'

      // Remove icon
      iconEye.classList.remove('ri-eye-line')

      // Add icon
      iconEye.classList.add('ri-eye-off-line')
    }
  })
}

showHiddenPassword('password', 'input-icon')


/*======================== USER AUTHORIZATION ================================================*/

function handleLogin() {
  event.preventDefault(); // Prevents the form from reloading the page.

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Basic validation
  if (!email || !password) {
    alert("Please fill in both email and password.");
    return false;
  }

  // Example: Simple credential check
  if ((email === "prajapatihemchand3@gmail.com" || "hemchand.own@gmail.com") && password === "1234") {
    // Redirect to home page
    window.location.href = "Home.html";
  } else {
    alert("Invalid email or password. Please try again.");
  }

  return false; // Prevent default form submission.
}


