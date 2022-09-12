// Create Looping Element

const list = document.getElementById("questionList");
const childlist = document.getElementById("questionContainer");
const grandchildlist = document.getElementById("questionContentWrapper");
const greatGrandchildlist = document.getElementById("colorMarker");
const ring = document.getElementById("ring");
const questionParent = document.getElementById("questParent");
const questionChild = document.getElementById("questChild");
const arr5 = childlist.className.split(" ");
const arr4 = grandchildlist.className.split(" ");
const arr3 = greatGrandchildlist.className.split(" ");
const arr2 = ring.className.split(" ");
const arr1 = questionParent.className.split(" ");
const arr0 = questionChild.className.split(" ");
let i = 0;
for (i; i < 99; i++) {
  const createDiv = document.createElement("div");
  let insertIntoParent = childlist.appendChild(createDiv);
  arr4.forEach((e) => {
    insertIntoParent.classList.add(`${e}`, `parentelement$`, `${i}`);
  });
}
let j = 0;
for (j; j < i; j++) {
  const createDiv = document.createElement("div");
  const getChildClassName = document.getElementsByClassName(`parentelement$`);
  const insertIntoChild = getChildClassName[j].appendChild(createDiv);
  arr3.forEach((e) => {
    insertIntoChild.classList.add(`${e}`, `childelement$`);
  });
}
let k = 0;
for (k; k < i; k++) {
  const createDiv = document.createElement("div");
  const getGrandChildClassName = document.getElementsByClassName(`childelement$`);
  const insertIntoGrandChild = getGrandChildClassName[k].appendChild(createDiv);
  arr2.forEach((e) => {
    insertIntoGrandChild.classList.add(`${e}`, `grandchildelement${i}`);
  });
}
let l = 0;
for (l; l < i; l++) {
  const createDiv = document.createElement("div");
  const getChildClassName = document.getElementsByClassName(`parentelement$`);
  const insertIntoParent = getChildClassName[l].appendChild(createDiv);
  arr1.forEach((e) => {
    insertIntoParent.classList.add(`${e}`, `textParentElements$`, `${i}`);
  });
}
let m = 0;
for (m; m < i; m++) {
  const createDiv = document.createElement("div");
  const getChildClassName = document.getElementsByClassName(`textParentElements$`);
  const insertIntoChild = getChildClassName[m].appendChild(createDiv);
  arr0.forEach((e) => {
    insertIntoChild.classList.add(`${e}`, `childtext$`, `${i}`);
  });
}
const getChildText = document.getElementsByClassName("childtext$");
for (let length = 0; length < getChildText.length; length++) {
  getChildText[length].innerHTML = `Question ${length + 2} #Easy`;
}

// Level Event Listener
const levelButton = document.querySelectorAll(".levelNav");
const selectQuestion = document.querySelectorAll(".colorMarker");

let color = [];
let navigationChanging = [];
levelButton.forEach((element) => {
  color.push(element.value);
});
levelButton.forEach((e, i) => {
  navigationChanging.push(e);
  const checker = e.classList.contains(`text-${color[i]}`);
  e.addEventListener("click", () => {
    if (!checker) {
      e.classList.add(`text-${color[i]}`, "font-bold");
      navigationChanging.splice(i, 1);
      console.log(navigationChanging);
      navigationChanging.forEach((element, index) => {
        // element.classList.remove(`text-${color[index]}`, "font-bold");
        navigationChanging.splice(i, element);
        console.log(element);
        console.log(navigationChanging);
        if (navigationChanging[index].classList.contains(`text-${color[index]}`)) {
          e.classList.remove(`text-${color[i]}`, "font-bold");
        }
      });
    }
  });
});
