// Creating and appending a DOM element to a webpage
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


// a <p> with red text that says “Hey I’m red!”
const redParagraph = document.createElement("p");
redParagraph.textContent = "This is a red paragraph";
redParagraph.style.color = "red";
container.appendChild(redParagraph);

// an <h3> with blue text that says “I’m a blue h3!”
const blueHeading = document.createElement("h3");
blueHeading.textContent = "This is a blue heading!"
blueHeading.style.color = "blue";
container.appendChild(blueHeading);

// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”

const pinkDiv = document.createElement("div");
pinkDiv.style.border = "1px solid black";
pinkDiv.style.backgroundColor = "pink";

const header = document.createElement("h1");
header.textContent = "I'm in a div";
pinkDiv.appendChild(header);

const anotherParagraph = document.createElement("p");
anotherParagraph.textContent = "ME TOO!";
pinkDiv.appendChild(anotherParagraph);

container.appendChild(pinkDiv);
