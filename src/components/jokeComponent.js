import axios from "axios";
const jokeComponent = () => {
  axios
    //.get("https://httpstat.us/200", {
    .get("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
    .then((response) => {
      const element = document.createElement("p");
      element.innerHTML = `${response.data.joke}`;
      document.querySelector("main").append(element);
    })
    .catch((error) => {
      const element = document.createElement("p");
      element.innerHTML = `Vores joke app har desværre fået influenza `;
      document.querySelector("main").append(element);
    });
};
export default jokeComponent;
