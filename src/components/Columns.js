import React from 'react';

function Columns() {
  const itemns = [];
  return (
    <React.Fragment>
      {/* {
        itemns.map(item => (
          <React.Fragment key={item.id}>
            <h1>Title</h1>
            <p>{item.title}</p>
          </React.Fragment>
        ))
      } */}
      <td>Name</td>
      <td>Bruna</td>
    </React.Fragment>
  )
}

export default Columns;

