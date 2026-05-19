import React from "react";
import ReactDOM from "react-dom/client";

/**Creating React Element : START */

// const heading = React.createElement(
//   "h1", // element type
//   { id: "heading", xyz: "abc" }, // props: attributes and values
//   "Hello World from React!", // children: content inside the element
// );
// console.log(heading); // object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // Coverts the React element to HTML and then adds it to the DOM

/**Creating React Element : END */

/** Creating Nested Structure: START*/

/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am an h1 tag</h1>
 *          <h2>I am an h2 tag</h2>
 *      </div>
 * <div id="child2">
 *          <h1>I am an h1 tag</h1>
 *          <h2>I am an h2 tag</h2>
 *      </div>
 * </div>
 * ReactElement(Object) => HTML(Browser Understands) => DOM(Browser Manipulates)
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is Namaste React 🚀"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
]);

console.log(parent); // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // Coverts the React element to HTML and then adds it to the DOM

/** Creating Nested Structure: END*/
