import generateJoke from "./generate_joke";
import "./styles/main.scss";
import rustaceans from "./assets/does_not_compile.svg";

const rustImg = document.getElementById("rust");
rustImg.src = rustaceans;

console.log(generateJoke());
