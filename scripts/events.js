/* events */
// get the button element
const button = document.getElementById("button");
// add event listener and build the function inide the event listener
// button.addEventListener("click", function () {
//   console.log("123");
// });
// or call an external function
// button.addEventListener("click", buttonClick);

// function buttonClick(e) {
//   // console.log("button clicked");
//   // //change the title text
//   // document.getElementById("header-title").textContent = "changed";
//   // // change the background colour
//   // document.querySelector(".form-container").style.backgroundColor = "#f4f4f4";
//   // console.log(e.target);
//   // console.log(e.target.id);
//   // console.log(e.target.class);
//   // console.log(e.target.classList); // returns DOMTokenList
//   // let output = document.getElementById("output");
//   // output.innHTML = "<h3>" + e.target.id + "</h3>";
//   // return teh type of event that occurred
//   // console.log(e.type);
//   //return mouse x position in the client window
//   // console.log(e.clientX);
//   // return x mouse postition relative to the element
//   //console.log("x:", e.offsetX);
//   //console.log("y:", e.offsetY); // y
//   //is the alt key being held down? Ture / false
//   console.log("alt:", e.altKey);
//   console.log("ctrl:", e.ctrlKey); // ctrl key
//   console.log("shift:", e.shiftKey); // shift key
// }

// ============= Mouse events =========== \\
// button.addEventListener("click", runEvent);
// button.addEventListener("dblclick", runEvent);
// button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseup", runEvent);

// listen for mouse event on an element

var box = document.getElementById("box");
// console.log(box);

// listen to mouse enter / leave parent element
//
// listen to mouse over / out parent & child element
// box.addEventListener("mouseover", runEvent);
// box.addEventListener("mouseout", runEvent);
// listen to mouse moving in an element
box.addEventListener("mousemove", runEvent);

function runEvent(e) {
  console.log("event type:", e.type);
  //output the  mouse coordinates to the screen
  // output.innerHTML =
  //   "<h3>mouseX:" + e.offsetX + "</h3><h3>mouseY:" + e.offsetY + "</h3>";

  // change the colour of the box using mouse coords
  box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",0)";
}
