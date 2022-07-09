import "./styles/main.scss";
import rustaceans from "./assets/does_not_compile.svg";

const rustImg = document.getElementById("rust");
rustImg.src = rustaceans;

// dynamic import from node_module
async function getComponent() {
  const element = document.createElement("div");

  const { default: _ } = await import(/* webpackPrefetch: true */ "lodash");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

// dynamic import from another module
async function getJoke() {
  const element = document.createElement("div");

  const { default: generateJoke } = await import("./generate_joke");

  const joke = await generateJoke();

  console.log(joke);

  element.innerHTML = joke;

  return element;
}

document.getElementById("dynamic-load-lodash").addEventListener("click", () => {
  getComponent().then((component) => {
    document.body.appendChild(component);
  });
});

document.getElementById("dynamic-load-joke").addEventListener("click", () => {
  getJoke().then((joke) => {
    document.body.appendChild(joke);
  });
});

document
  .getElementById("dynamic-load-author")
  .addEventListener("click", async () => {
    const { default: getAuthor } = await import("./get_author");
    document.getElementById("author").innerHTML = getAuthor();
  });
