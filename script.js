// 1) Select the section with an id of container without using querySelector.
let containerId = document.getElementById("container");
//containerId.style.color = "orange"

// 2) Select the section with an id of container using querySelector.
let containerId2 = document.querySelector("#container");

// 3) Select all of the list items with a class of "second".
let secondEls= document.getElementsByClassName("second");


// 4) Select a list item with a class of third, but only the list item inside of the ol tag.
let onlyThird = document.querySelector("ol .third");


// 5) Give the section with an id of container the text "Hello!".

let text = document.createElement("p");
text.innerText = "Hello";
document.querySelector("#container").appendChild(text);


// 6) Add the class main to the div with a class of footer.
let footerCl = document.querySelector(".footer");
footerCl.classList.add("main");

// 7) Remove the class main on the div with a class of footer.
footerCl.classList.remove("main");

// 8) Create a new li element.
let newLi = document.createElement("li");

// 9) Give the li the text "four".
newLi.innerText = "four";
//newLi.innerHTML= `<li>four<li/>`;

// 10) Append the li to the ul element.
document.querySelector("ul").appendChild(newLi);


// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".
let olElms = document.querySelectorAll("ol li");
for(let i = 0; i < olElms.length; i++){
    olElms[i].style.backgroundColor = "green"
}

// 13) Remove the div with a class of footer.
const div = document.querySelector('#footer');
div.remove()