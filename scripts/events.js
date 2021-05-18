/* events */
// get the button element
const button = document.getElementById("button");
// add event listener and build the function inide the event listener
// button.addEventListener("click", function () {
//   console.log("123");
// });
// or call an external function
button.addEventListener("click", buttonClick);

function buttonClick(e) {
  console.log("button clicked");
  // //change the title text
  // document.getElementById("header-title").textContent = "changed";
  // // change the background colour
  // document.querySelector(".form-container").style.backgroundColor = "#f4f4f4";
  console.log(e.target);
  console.log(e.target.id);
  console.log(e.target.class);
  console.log(e.target.classList); // returns DOMTokenList
  let output = document.getElementById("output");
  output.innHTML = "<h3>" + e.target.id + "</h3>";
}
