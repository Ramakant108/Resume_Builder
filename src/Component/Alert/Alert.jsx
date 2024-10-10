import React, { useState } from 'react';
import './Alert.css'; // Import custom CSS

const CustomAlert = ({ message, type }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className={`alert ${type}`}>
      <span>{message}</span>
      <button className="close-btn" onClick={() => setVisible(false)}>×</button>
    </div>
  );
};

export default CustomAlert;
