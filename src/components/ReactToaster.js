import { useState } from "react";

const ReactToaster = () => {
  const [toastVisibility, setToastVisibility] = useState(false);
  const [componentCount, setComponentCount] = useState([]);

  console.log(componentCount);

  const handleClick = () => {
    setToastVisibility(true);
    setComponentCount([...componentCount, componentCount.length + 1]);
    console.log(componentCount);
  };

  const handleCancel = (indexToRemove) => {
    console.log(indexToRemove);
    setComponentCount(
      componentCount.filter((_, i) => i !== indexToRemove) // filter method loops over the array and checks the given condition and if the condition satisfies puts them in the new array and returns that.
    );
    console.log(componentCount);
  };

  return (
    <>
      <button onClick={handleClick} style={{ margin: "10px" }}>
        Click me
      </button>
      {toastVisibility &&
        componentCount.map((val, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              background: "#ccc",
              alignItems: "center",
              justifyContent: "space-evenly",
              padding: "10px",
              border: " 1px solid black",
              borderRadius: "5px",
              width: "150px",
              height: "30px",
              position: "absolute",
              top: `${index * 50}px`,
              right: "0",
              margin: "30px",
              boxSizing: "border-box",
            }}
          >
            <p> I'm Toast {val}</p>
            <button onClick={() => handleCancel(index)}>X</button>
          </div>
        ))}
    </>
  );
};

export default ReactToaster;
