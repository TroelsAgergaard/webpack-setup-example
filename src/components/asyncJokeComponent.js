import axios from "axios";
const getJoke = async () => {
  try {
    //const response = await axios.get("https://icanhazdadjoke.com/", {
    const response = await axios.get("https://httpstat.us/404", {
      headers: {
        Accept: "application/json",
      },
    });
    const element = document.createElement("p");
    element.innerHTML = `Async: ${response.data.joke}`;
    document.querySelector("main").append(element);
  } catch (error) {
    console.error(error);
  }
};
export default getJoke;
