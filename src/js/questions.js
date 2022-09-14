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
const colorMarker = document.querySelectorAll(".colorMarker");
let color = null;
levelButton.forEach((element) => {
  element.addEventListener("click", () => {
    window.location.assign(window.location.pathname + "#" + element.value);
    location.reload();
  });
  const pathContain = window.location.hash;
  const replaceHash = pathContain.replace("#", "");
  colorMarker.forEach((child) => {
    child.classList.toggle(`bg-${replaceHash}`);
  });
  if (pathContain.includes("greenEasy")) {
    document.querySelector(".questionContainer").classList.remove("hidden");
    document.getElementsByName("easy")[0].classList.add(`text-${replaceHash}`, "font-bold");
    document.getElementsByName("medium")[0].classList.remove(`text-orangeMedium`, "font-bold");
    document.getElementsByName("hard")[0].classList.remove(`text-pinkHard`, "font-bold");
  } else if (pathContain.includes("orangeMedium")) {
    document.querySelector(".questionContainer").classList.remove("hidden");
    document.getElementsByName("easy")[0].classList.remove(`text-greenEasy`, "font-bold");
    document.getElementsByName("medium")[0].classList.add(`text-${replaceHash}`, "font-bold");
    document.getElementsByName("hard")[0].classList.remove(`text-pinkHard`, "font-bold");
  } else if (pathContain.includes("pinkHard")) {
    document.querySelector(".questionContainer").classList.remove("hidden");
    document.getElementsByName("easy")[0].classList.remove(`text-greenEasy`, "font-bold");
    document.getElementsByName("medium")[0].classList.remove(`text-OrangeMedium`, "font-bold");
    document.getElementsByName("hard")[0].classList.add(`text-${replaceHash}`, "font-bold");
  }
});

// let color = [];
// let navigationChanging = [];
// let clicked = false;
// const arrtrue = [false, false, false];
// console.log(clicked);
// levelButton.forEach((element, index) => {
//   clicked = true;
//   color.push(element.value);
//   element.addEventListener("click", () => {
//     console.log(arrtrue);
//     arrtrue[index] = true;
//     console.log(arrtrue);
//     const toTrue = element.setAttribute("name", "true");
//     const getAttribute = element.getAttribute("name");
//     if (getAttribute) {
//       if (arrtrue[index]) {
//         levelButton.forEach((value) => {
//           if (!value.name) {
//             value.classList.remove(`text-${value.value}`, "font-bold");
//           } else {
//             element.classList.add(`text-${element.value}`, "font-bold");
//             colorMarker.forEach((child) => {
//               child.classList.toggle(`bg-${element.value}`);
//             });
//           }
//         });
//       }
//     }
//   });
// });
handleQuestion = () => {
  Swal.fire("The Internet?", "That thing is still around?", "question");
};
