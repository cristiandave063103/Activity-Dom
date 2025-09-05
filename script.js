const text = document.getElementById("text");
const changeTextBtn = document.getElementById("changeTextBtn");
const addItemBtn = document.getElementById("addItemBtn");
const removeItemBtn = document.getElementById("removeItemBtn");
const myList = document.getElementById("myList");

const texts = [
  "I love spending time outdoors to refresh my mind and body.",
  "These habits keep me disciplined and motivated daily.",
  "Sunsets remind me to slow down and enjoy simple moments."
];
let textIndex = 0;

changeTextBtn.addEventListener("click", () => {
  textIndex = (textIndex + 1) % texts.length;
  text.textContent = texts[textIndex];
});

addItemBtn.addEventListener("click", () => {
  const newHabit = prompt("Enter a new habit:");
  const newImage = prompt("Enter an image URL for this habit:");
  if (newHabit) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = newImage || "https://via.placeholder.com/70";
    img.alt = newHabit;
    img.className = "icon";
    li.appendChild(img);
    li.appendChild(document.createTextNode(" " + newHabit));
    myList.appendChild(li);
  }
});

removeItemBtn.addEventListener("click", () => {
  if (myList.lastChild) {
    myList.removeChild(myList.lastChild);
  }
});
