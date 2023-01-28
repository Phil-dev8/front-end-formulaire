document.addEventListener("DOMContentLoaded", () => {
  console.log("document loaded");

  document
    .querySelector("#contactForm")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      try {
        const data = {
          firstname: document.querySelector("#firstname").value,
          lastname: document.querySelector("#lastname").value,
          email: document.querySelector("#email").value,
          subject: document.querySelector("#subject").value,
          message: document.querySelector("#message").value,
        };

        const response = await axios.post(
          "https://site--back-end-formulaire--nm6dw4wybf2m.code.run/form",
          data
        );
        res.status(200).json(response);
      } catch (error) {
        res.status(400).json({ message: "There is a problem" });
      }
    });
});
