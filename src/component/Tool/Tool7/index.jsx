import React, { useState } from 'react';
import "./style.css";

function Tool7() {
  const [passwordLength, setPasswordLength] = useState(12);
  const [securityLevel, setSecurityLevel] = useState('Medium');
  const [generatedPassword, setGeneratedPassword] = useState('');

  const generatePassword = () => {
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+=-{}[]:;<>,.?/';

    let characters = lowerCaseChars;
    if (securityLevel === 'Medium') {
      characters += upperCaseChars + numbers;
    } else if (securityLevel === 'High') {
      characters += upperCaseChars + numbers + symbols;
    }

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    setGeneratedPassword(password);
  };

  return (
    <div className="password-generator">
      <div className="settings">
        <label>
          Security Level: 
          <select value={securityLevel} onChange={(e) => setSecurityLevel(e.target.value)}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>
        <label>
          Password Length:
          <input type="number" value={passwordLength} onChange={(e) => setPasswordLength(e.target.value)} min="6" max="20" />
        </label>
      </div>
      <button className="generate-button" onClick={generatePassword}>Generate Password</button>
      {generatedPassword && <div className="result">Generated Password: {generatedPassword}</div>}
    </div>
  );
}

export default Tool7;
