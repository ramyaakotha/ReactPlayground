import React from "react";
import ReactDom from "react-dom/client";



// react  functional component with normal javascript function
const Title = function () {
  return <h1 className="heading">Hello from JSX</h1>;
};

// component composition, composing two components into one like placing the Title component in HeadingComponent
// react functional component with arrow function (Best practice and industry standard)
const HeadingComponent = () => (
  <h1>
    <Title />
    Hello From React Component👋
    {Title()} 
  </h1>
);

/* Title component can be called as a normal (line no : 17)js function instead as a component in the curly brace, 
because at the end og the day react Functional component is a javascript function and any javascript code 
can be written inside curly braces in JSX */

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
