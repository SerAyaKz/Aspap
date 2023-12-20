import React, { useState } from 'react';
import "./style.css";

function Tool16() {
  const [rangeFrom, setRangeFrom] = useState(0);
  const [rangeTo, setRangeTo] = useState(100);
  const [quantity, setQuantity] = useState(1);
  const [randomNumbers, setRandomNumbers] = useState([]);

  const generateRandomNumbers = () => {
    if (quantity > 10000) {
      alert('The maximum amount of numbers is 10,000.');
      return;
    }

    const numbers = Array.from({ length: quantity }, () => 
      Math.floor(Math.random() * (rangeTo - rangeFrom + 1)) + rangeFrom
    );
    setRandomNumbers(numbers);
  };

  return (
    <div className="random-number-generator">
      <div>
        <label>
          Start Range:
          <input type="number" value={rangeFrom} onChange={(e) => setRangeFrom(Number(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          End Range:
          <input type="number" value={rangeTo} onChange={(e) => setRangeTo(Number(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
        </label>
      </div>
      <button onClick={generateRandomNumbers}>Generate Numbers</button>
      {randomNumbers.length > 0 && (
        <div className="random-numbers-display">
          {randomNumbers.join(', ')}
        </div>
      )}
    </div>
  );
}

export default Tool16;
