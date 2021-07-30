const COLORS = ["red", "blue", "yellow", "pink", "green", "purple"];
let showEasterEgg = false;

const log = (callback) => setTimeout(callback, 100);

function initialize() {
  const buttons = document.querySelectorAll("button");

  [...buttons].forEach((button, index) => {
    button.addEventListener("click", () => onClick(button, index + 1));
  });

  console.log("The page has loaded");
  printWelcomeMessage();
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
  randomizeCircleColor(button, number);

  if (!showEasterEgg && circlesAreAllTheSameColor()) {
    showEasterEgg = true;
    lightUpFireworks();
  }
}

function lightUpFireworks() {
  const bigDiv = document.querySelector("body > div");

  bigDiv.classList.remove("bg-white");
  bigDiv.classList.add("bg-pink-100");

  const contentContainer = document.querySelector("main > div");
  const newContent = document.createElement("div");
  const text = document.createElement("strong");
  text.innerText = "You made all the circles the same color!";

  newContent.appendChild(text);
  contentContainer.appendChild(newContent);

  log(() => {
    console.log("🐣🐣🐣 You've hatched our easter egg! 🐣🐣🐣");
  });
}

function randomizeCircleColor(button, number) {
  const originalClass = button.classList[button.classList.length - 1];
  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  const newClass = `bg-${color}-600`;

  button.classList.remove(originalClass);
  button.classList.add(newClass);

  log(() => {
    console.log(`Turned circle ${number} to ${color}`);
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
