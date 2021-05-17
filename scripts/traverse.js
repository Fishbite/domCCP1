/* Traversing the DOM */
// const itemList = document.querySelector("#items");

// parent node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#fefeff"; // you can use parentElement instead of parent node!

// childNodes
// console.log(itemList.childNodes);
// can be troublesome as it return linebreaks too :(()

// using  children can be better
// console.log(itemList.children);

// firstChild
// can be pretty useless as it can return line breaks
// console.log(itemList.firstChild);

// firstChildElement LastChildElement
// this does not return line breaks :))
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.style.backgroundColor = "#ffffaa";
// itemList.lastElementChild.style.backgroundColor = "#ffffaa";

// nextSibling
// can return line breaks so pooh!
// console.log(itemList.nextSibling);

// nextElementSiblig can be better
// of course, it does have to have a sibling!!! :P
// const mainHeader = document.querySelector("#main-header");
// console.log(mainHeader.nextElementSibling);
// mainHeader.nextElementSibling.style.backgroundColor = "#fefeff";

// // previousSibling
// // can return line breaks so pooh! :P
// const itemList = document.querySelector("#items");
// //previousElementSibling is better :))
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "#3333ff";

// new div
let newDiv = document.createElement("div");

//add class
newDiv.className = "hello";
//add id
newDiv.id = "hello1";
// add attribute
newDiv.setAttribute("title", "HelloDiv");
newDiv.setAttribute("data-set", "id");
// create text node
let newDivText = document.createTextNode("Hello World");
//add text to div
newDiv.appendChild(newDivText);

const container = document.querySelector("header .header-container");
let h1 = document.querySelector("header h1");
newDiv.style.fontSize = "0.75rem";

// insert newDiv into the DOM
// syntax: insertBefore(ThingToInsert, insertBeforeThisElement)
container.insertBefore(newDiv, h1);

console.log(newDiv);
