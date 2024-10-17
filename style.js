let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");

let number = h1.dataset.number;
let time = h1.dataset.time;
let number2 = h2.dataset.number;
let time2 = h2.dataset.time;

let count = 0;
function quenter() {
  count++;
  h1.innerHTML = count;
  if (count == number) {
    clearInterval(stop);
  }
}

let stop = setInterval(() => {
  quenter();
}, 450);

let count2 = 22;
function quenter2() {
  count2--;
  h2.innerHTML = count2;
  if (count2 == number2) {
    clearInterval(stop2);
  }
}

let stop2 = setInterval(() => {
  quenter2();
}, 450);
