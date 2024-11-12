import React from "react";
import ReactDom from "react-dom/client";
import Accordion from "./src/components/Accordion";
import { useState } from "react";
import ReactToaster from "./src/components/ReactToaster";
import FindMax from "./src/components/findMax";
import Rating from "./src/components/Rating";
import CustomDropdown from "./src/components/CustomDropdown";
import ReactTimer from "./src/components/ReactTimer";



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
because at the end of the day react Functional component is a javascript function and any javascript code 
can be written inside curly braces in JSX */




const App = ()=>{
  const [data, setData] = useState([
    {id:1,
      heading: "heading1",
      desc: " description1",
      checked : false
    },
    {id:1,
      heading: "heading2",
      desc: " description2",
      checked : false
    },
    {id:1,
      heading: "heading3",
      desc: " description3",
      checked : false
    }
  ])

 

  return(
    // <Accordion data={data} setData= {setData} />
    // <ReactToaster />
    // <LocalstorageWithExpiry />
    // <FindMax />
    // <Rating />
    // <CustomDropdown />
    <ReactTimer />
  )
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
