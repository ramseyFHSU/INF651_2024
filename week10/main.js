// Click events

let button = document.getElementById("button");
let output = document.getElementById("output");

button.addEventListener("click", buttonClick);

function buttonClick(e) {
  console.log("Button clicked");
  document.getElementById("header-title").textContent =
    "Hello John Welcome to TM";
  document.querySelector("#main").style.backgroundColor = "#f4f4f4";
  console.log(e);
  console.log(e.target);
  console.log(e.target.id);
  console.log(e.target.className);
  console.log(e.target.classList);
  console.log(e.target.classList[1]);
  output.innerHTML = "<h3>" + e.target.id + "</h3>";
  console.log(e.type);
  console.log(e.clientX);
  console.log(e.clientY);
  console.log(e.shiftKey);
  console.log(e.altKey);
}

// Mouse Events
let button2 = document.getElementById("button");
let box = document.getElementById("box");
let output2 = document.getElementById("output");

// button.addEventListener("click", runEvent);
button2.addEventListener("dblclick", runEvent);
button2.addEventListener("mouseup", runEvent);
button2.addEventListener("mousedown", runEvent);
button2.addEventListener("mouseenter", runEvent);
button2.addEventListener("mouseleave", runEvent);
box.addEventListener("mouseover", runEvent);
box.addEventListener("mouseout", runEvent);
box.addEventListener("mousemove", runEvent);

function runEvent(e) {
  console.log("Event Type: " + e.type);
  output2.innerHTML =
    "<h3>Mouse x:" + e.offsetX + "</h3><h3>" + e.offsetY + "</h3>";
}

//KeyBoard Even
let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector("form");
let select = document.querySelector("select");

itemInput.addEventListener("keydown", runEvent);
itemInput.addEventListener("keyup", runEvent);
itemInput.addEventListener("focus", runEvent);
itemInput.addEventListener("blur", runEvent);
itemInput.addEventListener("cut", runEvent);
itemInput.addEventListener("paste", runEvent);

select.addEventListener("change", runEvent);

form.addEventListener("submit", runEvent);

function runEvent(e) {
  e.preventDefault();
  console.log("Event Type: " + e.type);
}
