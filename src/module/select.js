import React, { useState } from 'react';
//s ans //r
const Select = () => {
  const [selectedValues, setSelectedValues] = useState([]);
  const [currentValue, setCurrentValue] = useState('');
  console.log(currentValue);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedValues.length > 0 && selectedValues[selectedValues.length - 1].value === currentValue) {
      const updatedValues = selectedValues.map((item, index) => {

        if (index === selectedValues.length - 1) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
      setSelectedValues(updatedValues);

    } else {
      setSelectedValues([...selectedValues, { value: currentValue, count: 1 }]);
      console.log(selectedValues);
    }

    setCurrentValue('');
  };
  const handleClear = () => {
    setSelectedValues([""])
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select value={currentValue} onChange={(e) => setCurrentValue(e.target.value)}>
          <option value="">Select an option</option>
          <option value="H">H</option>
          <option value="S">S</option>

        </select>
        <button type="submit">Submit</button>
      </form>
        <button type='submit' onClick={handleClear}>clear</button>

      <div style={{ display: 'flex' }}>
        {selectedValues.map((item, index) => (
          <div key={index} style={{ margin: '0 10px' }}>
            {[...Array(item.count)].map((value, i) => (
              <div key={i}>{item.value}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
