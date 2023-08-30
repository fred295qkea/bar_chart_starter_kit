const list = document.querySelector("ul");
const arr = [];

setInterval(randTal, 1000);

function randTal() {
  let barHeight = Math.floor(Math.random() * 100) + 1;
  const li = document.createElement("li");
  li.style.setProperty("--height", barHeight);
  list.appendChild(li);
  if (arr.length >= 20) {
    // arr.pop();
    list.firstElementChild.remove();
  } else {
    arr.unshift(barHeight);
  }

  console.log(arr.length);
}
