const headerComponent = () => {
  const element = document.createElement("h1");
  element.innerHTML += "Her er min header";
  document.querySelector("header").append(element);
};
export default headerComponent;
