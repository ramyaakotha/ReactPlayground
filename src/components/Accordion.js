
/*Implement multiple accordion when clicked on each accordion only that
 should get opened rest should closed and each containing a checkbox.
 And should only get submitted when all the checkboxes are clicked */

import { useState } from "react";

const Accordion = ({ data, setData }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleClick = (index) => {
    setExpandedIndex(expandedIndex === index ? 0 : index);
  };

  const handleCheckbox = (index) => {
    setData((prevData) => {
      const newData = [...prevData]; // taking shallow copy of prevData, so that a refernce is created and react identifies the change has benn made
      newData[index] = { ...newData[index], checked: !newData[index].checked }; // and also shallow copy of the particular object which changed
      return newData;
    });
  };

  const handleSubmit = () => {
    let count = 0;
    data.map((item) => {
      item.checked === true ? (count += 1) : count;
      return count;
    });

    console.log(data.length, count);
    count === data.length ? alert("submitted") : alert("failed to submitt");
  };

  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <div onClick={() => handleClick(index)} style={{ margin: "10px" }}>
            {item.heading}
          </div>
          {expandedIndex === index && (
            <div
              style={{
                border: "1px solid black",
                borderRadius: "5px",
                margin: "10px",
                padding: "5px",
              }}
            >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => {
                  handleCheckbox(index);
                }}
              />
              {item.desc}
            </div>
          )}
        </div>
      ))}

      <button onClick={handleSubmit} style={{ margin: "10px" }}>
        Submit
      </button>
    </>
  );
};

export default Accordion;
