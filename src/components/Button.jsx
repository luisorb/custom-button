import React from 'react';

const Button = ({ text, color, alto, ancho, cursor }) => {

  return (
    <button className={`${color} ${alto} ${ancho} ${cursor} text-white font-bold rounded`}>
      {text}
    </button>
  );
};

export default Button;