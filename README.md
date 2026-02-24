1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: 
a)	getElementById() selects a single element using its unique id and returns one element. It is simple and usually the fastest method.
b)	getElementsByClassName() selects elements using a class name and returns a live HTMLCollection, meaning it automatically updates when the DOM changes.
c)	querySelector() uses CSS selectors (like #id, .class, div p, etc.) and returns only the first matching element.
d)	querySelectorAll() also uses CSS selectors but returns all matching elements as a static NodeList, which does not update automatically when the DOM changes.
e)	Live vs Static: getElementsByClassName() is live, while querySelectorAll() is static.
f)	Flexibility: querySelector() and querySelectorAll() are more flexible because they support full CSS selector syntax.
g)	Modern Usage: In modern development, querySelector() and querySelectorAll() are often preferred due to their flexibility and cleaner syntax.

2. How do you create and insert a new element into the DOM?
Answer: 
a. Create the element – Use document.createElement() to create a new HTML element.
const newDiv = document.createElement("div");
b. Add content – Set text or HTML inside the element using textContent or innerHTML.
newDiv.textContent = "Hello World";
c. Set attributes (optional) – Add id, className, or other attributes as needed.
newDiv.id = "newElement";
newDiv.className = "box";
d. Select the parent element – Choose where in the DOM you want to insert the new element.
const parent = document.body;
e. Insert into the DOM – Use append(), appendChild(), prepend(), or insertBefore().
parent.appendChild(newDiv);

3. What is Event Bubbling? And how does it work?
Answer: 
Event Bubbling is when an event starts on a child element and then bubbles up to its parent elements in the DOM. For example, if you click a button inside a div, the button’s click event runs first, then the div’s click event.
Example:
<div id="parent">
  <button id="child">Click Me</button>
</div>
document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});
Output when button is clicked:
Child clicked
Parent clicked

4. What is Event Delegation in JavaScript? Why is it useful?
Answer: 
Event Delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of multiple listeners on individual child elements. Because of event bubbling, the parent can handle events for its current and future child elements.
It is useful as
a) Better performance – fewer event listeners are needed.
b)	Works with dynamic elements – newly added child elements will automatically be handled.
c)	Cleaner code – easier to manage one listener on the parent than many on children.
Example:
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
document.getElementById("list").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});


5. What is the difference between preventDefault() and stopPropagation() methods?
Answer: 
Difference between preventDefault() and stopPropagation() methods:
a. Purpose:
•	preventDefault() stops the browser’s default action (like link navigation or form submission).
•	stopPropagation() stops the event from bubbling or capturing through parent/ancestor elements.
b. Effect on DOM:
•	preventDefault() does not stop the event from propagating; other listeners still run.
•	stopPropagation() prevents the event from reaching parent elements.
c. Example:
•	preventDefault() → Prevent a link from opening:
e.preventDefault();
•	stopPropagation() → Prevent a parent click event from firing:
e.stopPropagation();
d. Usage:
•	preventDefault() is used to block default browser behavior.
•	stopPropagation() is used to control event flow in the DOM.


