// declare and get element from index.html
let personPlay = 0;
let challengeQuestion = 0;
// Giving countable section animation
setTimeout(() => {
  setInterval(() => {
    if (personPlay < 725) {
      document.getElementById("personNum").innerHTML = personPlay++;
    } else if ((personPlay = 725)) {
      document.getElementById("personNum").innerHTML = "725+";
    }
  }, 1);
}, 500);
setTimeout(() => {
  setInterval(() => {
    if (challengeQuestion < 103) {
      document.getElementById("challengeNum").innerHTML = challengeQuestion++;
    } else if ((challengeQuestion = 103)) {
      document.getElementById("challengeNum").innerHTML = "103+";
    }
  }, 28);
}, 500);

// for easier development, adding event on sign in while clicked
signInButton.addEventListener("click", () => {
  signInText.innerHTML = "Sign In to";
});
