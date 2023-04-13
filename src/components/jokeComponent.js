import axios from "axios";
const jokeComponent = () => {
  axios
    .get("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
    .then((response) => {
      const element = document.createElement("p");
      element.innerHTML = `.then: ${response.data.joke}`;
      document.querySelector("main").append(element);
    });
};
export default jokeComponent;
