let correctPIN = "1234";
let attempts = 0;
const maxAttempts = 3;

function validatePIN() {
  const message = document.getElementById("message");
  let userPIN = document.getElementById("pinInput").value;

  // While loop to check for correct PIN and number of attempts
  while (attempts < maxAttempts) {
    if (userPIN === correctPIN) {
      message.textContent = "Access Granted! Welcome!";
      message.style.color = "green";
      document.getElementById("pinInput").disabled = true;
      return; // Exit the function when access is granted
    } else {
      attempts++;
      if (attempts < maxAttempts) {
        message.textContent = `Incorrect PIN. You have ${
          maxAttempts - attempts
        } attempts left.`;
        message.style.color = "red";
      } else {
        message.textContent = "Too many attempts! Access denied.";
        message.style.color = "red";
        document.getElementById("pinInput").disabled = true;
        return; // Exit the function after too many attempts
      }
      break; // Exit the while loop and wait for the user to try again
    }
  }
}
