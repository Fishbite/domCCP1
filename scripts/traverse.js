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
const mainHeader = document.querySelector("#main-header");
console.log(mainHeader.nextElementSibling);
mainHeader.nextElementSibling.style.backgroundColor = "#fefeff";

// previousSibling
// can return line breaks so pooh! :P
const itemList = document.querySelector("#items");
//previousElementSibling is better :))
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = "#3333ff";
