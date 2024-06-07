document.addEventListener("DOMContentLoaded", function () {
  const jokeButton = document.getElementById("get-joke");
  const jokeText = document.getElementById("joke-text");

  jokeButton.addEventListener("click", function () {
    fetchJoke();
  });

  function fetchJoke() {
    fetch("https://api.api-ninjas.com/v1/dadjokes")
      .then((response) => response.json())
      .then((data) => {
        jokeText.textContent = data.joke;
      })
      .catch((error) => {
        jokeText.textContent = "Failed to fetch joke. Please try again later.";
        console.error("Error fetching joke:", error);
      });
  }
});
