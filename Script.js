// Simple contact form feedback
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const response = document.getElementById("response");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    response.textContent = "Thank you for your message! I'll get back to you soon.";
    form.reset();
  });
});
