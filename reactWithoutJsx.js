/* 
    React.createElement() creates an react element which is a javascript object
    so now parent is a javascript object not a html tag
    the render() function takes the javascript object(react element) and converts it into a html tag in behind the scenes
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "I'm h1 tag"),
      React.createElement("h2", {}, "I'm h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I'm h1 tag from child2"),
      React.createElement("h2", {}, "I'm h2 tag from child2"),
    ]),
  ] // if you want to create the multiple children wrap them in a list as [h1,h2] as above.
);

console.log(parent); // javascript object(react element) created using React.createElement

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Welcome to React Playground"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // react.render replaces the the root with the parent element
root.render(heading); // this root.render() replaces the parent which is already placed root with the heading
