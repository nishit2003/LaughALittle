import config from "./config.js";

const dadButton = document.getElementById("dad-joke");
const jokeButton = document.getElementById("normal-joke");
const factButton = document.getElementById("get-fact");

const jokeText = document.getElementById("joke-text");

dadButton.addEventListener("click", function () {
  fetchDadJoke();
});

function fetchDadJoke() {
  fetch(config.API_URL_DAD, {
    headers: {
      "X-Api-Key": config.API_KEY,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      jokeText.textContent = data[0].joke;
    })
    .catch((error) => {
      jokeText.textContent = "Failed to fetch joke. Please try again later.";
      console.error("Error fetching joke:", error);
    });
}

jokeButton.addEventListener("click", function () {
  fetchJoke();
});

function fetchJoke() {
  fetch(config.API_URL, {
    headers: {
      "X-Api-Key": config.API_KEY,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      jokeText.textContent = data[0].joke;
    })
    .catch((error) => {
      jokeText.textContent = "Failed to fetch joke. Please try again later.";
      console.error("Error fetching joke:", error);
    });
}

factButton.addEventListener("click", function () {
  fetchFact();
});

function fetchFact() {
  fetch(config.API_URL_FACT, {
    headers: {
      "X-Api-Key": config.API_KEY,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      jokeText.textContent = data[0].fact;
    })
    .catch((error) => {
      jokeText.textContent = "Failed to fetch joke. Please try again later.";
      console.error("Error fetching joke:", error);
    });
}
