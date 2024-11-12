import React, { useState } from "react";

const CustomDropdown = () => {
  const [selectedValue, setSelectedValue] = useState([]);

  const handleChange = (event) => {
    const { options } = event.target;
    const selectedOptions = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
         selectedOptions.push([...selectedOptions,options[i].value]);
      }
    }
    setSelectedValue([...selectedValue, selectedOptions]);

  };

  return (
    <>
      <div>
        <label htmlFor="dropdown">choose an option</label>
        <select
          value={selectedValue}
          onChange={handleChange}
          id="dropdown"
          multiple
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value={1}>one</option>
          <option value={2}>two</option>
          <option value={3}>three</option>
          <option value={4}>four</option>
        </select>
        <p>Selected values: {selectedValue.join(", ")}</p>
      </div>
    </>
  );
};

export default CustomDropdown;
