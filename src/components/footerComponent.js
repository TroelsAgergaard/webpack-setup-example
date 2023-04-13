const footerComponent = () => {
  const element = document.createElement("h2");
  element.innerHTML += "Her er min footer";
  document.querySelector('footer').append(element);
};
export default footerComponent;
