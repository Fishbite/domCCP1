/* events */
// get the button element
const button = document.getElementById("button");
// add event listener and build the function inide the event listener
// button.addEventListener("click", function () {
//   console.log("123");
// });
// or call an external function
button.addEventListener("click", buttonClick);

function buttonClick() {
  console.log("button clicked");
  //change the title text
  document.getElementById("header-title").textContent = "changed";
  // change the background colour
  document.querySelector(".form-container").style.backgroundColor = "#f4f4f4";
}
