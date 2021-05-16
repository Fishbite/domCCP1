// // examine document
// // console.log(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // change the document elements
// document.title = 123;
// console.log(document.title);
// // reading other stuff in the dom
// console.log(document.doctype);
// console.log(document.head); // problem with this in ff

/* ============ IMPORTANT!!!!!!!!!!! ============ */
// console.log(document.all); // all is depricated! but it returns an html collection object:

// !!! REALLY important: examine the HTMLAllCollection object to get the correct index number of the element you want to target

// console.log(document.all[1]); // == head in html5
// console.log(document.all[8]); // header on line 11 of this document
// console.log(document.forms);
// console.log(document.links);

// getElementById //
// const headerTitle = document.getElementById("header-title");
// headerTitle.textContent = "Hello"; // does not honour styles
// console.log(headerTitle);
// headerTitle.innerText = "Goodbye"; // honours styles
// headerTitle.innerHTML = "<h3>Helloooo</h3>";
// const header = document.getElementById("main-header");
// header.style.borderBottom = "3px solid black";
// const headerContainer = document.querySelector(".header-container");
// console.log(typeof headerContainer.style.backgroundColor);
// headerContainer.style.backgroundColor = "lightskyblue";
// getElementsByClassName //
// const items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello 2";
// items[1].style.backgroundColor = "lightskyblue";

// // gives error because we have to loop through each item

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "lightskyblue";
// }
// items[0].style.backgroundColor = "var(--clr-green)";
// items[1].style.backgroundColor = "palegreen";

// getElementsByTagName
// const h2 = document.getElementsByTagName("h2");
// console.log(h2);
// console.log(h2[1]);
// h2[1].textContent = "Hello 2";
// h2[1].style.backgroundColor = "lightskyblue";

// // gives error because we have to loop through each item

// for (let i = 0; i < h2.length; i++) {
//   h2[i].style.backgroundColor = "lightskyblue";
// }
// h2[0].style.backgroundColor = "var(--clr-green)";
// h2[1].style.backgroundColor = "palegreen";

// querySelector
// const header = document.querySelector("#main-header");
// header.style.borderBottom = "3px solid darkblue";
// // querySelector only grabs the first instance of the element in the DOM
// const input = document.querySelector("input");
// input.value = "Hey Dude :)";
// const submit = document.querySelector('input[type="submit"]');
// submit.value = "Add";

// const item = document.querySelector(".list-group-item");
// item.style.color = "red";
// const lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "green";

// const secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "goldenrod";
// // querySelectorAll
// const titles = document.querySelectorAll(".title");
// titles[0].textContent = "add items below";

// const odd = document.querySelectorAll("li:nth-child(odd)");
// const even = document.querySelectorAll("li:nth-child(even)");
// console.log(odd.length);
// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "#ddddff";
//   even[i].style.backgroundColor = "#ffff99";
//   console.log(i);
//   console.log(odd[i].style.backgroundColor);
// }
