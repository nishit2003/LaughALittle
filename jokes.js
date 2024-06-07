const jokeButton = document.getElementById("get-joke");
const jokeText = document.getElementById("joke-text");

jokeButton.addEventListener("click", function () {
  fetchJoke();
});

const API_KEY = "U+UQiJVSK9DUUsrzk8jm7g==KO2ddJH4SJXDazoE";
const API_URL = "https://api.api-ninjas.com/v1/dadjokes";

function fetchJoke() {
  fetch(API_URL, {
    headers: {
      "X-Api-Key": API_KEY,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      jokeText.textContent = data[0].joke;
    })
    .catch((error) => {
      jokeText.textContent = "Failed to fetch joke. Please try again later.";
      console.error("Error fetching joke:", error);
    });
}
