import React, { useState } from 'react';

const NewBoxForm = ({ addBox }) => {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBox = {
      width,
      height,
      backgroundColor,
    };

    addBox(newBox);

    setWidth('');
    setHeight('');
    setBackgroundColor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="width">Width:</label>
        <input
          type="text"
          id="width"
          value={width}
          onChange={(event) => setWidth(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          type="text"
          id="height"
          value={height}
          onChange={(event) => setHeight(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="backgroundColor">Background Color:</label>
        <input
          type="text"
          id="backgroundColor"
          value={backgroundColor}
          onChange={(event) => setBackgroundColor(event.target.value)}
        />
      </div>
      <button type="submit">Create Box</button>
    </form>
  );
};

export default NewBoxForm;