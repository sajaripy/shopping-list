var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
// var li = document.querySelectorAll("li");
var items = document.querySelectorAll("li");
// var rmbutton = document.querySelector("li + button");

function inputLength() {
  return input.value.length;
}

function createButton(item) {
  var btn2 = document.createElement("button");
  //creates buttons
  btn2.appendChild(document.createTextNode("remove"));
  btn2.className = "button dark";
  item.parentElement.appendChild(btn2);
}

function createListElement() {
  var li = document.createElement("li");
  var div = document.createElement("div");
  li.appendChild(document.createTextNode(input.value));
  div.className = "listItem";
  ul.appendChild(div);
  div.appendChild(li);
  createButton(li);
  input.value = "";
}

items.forEach(function (item) {
  createButton(item);
});

function removeListElement(element) {
  if (event.target.tagName === "BUTTON") {
    element.target.parentElement.remove();
  }
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeydown(event) {
  if (inputLength() > 0 && event.key === "Enter") {
    createListElement();
  }
}

function listToggle(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  }
}

function handleUIClick(element) {
  listToggle(element);
  removeListElement(element);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keydown", addListAfterKeydown);

ul.addEventListener("click", handleUIClick);

if (window.location.reload) {
  input.value = "";
}


