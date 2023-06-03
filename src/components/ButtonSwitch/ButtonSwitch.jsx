import React, { useState } from 'react';
import './ButtonSwitch.css';

const ButtonSwitch = () => {
  const [isActiveDarkMode, setIsActiveDarkMode] = useState(false);
  const haldleActiveDarkMode = () => {
    setIsActiveDarkMode(!isActiveDarkMode);
    document.body.classList.toggle('dark__mode');
  };
  return (
    <div className="toggle-switch">
      <input
        className="toggle-input"
        id="toggle"
        type="checkbox"
        onClick={haldleActiveDarkMode}
      />
      <label className="toggle-label" htmlFor="toggle"></label>
    </div>
  );
};

export default ButtonSwitch;
