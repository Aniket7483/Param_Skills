document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("newsletter-form");
  if (!form) return;

  const emailInput = document.getElementById("newsletter-email");
  const msg = document.getElementById("newsletter-msg");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    if (!email) return;

    try {
      const res = await fetch("https://formspree.io/f/xjknngrl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      if (res.ok) {
        msg.innerText = "Thanks for subscribing!";
        msg.style.color = "green";
        form.reset();
      } else {
        msg.innerText = "Something went wrong.";
        msg.style.color = "red";
      }
    } catch {
      msg.innerText = "Network error. Try later.";
      msg.style.color = "red";
    }
  });

});
