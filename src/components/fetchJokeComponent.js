import axios from "axios";
const jokeComponent = () => {
  fetch("https://icanhazdadjoke.com/", {
    //fetch("https://httpstat.us/404", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const element = document.createElement("p");
      element.innerHTML = `Fetch: ${data.joke}`;
      document.querySelector("main").append(element);
    })
    .catch((error) => console.error("error: " + error));
};
export default jokeComponent;
