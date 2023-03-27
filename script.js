// Select the button and joke paragraph elements from the DOM
const button = document.querySelector(".container button");
const jokeDiv = document.querySelector(".container .joke p");

// Add an event listener for the DOMContentLoaded event, which fires when the page has finished loading
document.addEventListener("DOMContentLoaded", getJoke);
// Add an event listener for the button click event
button.addEventListener("click", getJoke);
// Define the getJoke function, which retrieves a joke from the API and displays it on the page
async function getJoke() {
  // Use the fetch API to retrieve a random joke from the icanhazdadjoke.com API
  const jokeData = await fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single", {
    headers: {
      Accept: "application/json" // Set the "Accept" header to request a JSON response from the API
    }
  });
  // Parse the response data as JSON
  const jokeObj = await jokeData.json();
  // Update the joke paragraph element with the text of the retrieved joke
  jokeDiv.innerHTML = jokeObj.joke;
  // Log the response data to the console for debugging purposes
  console.log(jokeData);
}
