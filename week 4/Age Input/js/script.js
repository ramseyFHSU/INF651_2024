function validateAge() {
  let age;
  const message = document.getElementById("message");

  do {
    age = parseInt(document.getElementById("ageInput").value);
    if (isNaN(age) || age < 0) {
      message.textContent = "Invalid input. Please enter a valid age.";
      message.style.color = "red";
      return;
    } else {
      if (age >= 18) {
        message.textContent =
          "Age entered: " + age + ". You are eligible to vote!";
        message.style.color = "green";
      } else {
        message.textContent =
          "Age entered: " + age + ". You are not eligible to vote.";
        message.style.color = "orange";
      }
      document.getElementById("ageInput").disabled = true;
    }
  } while (isNaN(age) || age < 0);
}
