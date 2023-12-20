import React, { useState } from 'react';
import "./style.css";

function Tool5() {
  const [items, setItems] = useState('');
  const [selectedItem, setSelectedItem] = useState('');

  const handleItemsChange = (e) => {
    setItems(e.target.value);
  };

  const pickRandomItem = () => {
    const itemArray = items.split(',').map(item => item.trim()).filter(Boolean);
    if (itemArray.length > 0) {
      const randomIndex = Math.floor(Math.random() * itemArray.length);
      setSelectedItem(itemArray[randomIndex]);
    } else {
      setSelectedItem('');
    }
  };

  return (
    <div className="random-choice-generator">
      <textarea
        className="input-items"
        value={items}
        onChange={handleItemsChange}
        placeholder="Enter choices separated by commas (e.g., option1, option2, option3)"
      ></textarea>
      <button className="pick-button" onClick={pickRandomItem}>Pick a Random Choice</button>
      {selectedItem && <div className="result">Selected: {selectedItem}</div>}
    </div>
  );
}

export default Tool5;
