import React from 'react';

const Greet = ({name, continentName}) => {
  return (
    <div>
      <h1>Hello {name} located in {continentName}</h1>
    </div>
  );
};

export default Greet;
