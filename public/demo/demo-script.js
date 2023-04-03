const IMAGES = ["delorean", "clocktower", "doc", "hoverboard"];
let showEasterEgg = false;

const log = (callback) => setTimeout(callback, 100);

function preloadImage(url) {
  var img = new Image();
  img.src = url;
}

function initialize() {
  console.log("Loading demo...");
  const buttons = document.querySelectorAll("button");

  [...buttons].forEach((button, index) => {
    button.addEventListener("click", () => onClick(button, index + 1));
  });
  preloadImage("/demo/demo_hoverboard.png");
}

function forceRender() {
  const body = document.querySelector("body");
  const placeholder = document.createElement("div");
  body.appendChild(placeholder);
  body.removeChild(placeholder);
}

function printWelcomeMessage() {
  console.log("Welcome to Replay!👋 Here are some things to try:");
  console.log("1. Clicking on a console message");
  console.log("2. Mousing over a line number");
  console.log("3. Adding a print statement!");
  console.log("");
  console.log('Say "hi" in Discord! replay.io/discord');
}

function onClick(button, number) {
  randomizeIllustration(button, number);

  if (!showEasterEgg && circlesAreAllTheSameColor()) {
    showEasterEgg = true;
    lightUpFireworks();
  }
}

function lightUpFireworks() {
  const headerDiv = document.querySelector("h1");
  headerDiv.classList.add("text-black");
  headerDiv.classList.remove("text-white");
  headerDiv.innerText = "Great Scott!";

  const helperDiv = document.querySelector(".quote");
  helperDiv.classList.add("text-black");
  helperDiv.classList.remove("italic");
  helperDiv.classList.remove("text-white");
  helperDiv.innerText =
    "Well done! Now hit the stop button up top so we can pop the hood on your recording and check it out.";

  const bodyDiv = document.querySelector("BODY");
  bodyDiv.classList.add("bg-white");
  bodyDiv.classList.remove("bg-black");

  log(() => {
    printWelcomeMessage();
  });
}

function randomizeIllustration(button, number) {
  const originalClass = button.classList[button.classList.length - 1];
  let image = IMAGES[Math.floor(Math.random() * IMAGES.length)];

  // make sure an illustration doesn't happen twice
  if (image == originalClass && image != "doc") {
    image = "doc";
  } else if (image == originalClass && image == "doc") {
    image = "clocktower";
  }

  const newClass = image;

  button.classList.remove(originalClass);
  button.classList.add(newClass);
}

function circlesAreAllTheSameColor() {
  const buttons = document.querySelectorAll("button");
  const colors = [...buttons].map(
    (button) => button.classList[button.classList.length - 1]
  );
  const firstColor = colors[0];

  return colors.every((color) => firstColor === color);
}

initialize();
