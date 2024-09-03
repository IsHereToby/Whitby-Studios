// script.js
document
  .getElementById("cs-form-1150")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById("email-1150").value;
    const message = document.getElementById("message-1150").value;

    Email.send({
      Host: "smtp.mailgun.org",
      Username: "postmaster@whitbystudioswebdesign.com",
      Password: "c61516184a8f52403d7f56f7f0add324-777a617d-05cd71bf",
      To: "recipient@example.com", // Change this to the recipient's email
      From: email,
      Subject: "New Message from Contact Form",
      Body: message,
    })
      .then(function (message) {
        alert("Email sent successfully!");
      })
      .catch(function (error) {
        alert("Failed to send email: " + error);
      });
  });
