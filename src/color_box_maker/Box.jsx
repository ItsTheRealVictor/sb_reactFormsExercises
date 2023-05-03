import React from 'react';

const Box = ({ id, width, height, backgroundColor, removeBox }) => {
  const boxStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor,
  };

  const handleRemove = () => {
    removeBox(id);
  };

  return (
    <div className="box" style={boxStyle}>
      <button className="remove-button" onClick={handleRemove}>
        X
      </button>
    </div>
  );
};

export default Box;