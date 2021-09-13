const IMAGES = ["delorean", "clocktower", "doc", "hoverboard"];
let showEasterEgg = false;

const log = (callback) => setTimeout(callback, 100);

function preloadImage(url) {
  var img = new Image();
  img.src = url;
}

function initialize() {
  const buttons = document.querySelectorAll("button");

  [...buttons].forEach((button, index) => {
    button.addEventListener("click", () => onClick(button, index + 1));
  });
  console.log("The page has loaded");
  preloadImage("/demo/demo_hoverboard.png");
}

function forceRender() {
  const body = document.querySelector("body");
  const placeholder = document.createElement("div");
  body.appendChild(placeholder);
  body.removeChild(placeholder);
}

function printWelcomeMessage() {
  console.log(
    "Welcome to Replay! 👋 Here are some things you can try:\n\n1. Try clicking in the console message to time travel to that point in time!\n2. Try mousing over line numbers to see how often each line of code was run.\n3. Try adding a breakpoint and navigating around. Line 31 in demo-script.js is a good one to try!\n4. Come chat with us on Discord! http://replay.io/discord/"
  );
}

function onClick(button, number) {
  console.log(`Currently calling the button ${number}'s click event handler`);
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

  const bodyDiv = document.querySelector(".main");
  bodyDiv.classList.add("bg-white");
  bodyDiv.classList.remove("bg-black");

  log(() => {
    console.log("Great Scott! You did it! 🔥");
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

  console.log(image);
  const newClass = image;

  button.classList.remove(originalClass);
  button.classList.add(newClass);

  log(() => {
    console.log(`Turned circle ${number} to ${image}`);
  });
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
